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
                    <div class="flex-1">
                        <Select
                            :options="optionHistory"
                            :placeholder="'Hành động'"
                            :selected="$route.query.actionSlug"
                            @changeValue="updateSelect"
                        />
                    </div>
                </div>
                <div class="mt-5 flex">
                    <el-input
                        v-model="tableFilter.searchKey"
                        placeholder="Search"
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
                <TableHistory :data-history="history" />
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
    import { HISTORY_ACTION } from '~/constants/history';
    import DateRange from '~/components/admin/shared/form/Datepicker.vue';
    import Select from '~/components/admin/shared/form/Select.vue';
    import TableHistory from '~/components/admin/history/Table.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';
    import Pagination from '~/components/Pagination.vue';

    export default {
        layout: 'admin',
        components: {
            TableHistory,
            PageHeader,
            Pagination,
            Select,
            DateRange,
        },
        async asyncData({ query, store }) {
            const initFilter = {
                fromDate: null,
                toDate: null,
                actionSlug: null,
                searchKey: null,
                page: query.page || 1,
            };
            const filter = { ...initFilter, ...query };
            const clean = cleanObject(filter);
            await store.dispatch('admin/history/fetch', clean);
            return {
                tableFilter: filter,
            };
        },
        data() {
            return {
                optionHistory: HISTORY_ACTION,
            };
        },
        computed: {
            ...mapState('admin/history', ['history', 'pagination']),
        },
        methods: {
            async fetchData(newFilter) {
                const filter = cleanObject({ ...this.$route.query, ...this.tableFilter, ...newFilter });
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
            updateSelect(actionSlug) {
                const page = null;
                this.fetchData({ actionSlug, page });
            },
            updateSearchKey() {
                const page = null;
                this.fetchData({ page });
            },

        },
    };
</script>
