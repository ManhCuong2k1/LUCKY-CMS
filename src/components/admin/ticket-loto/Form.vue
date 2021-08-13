<template>
    <div>
        <el-form
            ref="luckyData"
            :model="luckyData"
            label-width="120px"
            class="w-full"
        >
            <el-form-item label="Mã vé" prop="id">
                <el-col :span="12" class="order-detail">
                    <p>{{ luckyData.id }}</p>
                </el-col>
            </el-form-item>
            <el-form-item label="Khách hàng" prop="">
                <el-col :span="12" class="order-detail">
                    <p>{{ luckyData.user.phone }}</p>
                </el-col>
            </el-form-item>
            <el-form-item label="Loại vé" prop="">
                <el-col :span="6" class="order-detail">
                    <p>{{ type(luckyData.type) }} {{ checkLevel(luckyData.orders[0].orderDetail) }}</p>
                </el-col>
            </el-form-item>
            <el-form-item label="Nội dung" prop="LuckyCategoryId">
                <el-col :span="12" class="order-detail pb-4">
                    <span v-for="orderDetail in luckyData.orders[0].orderDetail.data" :key="orderDetail" class="block h-6">
                        {{ orderDetail }}
                    </span>
                </el-col>
            </el-form-item>
            <el-form-item label="Số kỳ" prop="LuckyCategoryId">
                <el-col :span="12" class="order-detail">
                    <p>{{ luckyData.orders.length }}</p>
                </el-col>
            </el-form-item>
            <el-form-item label="Trạng thái" prop="status">
                <el-col :span="12" class="order-detail">
                    <p>{{ status( luckyData.orderStatus) }}</p>
                </el-col>
            </el-form-item>

            <el-form-item label="Lấy ảnh vé" class="content-center">
                <div class="flex">
                    <div>
                        <el-upload
                            class="avatar-uploader mr-5"
                            action="/api/upload/single-upload"
                            :headers="headers"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccessBefore"
                            :before-upload="beforeUploadImage"
                        >
                            <img v-if="image.beforeImage" :src="image.beforeImage" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon" />
                        </el-upload>
                        <span>Ảnh trước</span>
                    </div>
                    <div>
                        <el-upload
                            class="avatar-uploader"
                            action="/api/upload/single-upload"
                            :headers="headers"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccessAfter"
                            :before-upload="beforeUploadImage"
                        >
                            <img v-if="image.afterImage" :src="image.afterImage" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon" />
                        </el-upload>
                        <span>Ảnh sau</span>
                    </div>
                </div>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="saveImages(dataForm)">
                    Lưu
                </el-button>
                <el-button type="primary" @click="deleteTicket(luckyData.id)">
                    Hủy vé
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import cloneDeep from 'lodash/cloneDeep';
    import { image as toImage } from '~/utils/url';
    import { checkType, checkStatus } from '~/utils/configData';

    export default {
        components: {
        },

        props: {
            luckyData: {
                type: Object,
                required: false,
            },
            dataImage: {
                type: Object,
                required: false,
            },
        },
        data() {
            const dataForm = cloneDeep(this.luckyData.image);
            return {
                dataForm,
                loading: false,
                image: {
                    beforeImage: '',
                    afterImage: '',
                },
                imagesBefore: null,
                imagesAfter: null,
                headers: {
                    Authorization: this.$auth.strategy.token.get(),
                },
            };
        },
        computed: {
            ...mapState('admin/images', ['images']),
        },
        methods: {
            toImage,
            type(type) {
                return checkType(type);
            },
            status(status) {
                return checkStatus(status);
            },
            handleAvatarSuccessBefore(res, file) {
                this.image.beforeImage = URL.createObjectURL(file.raw);
                this.imagesBefore = res.imageUrl;
            },
            beforeUploadImage(file) {
                const isJPG = file.type === 'image/jpeg' || 'image/gif' || 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('Upload file can only be in picture format!');
                }
                if (!isLt2M) {
                    this.$message.error('Avatar picture size can not exceed 2MB!');
                }
                return isJPG && isLt2M;
            },
            handleAvatarSuccessAfter(res, file) {
                this.image.afterImage = URL.createObjectURL(file.raw);
                this.imagesAfter = res.imageUrl;
            },
            saveImages() {
                if (this.dataImage.data === null) {
                    this.$store.dispatch('admin/orderLucky/createImage', { data: { imageBefore: this.imagesBefore, imageAfter: this.imagesAfter }, id: this.luckyData.id });
                } else {
                    this.$store.dispatch('admin/orderLucky/updateImage', { data: { imageBefore: this.imagesBefore, imageAfter: this.imagesAfter }, id: this.luckyData.id });
                }
                this.$message({
                    message: 'Gửi ảnh thành công!',
                    type: 'success',
                });
            },
            checkLevel(dataDetail) {
                let numberLevel = '';
                switch (dataDetail.childgame) {
                    case 'chanle_lonnho':
                        numberLevel = '( Chẵn lẻ )';
                        break;
                    case 'basic':
                        if (dataDetail.level !== undefined) {
                            numberLevel = `( bậc ${dataDetail.level})`;
                        } else {
                            numberLevel = '';
                        }
                        break;
                    default:
                        break;
                }

                return numberLevel;
            },
            async deleteTicket(id) {
                this.$confirm('Bạn sẽ hủy vé này', 'Cảnh báo', {
                    confirmButtonText: 'Xác nhận',
                    cancelButtonText: 'Bỏ qua',
                    type: 'warning',
                }).then(async () => {
                    await this.$store.dispatch('admin/orderLucky/cancelTicket', id);
                    this.$router.push('/admin/ticket-loto');
                    this.$message({
                        type: 'success',
                        message: 'Hủy thành công',
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Đã bỏ hủy vé',
                    });
                });
            },
        },
    };
</script>

<style>
.order-detail {
    border: 1px solid rgb(194, 194, 194);
    border-radius: 4px;
    padding-left: 16px;
}
.content-center button {
    padding: 0;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
