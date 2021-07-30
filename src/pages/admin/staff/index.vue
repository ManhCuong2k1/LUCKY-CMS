<template>
    <div>
        <PageHeader :title="'Thành viên'" />
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
                        :options="optionStatus"
                        :placeholder="'Trạng thái'"
                        :selected="$route.query.status"
                        @changeValue="updateSelect"
                    />
                </div>
            </div>
            <div class="mt-5 flex">
                <el-input
                    v-model="tableFilter.searchKey"
                    placeholder="Tìm kiếm theo tên nhân viên"
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
            <TableStaff :data="users" />
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
    import { format } from 'date-fns';
    import { mapState } from 'vuex';
    import { OPTION_STATUS_STAFF } from '~/constants/statusStaff';
    import DateRange from '~/components/admin/shared/form/Datepicker.vue';
    import Select from '~/components/admin/shared/form/Select.vue';
    import TableStaff from '~/components/admin/staff/Table.vue';
    import Pagination from '~/components/Pagination.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';
    import { cleanObject } from '~/utils/object';

    export default {
        layout: 'admin',

        components: {
            PageHeader,
            DateRange,
            Select,
            TableStaff,
            Pagination,
        },

        watchQuery: true,

        async asyncData({ query, store }) {
            const initFilter = {
                fromDate: null,
                toDate: null,
                status: null,
                searchKey: null,
                page: query.page || 1,
            };
            const filter = { ...initFilter, ...query };
            const clean = cleanObject(filter);
            await store.dispatch('admin/user/fetchStaff', clean);
            return {
                tableFilter: filter,
            };
        },

        data() {
            return {
                optionStatus: OPTION_STATUS_STAFF,
                dateValue: undefined,
            };
        },
        computed: {
            ...mapState('admin/user', ['users', 'pagination']),
        },
        methods: {
            async fetchData(newFilter) {
                const filter = cleanObject({ ...this.$route.query, ...this.tableFilter, ...newFilter });
                // await this.$store.dispatch('admin/user/fetchStaff', filter);
                this.$router.push({ query: filter });
                console.log(this.users);
            },
            updatePage(page) {
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

<style lang="sass">
    .el-range-separator
        box-sizing: content-box
    .el-button:focus
        outline: none !important
</style>
