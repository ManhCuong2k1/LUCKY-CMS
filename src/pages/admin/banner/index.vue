<template>
    <div>
        <div>
            <PageHeader :title="'Banner quảng cáo'" />
            <div class="w-full">
                <div class="py-3">
                    <el-button @click="add">
                        Thêm
                    </el-button>
                    <el-button type="success" @click="save">
                        Lưu
                    </el-button>
                </div>
                <div class="italic text-gray-600 text-sm">
                    <span class="font-semibold text-red-600">Note: </span> Kích thước ảnh phù hợp là 375*176.
                </div>
                <table class="w-full">
                    <thead>
                        <tr class="border-b border-gray-200 text-gray-600">
                            <th class="p-3" scope="col">
                                Ảnh
                            </th>
                            <th class="p-3" scope="col">
                                Hành động
                            </th>
                        </tr>
                    </thead>
                    <draggable
                        v-model="tableData"
                        tag="tbody"
                        @start="drag=true"
                        @end="drag=false"
                    >
                        <tr v-for="(item, idx) in tableData" :key="item.index" class="border-b border-gray-200">
                            <td scope="row" class="p-3">
                                <el-button @click="openGallery(idx)">
                                    <span v-if="!item.image">Thư viện</span>
                                    <div v-else>
                                        <img class="w-32" :src="toImage(item.image, 'full')">
                                    </div>
                                </el-button>
                            </td>
                            <td scope="row" class="p-2" width="200">
                                <div class="flex justify-center">
                                    <el-button
                                        icon="el-icon-rank"
                                    />
                                    <el-button
                                        type="danger"
                                        icon="el-icon-delete"
                                        @click="removeRow(idx)"
                                    />
                                </div>
                            </td>
                        </tr>
                    </draggable>
                </table>
            </div>
        </div>
        <el-dialog
            title="Media"
            :visible.sync="dialogVisible"
            width="50%"
        >
            <ImageFinder @confirmPick="confirmPick" />
        </el-dialog>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    import { cloneDeep } from 'lodash';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';
    import ImageFinder from '~/components/ImageFinder.vue';
    import { image as toImage } from '~/utils/url';

    const tableModel = [{
        index: 0,
        image: '',
        type: 'home',
    }];

    export default {
        layout: 'admin',
        components: {
            PageHeader,
            draggable,
            ImageFinder,
        },
        async fetch({ store }) {
            await store.dispatch('admin/banner/fetch');
        },
        data() {
            const banners = this.$store.state.admin.banner.banners;
            return {
                editRow: -1,
                dialogVisible: false,
                tableData: banners.length > 0 ? cloneDeep(banners) : tableModel,
            };
        },
        watch: {
        },

        methods: {
            toImage,
            openGallery(index) {
                this.dialogVisible = true;
                this.editRow = index;
            },
            confirmPick(name) {
                this.dialogVisible = false;
                this.tableData[this.editRow].image = name.imageUrl;
                this.editRow = -1;
            },
            removeRow(index) {
                this.tableData.splice(index, 1);
            },
            add() {
                const index = this.tableData.length;
                this.tableData.push({
                    index,
                    image: '',
                    type: 'home',
                });
            },
            async save() {
                await this.$store.dispatch('admin/banner/create', { banners: this.tableData });
                await this.$store.dispatch('admin/banner/fetch');
            },
        },
    };
</script>

<style lang="sass">
    .el-range-separator
        box-sizing: content-box
    .el-button:focus
        outline: none !important
</style>
