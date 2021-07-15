<template>
    <div class="upload-wrapper">
        <Dropzone
            ref="dropzone"
            class="mb-5"
            @success="onUploadSucceeded"
        />
        <div class="mx-auto w-2/3">
            <div v-if="images.length != 0" class="flex justify-start flex-wrap">
                <div
                    v-for="i in images"
                    :key="i.id"
                    class="md:w-1/6 p-2"
                >
                    <img
                        class="w-full transform transition duration-300 hover:scale-110 hover:shadow-md cursor-pointer"
                        :src="toImage(i.imageUrl, 'thumbnail')"
                    >
                </div>
            </div>
            <div v-else>
                <h3 class="text-center">
                    Không có ảnh trong thư mục của bạn
                </h3>
            </div>
        </div>
    </div>
</template>

// <script>
    import { mapState, mapActions } from 'vuex';
    import Dropzone from './Dropzone.vue';
    import { image as toImage } from '~/utils/url';

    export default {
        components: {
            Dropzone,
        },
        data() {
            this.fetchData();
            return {
                selectedFile: [],
                dialogVisible: false,
                dialogImageUrl: false,
                formError: [],
                pagination: null,
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
            },
            updateUploadFiles() {
                this.selectedFile = this.$refs.upload.uploadFiles;
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
        },
    };
</script>
