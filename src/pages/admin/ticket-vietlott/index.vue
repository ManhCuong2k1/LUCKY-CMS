<template>
    <div>
        <div>
            <PageHeader :title="'Đặt vé'" />
            <div class="2xl:w-1/2 xl:w-4/6 lg:w-5/6 w-full">
                <div class="flex">
                    <div class="mr-5">
                        <DateRange
                            :selected-range="[$route.query.fromDate, $route.query.toDate]"
                            @changeDateRange="updateDaterange"
                        />
                    </div>
                    <div class="flex-1 mr-5">
                        <Select
                            :options="optionGame"
                            :placeholder="'Loại vé'"
                            :selected="$route.query.type"
                            @changeValue="updateSelectType"
                        />
                    </div>
                    <div class="flex-1">
                        <Select
                            :options="optionStatus"
                            :placeholder="'Trạng thái'"
                            :selected="$route.query.orderStatus"
                            @changeValue="updateSelectStatus"
                        />
                    </div>
                </div>
                <div class="mt-5 flex">
                    <el-input
                        v-model="tableFilter.searchKey"
                        placeholder="Tìm theo khách hàng"
                        class="input-with-select mr-5"
                        clearable
                        @clear="updatePage"
                    />
                    <el-button type="primary" icon="el-icon-search" @click="updateSearchKeyTicket">
                        Tìm kiếm
                    </el-button>
                </div>
            </div>

            <div>
                <TableOrder :data-order="order" />
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
    import { OPTION_GAME } from '~/constants/game';
    import { OPTION_STATUS } from '~/constants/status';
    import DateRange from '~/components/admin/shared/form/Datepicker.vue';
    import Select from '~/components/admin/shared/form/Select.vue';
    import TableOrder from '~/components/admin/ticket-vietlott/Table.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';
    import Pagination from '~/components/Pagination.vue';

    export default {
        layout: 'admin',
        components: {
            TableOrder,
            PageHeader,
            Pagination,
            DateRange,
            Select,
        },
        async asyncData({ query, store }) {
            const initFilter = {
                searchKey: null,
                page: query.page || 1,
            };
            const filter = { ...initFilter, ...query };
            const clean = cleanObject(filter);
            await store.dispatch('admin/orderLucky/fetch', clean);
            return {
                tableFilter: filter,
            };
        },
        data() {
            return {
                optionGame: OPTION_GAME,
                optionStatus: OPTION_STATUS,
            };
        },
        computed: {
            ...mapState('admin/orderLucky', ['order', 'pagination']),
        },
        methods: {
            async fetchData(newFilter) {
                const filter = cleanObject({ ...this.$route.query, ...this.tableFilter, ...newFilter });
                await this.$store.dispatch('admin/orderLucky/fetch', filter);
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
            updateSelectType(type) {
                const page = null;
                this.fetchData({ type, page });
            },
            updateSelectStatus(orderStatus) {
                const page = null;
                this.fetchData({ orderStatus, page });
            },
            updateSearchKeyTicket() {
                if (this.tableFilter.searchKey) {
                    const page = null;
                    this.fetchData({ page });
                }
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
