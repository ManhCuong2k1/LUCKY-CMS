<template>
    <div>
        <div>
            <PageHeader :title="'Lịch sử giao dịch'" />
            <div class="w-1/2">
                <div class="mt-5 flex">
                    <el-input
                        placeholder="Tìm theo khách hàng"
                        class="input-with-select mr-5"
                        clearable
                        @clear="updatePage"
                    />
                    <el-button type="primary" icon="el-icon-search">
                        Tìm kiếm
                    </el-button>
                </div>
            </div>

            <div>
                <TableHistory />
            </div>
        </div>
        <!-- <div>
            <Pagination
                :page-size="pagination.pageSize"
                :total="pagination.total"
                :current-page="pagination.page"
                @changePage="updatePage"
            />
        </div> -->
    </div>
</template>

<script>
    import TableHistory from '~/components/admin/history/Table.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';
    // import Pagination from '~/components/Pagination.vue';

    export default {
        layout: 'admin',
        components: {
            TableHistory,
            PageHeader,
            // Pagination,
        },
    };
</script>
