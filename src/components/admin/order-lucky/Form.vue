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
                    <p>{{ type(luckyData.type) }} ({{ luckyData.orders[0].orderDetail.childgame == 'chanle_lonnho' ? 'Chẵn lẻ' : luckyData.orders[0].orderDetail.childgame == 'basic' ? `bậc ${luckyData.orders[0].orderDetail.level}` : '' }})</p>
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
                <el-button :class="imagesList.listsimages1 ? '': 'dropzone'" class="el-col-3 p-0" @click="openLuckyGallery">
                    <div v-if="imagesList.listsimages1">
                        <img class="w-full h-40" :src="toImage(imagesList.listsimages1, 'full')">
                    </div>
                    <span v-else class="pd-0"><i class="el-icon-camera-solid text-6xl text-gray-200" /></span>
                </el-button>
                <el-button :class="imagesList.listsimages2 ? '': 'dropzone'" class="el-col-3" @click="openLuckyGallery1">
                    <div v-if="imagesList.listsimages2">
                        <img class="w-full h-40" :src="toImage(imagesList.listsimages2, 'full')">
                    </div>
                    <span v-else class="pd-0"><i class="el-icon-camera-solid text-6xl text-gray-200" /></span>
                </el-button>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="saveImages(luckyData.listsimages)">
                    Lưu ảnh
                </el-button>
            </el-form-item>
        </el-form>

        <el-dialog
            title="Chọn ảnh"
            :visible.sync="dialogGallery1"
        >
            <ImageFinder :order-id="luckyData.id" @confirmPick="confirmPick" />
        </el-dialog>
        <el-dialog
            title="Chọn ảnh"
            :visible.sync="dialogGallery2"
        >
            <ImageFinder :order-id="luckyData.id" @confirmPick="confirmPick1" />
        </el-dialog>
    </div>
</template>

<script>
    import ImageFinder from '~/components/ImageFinder.vue';
    import { image as toImage } from '~/utils/url';
    import { checkType, checkStatus } from '~/utils/configData';

    export default {
        components: {
            ImageFinder,
        },

        props: {
            luckyData: {
                type: Object,
                required: false,
            },
        },
        data() {
            return {
                dialogGallery1: false,
                dialogGallery2: false,
                loading: false,
                imagesList: {
                    listsimages1: '',
                    listsimages2: '',
                },
                idImages1: '',
                idImages2: '',
            };
        },
        methods: {
            toImage,
            openLuckyGallery() {
                this.dialogGallery1 = true;
            },
            openLuckyGallery1() {
                this.dialogGallery2 = true;
            },
            type(type) {
                return checkType(type);
            },
            status(status) {
                return checkStatus(status);
            },
            confirmPick(name) {
                this.dialogGallery1 = false;
                this.imagesList.listsimages1 = name.imageslist;
                this.idImages1 = name.id;
            },
            confirmPick1(name) {
                this.dialogGallery2 = false;
                this.imagesList.listsimages2 = name.imageslist;
                this.idImages2 = name.id;
            },
            saveImages() {
                this.$store.dispatch('admin/orderLucky/updateImage', { data: { imageId1: this.idImages1, imageId2: this.idImages2 }, id: this.luckyData.id });
                // this.$router.push('/admin/order-lucky');
                this.$message({
                    message: 'Gửi ảnh thành công!',
                    type: 'success',
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
</style>
