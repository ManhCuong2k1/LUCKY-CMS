<template>
    <div>
        <div>
            <PageHeader :title="'Lịch sử giao dịch'" />
            <div class="w-1/2">
                <div class="flex">
                    <div class="mr-5">
                        <DateRange
                            :selected-range="[$route.query.fromDate, $route.query.toDate]"
                            @changeDateRange="updateDaterange"
                        />
                    </div>
                    <!-- <div class="flex-1">
                        <el-date-picker
                            v-model="limitForm"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="Chọn ngày"
                            style="width: 50%;"
                        />
                    </div> -->
                </div>
                <div class="mt-5 flex">
                    <el-input
                        v-model="tableFilter.searchKey"
                        placeholder="Tìm kiếm theo ngày hiệu lực"
                        class="input-with-select mr-5"
                        clearable
                        @clear="updateSearchKey"
                    />
                    <el-button type="primary" icon="el-icon-search" @click="updateSearchKey">
                        Search
                    </el-button>

                    <el-button type="success" icon="el-icon-upload" @click="uploadFile">
                        Upload File
                    </el-button>
                </div>
            </div>

            <TableFile :data-file="files" />
        </div>
        <div>
            <Pagination
                :page-size="pagination.pageSize"
                :total="pagination.total"
                :current-page="pagination.page"
                @changePage="updatePage"
            />
        </div>
        <el-dialog
            title="Upload file"
            :visible.sync="dialogVisibleInstant"
            width="40%"
        >
            <FormUpload @closeForm="close" />
        </el-dialog>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { format } from 'date-fns';
    import { cleanObject } from '~/utils/object';
    import DateRange from '~/components/admin/shared/form/Datepicker.vue';
    import FormUpload from '~/components/admin/number-construction/FormUpload.vue';
    import TableFile from '~/components/admin/number-construction/Table.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';
    import Pagination from '~/components/Pagination.vue';

    export default {
        layout: 'admin',
        components: {
            TableFile,
            PageHeader,
            Pagination,
            FormUpload,
            DateRange,
        },
        async asyncData({ query, store }) {
            const initFilter = {
                searchKey: null,
                page: query.page || 1,
            };
            const filter = { ...initFilter, ...query };
            const clean = cleanObject(filter);
            await store.dispatch('admin/excel/fetch', clean);
            return {
                tableFilter: filter,
            };
        },
        data() {
            return {
                dialogVisibleInstant: false,
            };
        },
        computed: {
            ...mapState('admin/excel', ['files', 'pagination']),
        },
        methods: {
            async fetchData(newFilter) {
                const filter = cleanObject({ ...this.$route.query, ...this.tableFilter, ...newFilter });
                await this.$store.dispatch('admin/excel/fetch', filter);
                this.$router.push({ query: filter });
            },
            async updatePage(page) {
                this.fetchData({ page });
            },
            updateDaterange(value) {
                let fromDate = null;
                let toDate = null;
                const page = null;

                if (value !== null) {
                    fromDate = format(new Date(value[0]), 'yyyy-MM-dd');
                    toDate = format(new Date(value[1]), 'yyyy-MM-dd');
                }
                this.fetchData({ fromDate, toDate, page });
            },
            updateSearchKey() {
                const page = null;
                this.fetchData({ page });
            },
            uploadFile() {
                this.dialogVisibleInstant = true;
            },
            async close() {
                this.dialogVisibleInstant = false;
            },
        },
    };
</script>
