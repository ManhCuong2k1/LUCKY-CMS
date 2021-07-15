<template>
    <div>
        <div>
            <PageHeader :title="'Đặt vé'" />
            <div>
                <TableOrder :data-order="changeData" />
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import TableOrder from '~/components/admin/order-lucky/Table.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';

    export default {
        layout: 'admin',
        components: {
            TableOrder,
            PageHeader,
        },
        async asyncData({ store }) {
            await store.dispatch('admin/orderLucky/fetch');
        },
        computed: {
            ...mapState('admin/orderLucky', ['order']),
            changeData() {
                const arr = [];
                const arrOrder = [];
                const arrNumber = [];
                this.order.forEach((element) => {
                    arr.push(JSON.parse(element.orders[0].orderDetail));
                });
                arr.forEach((element) => {
                    arrOrder.push(element.data);
                });
                arrOrder.forEach((element, index) => {
                    // eslint-disable-next-line no-unused-vars
                    const str = [];
                    element.forEach((s) => {
                        const string = `${s.number[0]} ${s.number[1]}`;
                        str.push(`${s.price}K - ${string}`);
                    });
                    this.order[index].orders.orderDetail = str;
                    arrNumber.push(str);
                });
                return this.order;
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
