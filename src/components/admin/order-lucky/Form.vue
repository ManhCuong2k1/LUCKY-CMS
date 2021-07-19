<template>
    <div>
        <el-form
            ref="luckyForm"
            :model="luckyForm"
            label-width="120px"
            class="w-full"
        >
            <el-form-item label="Mã vé" prop="id">
                <el-col :span="12" class="order-detail">
                    <p>{{ luckyForm.id }}</p>
                </el-col>
            </el-form-item>
            <el-form-item label="Khách hàng" prop="">
                <el-col :span="12" class="order-detail">
                    <p>{{ luckyForm.user.phone }}</p>
                </el-col>
            </el-form-item>
            <el-form-item label="Loại vé" prop="">
                <el-col :span="6" class="order-detail">
                    <p>{{ type(luckyForm.type) }}</p>
                </el-col>
            </el-form-item>
            <el-form-item label="Nội dung" prop="LuckyCategoryId">
                <el-col :span="12" class="order-detail pb-4">
                    <span v-for="orderDetail in orderDetails" :key="orderDetail" class="block h-6">
                        {{ orderDetail }}
                    </span>
                </el-col>
            </el-form-item>
            <el-form-item label="Số kỳ" prop="LuckyCategoryId">
                <el-col :span="12" class="order-detail">
                    <p>{{ luckyForm.orders.length }}</p>
                </el-col>
            </el-form-item>
            <el-form-item label="Trạng thái" prop="status">
                <el-col :span="12" class="order-detail">
                    <p>{{ status( luckyForm.orderStatus) }}</p>
                </el-col>
            </el-form-item>

            <el-form-item label="Lấy ảnh vé" class="content-center">
                <el-button class="dropzone el-col-3" @click="openLuckyGallery">
                    <div>
<<<<<<< HEAD
                        <div><img class="w-32" :src="toImage(luckyForm.listsimages)"></div>
=======
                        <div><img class="w-32" :src="toImage(luckyForm.imageslist)"></div>
>>>>>>> 3b2faa1f650839f37c4bb93635f3d7b7d0f22985
                        <span class="pd-0"><i class="el-icon-camera-solid text-6xl text-gray-200" /></span>
                    </div>
                </el-button>
                <!-- <el-button class="dropzone el-col-3" @click="openLuckyGallery1">
                    <div>
                        <div><img class="w-32" :src="toImage(luckyForm.listsimages)"></div>
                        <span class="pd-0"><i class="el-icon-camera-solid text-6xl text-gray-200" /></span>
                    </div>
                </el-button> -->
            </el-form-item>

            <el-form-item>
                <el-button type="primary">
                    Lưu ảnh
                </el-button>
            </el-form-item>
        </el-form>

        <el-dialog
            title="Chọn ảnh"
            :visible.sync="dialogGallery1"
        >
            <ImageFinder :order-id="luckyForm.id" @confirmPick="confirmPick" />
        </el-dialog>
        <!-- <el-dialog
            title="Chọn ảnh"
            :visible.sync="dialogGallery2"
        >
<<<<<<< HEAD
            <ImageFinder :order-id="luckyForm.id" @confirmPick="confirmPick1" />
        </el-dialog>
=======
            <ImageFinder :order-id="luckyForm.id" @confirmPick="confirmPick" />
        </el-dialog> -->
>>>>>>> 3b2faa1f650839f37c4bb93635f3d7b7d0f22985
    </div>
</template>

<script>
    // import { mapState } from 'vuex';
    import cloneDeep from 'lodash/cloneDeep';
    import ImageFinder from '~/components/ImageFinder.vue';
    import { image as toImage } from '~/utils/url';
    import { checkType, checkStatus } from '~/utils/configData';

    const modelForm = {
        id: '',
        name: '',
        type: '',
        orderDetail: '',
        periodNumber: '',
        status: '',
        images: [],
    };

    export default {
        components: {
            ImageFinder,
        },

        props: {
            luckyData: {
                type: Object,
                required: false,
            },
            orderDetails: {
                type: Array,
                required: true,
            },
        },
        data() {
            const luckyForm = this.luckyData ? cloneDeep(this.luckyData) : cloneDeep(modelForm);
            return {
                dialogGallery1: false,
                dialogGallery2: false,
                loading: false,
                luckyForm,
            };
        },
        watch: {
            luckyForm() {
                console.log(this.luckyForm);
            },
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
            // deleteImage(id) {
            //     const array = this.productForm.images;
            //     const imageIndex = array.indexOf(id);
            //     this.productForm.images.splice(imageIndex, 1);
            // },
            // ProductconfirmPick(name) {
            //     this.dialogProductGallery = false;
            //     const imagePick = { url: name, name: name.split('/')[1] };
            //     if (this.productForm.images === null) {
            //         this.productForm.images = [];
            //     }
            //     this.productForm.images.push(imagePick);
            // },
            confirmPick(name) {
                this.dialogGallery1 = false;
                this.luckyForm.listsimages = name;
            },
            confirmPick1(name) {
                this.dialogGallery2 = false;
                this.luckyForm.listsimages = name;
            },
            // contentChange(content) {
            //     this.productForm.content = content;
            // },
            // handleSubmit(formName, data) {
            //     this.$refs[formName].validate((valid) => {
            //         if (valid) {
            //             this.$emit('finishForm', cloneDeep(data));
            //         } else {
            //             this.$message.error('Oops, Vui lòng nhập đầy đủ thông tin.');
            //             return false;
            //         }
            //     });
            // },
            // resetForm(formName) {
            //     this.$refs[formName].resetFields();
            // },
        },
    };
</script>

<style>
.order-detail {
    border: 1px solid rgb(194, 194, 194);
    border-radius: 4px;
    padding-left: 16px;
}
</style>
