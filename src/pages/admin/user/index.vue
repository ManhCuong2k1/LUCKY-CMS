<template>
    <div>
        <PageHeader :title="'Thành viên'" />
        <div class="2xl:w-1/2 xl:w-4/6 lg:w-5/6 w-full">
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
            <TableUser :data="users" />
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
    import { USER_POSITION } from '~/constants/user';
    // import DateRange from '~/components/admin/shared/form/Datepicker.vue';
    // import Select from '~/components/admin/shared/form/Select.vue';
    import TableUser from '~/components/admin/user/Table.vue';
    import Pagination from '~/components/Pagination.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';
    import { cleanObject } from '~/utils/object';

    export default {
        layout: 'admin',

        components: {
            PageHeader,
            // DateRange,
            // Select,
            TableUser,
            Pagination,
        },

        watchQuery: true,

        async asyncData({ query, store }) {
            const initFilter = {
                searchKey: null,
                searchCardId: null,
                page: query.page || 1,
            };
            const filter = { ...initFilter, ...query };
            const clean = cleanObject(filter);
            await store.dispatch('admin/user/fetch', clean);
            return {
                tableFilter: filter,
            };
        },

        data() {
            return {
                optionPosition: USER_POSITION,
                dateValue: undefined,
            };
        },
        computed: {
            ...mapState('admin/user', ['users', 'pagination']),
        },
        methods: {
            async fetchData(newFilter) {
                const filter = cleanObject({ ...this.$route.query, ...this.tableFilter, ...newFilter });
                this.$router.push({ query: filter });
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
            updateSelect(position) {
                const page = null;
                this.fetchData({ position, page });
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
