<template>
    <div>
        <div>
            <PageHeader :title="'Đặt vé'" />
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
    import { cleanObject } from '~/utils/object';
    import TableOrder from '~/components/admin/order-lucky/Table.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';
    import Pagination from '~/components/Pagination.vue';

    export default {
        layout: 'admin',
        components: {
            TableOrder,
            PageHeader,
            Pagination,
        },
        async asyncData({ query, store }) {
            const initFilter = {
                page: query.page || 1,
            };
            const filter = { ...initFilter, ...query };
            const clean = cleanObject(filter);
            await store.dispatch('admin/orderLucky/fetch', clean);
            return {
                tableFilter: filter,
            };
        },
        computed: {
            ...mapState('admin/orderLucky', ['order', 'pagination']),
        },
        methods: {
            async fetchData(newFilter) {
                const filter = cleanObject({ ...this.$route.query, ...this.tableFilter, ...newFilter });
                this.$router.push({ query: filter });
            },
            updatePage(page) {
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
