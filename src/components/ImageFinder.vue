<template>
    <div class="upload-wrapper w-full">
        <Dropzone
            ref="dropzone"
            class="mb-5"
            :url="`/api/admin/lottery-order/${orderId}/images`"
            @success="onUploadSucceeded"
        />
        <div class="w-full">
            <div v-if="images.lenght != 0" class="">
                <div class="flex justify-start flex-wrap">
                    <div
                        v-for="i in images"
                        :key="i.id"
                        class="md:w-1/6 p-2"
                    >
                        <img
                            class="w-full transform transition duration-300 hover:scale-110 hover:shadow-md cursor-pointer"
                            :src="toImage(i.imageslist, 'thumbnail')"
                            @click="confirmPick(i)"
                        >
                    </div>
                </div>
            </div>
            <div v-else>
                <h3 class="text-center">
                    Không có ảnh trong thư mục của bạn {{ images.array }}
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import Dropzone from './Dropzone.vue';
    import { image as toImage } from '~/utils/url';

    export default {
        components: {
            Dropzone,
        },
        props: {
            orderId: {
                type: Number,
                required: true,
            },
        },
        data() {
            this.fetchData();
            return {
                selectedFile: [],
                dialogVisible: false,
                dialogImageUrl: false,
                formError: [],
                pagination: null,
                namespaced: true,
            };
        },
        computed: {
            ...mapState('user/image', ['images']),
        },

        methods: {
            toImage,
            ...mapActions('user/image', ['fetchData']),
            onUploadSucceeded(file) {
                this.fetchData();
                this.formError = [];
                this.$refs.dropzone.$_dropzone.removeFile(file);
                // this.$router.push('/admin/order-lucky/');
                return file;
            },
            updateUploadFiles() {
                this.selectedFile = this.$refs.upload.uploadFiles;
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            confirmPick(name) {
                this.$emit('confirmPick', name);
            },
        },
    };
</script>
