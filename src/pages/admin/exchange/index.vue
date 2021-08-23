<template>
    <div>
        <div>
            <PageHeader :title="'Đổi thưởng'" />
            <div class="2xl:w-1/2 xl:w-4/6 lg:w-5/6 w-full">
                <div class="flex">
                    <div class="mr-5">
                        <DateRange
                            :selected-range="[$route.query.fromDate, $route.query.toDate]"
                            @changeDateRange="updateDaterange"
                        />
                    </div>
                    <div class="flex-1">
                        <Select
                            :options="optionExchange"
                            :placeholder="'Hành động'"
                            :selected="$route.query.status"
                            @changeValue="updateSelect"
                        />
                    </div>
                </div>
                <div class="mt-5 flex">
                    <el-input
                        v-model="tableFilter.searchKey"
                        placeholder="Tìm theo tên khách hàng"
                        class="input-with-select mr-5"
                        clearable
                        @clear="updateSearchKey"
                    />
                    <el-input
                        v-model="tableFilter.searchCardId"
                        placeholder="Tìm kiếm theo số CMT/CMND"
                        class="input-with-select mr-5"
                        clearable
                        @clear="updateSearchKey"
                    />
                    <el-button type="primary" icon="el-icon-search" @click="updateSearchKey">
                        Search
                    </el-button>
                </div>
            </div>

            <div>
                <TableExchange :data-exchange="exchanges" @updateData="confirm" />
            </div>
        </div>
        <div>
            <Pagination
                :page-size="pagination.pageSize"
                :total="pagination.total"
                :current-page="pagination.page"
                @changePage="updatePage"
            />
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { format } from 'date-fns';
    import { cleanObject } from '~/utils/object';
    import { OPTION_STATUS } from '~/constants/statusExchange';
    import DateRange from '~/components/admin/shared/form/Datepicker.vue';
    import Select from '~/components/admin/shared/form/Select.vue';
    import TableExchange from '~/components/admin/exchange/Table.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';
    import Pagination from '~/components/Pagination.vue';

    export default {
        layout: 'admin',
        components: {
            TableExchange,
            PageHeader,
            Pagination,
            Select,
            DateRange,
        },
        async asyncData({ query, store }) {
            const initFilter = {
                searchKey: null,
                searchCardId: null,
                page: query.page || 1,
            };
            const filter = { ...initFilter, ...query };
            const clean = cleanObject(filter);
            await store.dispatch('admin/exchange/fetch', clean);
            return {
                tableFilter: filter,
            };
        },
        data() {
            return {
                optionExchange: OPTION_STATUS,
            };
        },
        computed: {
            ...mapState('admin/exchange', ['exchanges', 'pagination']),

        },
        methods: {
            async fetchData(newFilter) {
                const filter = cleanObject({ ...this.$route.query, ...this.tableFilter, ...newFilter });
                await this.$store.dispatch('admin/exchange/fetch', filter);
                this.$router.push({ query: filter });
            },
            async updatePage(page) {
                this.fetchData({ page });
            },
            async confirm(id) {
                try {
                    await this.$store.dispatch('admin/exchange/update', id);
                    await this.$store.dispatch('admin/exchange/fetch', this.tableFilter);
                    await this.$store.dispatch('admin/exchange/totalExchangeToday');
                    this.$message({
                        message: 'Xác nhận thành công',
                        type: 'success',
                    });
                } catch (error) {
                    this.$message({
                        message: 'Xác nhận không thành công',
                        type: 'error',
                    });
                }
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
            updateSelect(status) {
                const page = null;
                this.fetchData({ status, page });
            },
            updateSearchKey() {
                const page = null;
                this.fetchData({ page });
            },

        },
    };
</script>
