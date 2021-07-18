<template>
    <div>
        <PageHeader />
        <LuckyForm :lucky-data="lucky" :order-details="configString" />
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';
    import LuckyForm from '~/components/admin/order-lucky/Form.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';

    export default {
        layout: 'admin',
        components: {
            LuckyForm,
            PageHeader,
        },
        async asyncData({ store, params }) {
            await store.dispatch('admin/orderLucky/getDetail', params.id);
            const lucky = cloneDeep(store.state.admin.orderLucky.order);
            return {
                lucky,
            };
        },
        computed: {
            configString() {
                const orderDetail = JSON.parse(this.lucky.orders[0].orderDetail);
                const data = orderDetail.data;
                // eslint-disable-next-line no-unused-vars
                const str = [];
                if (orderDetail.childgame === 'basic') {
                    data.forEach((e) => {
                        const string = `${e.number[0]} ${e.number[1]}`;
                        str.push(`${e.price / 1000}K - ${string}`);
                    });
                } else if (orderDetail.childgame === 'chanle') {
                    data.forEach((e) => {
                        const string = `${e.price / 1000}K - ${e.select}`;
                        str.push(string);
                    });
                }
                return str;
            },
        },

        // methods: {
        //     async updateProduct(form) {
        //         try {
        //             await this.$store.dispatch('admin/product/update', { id: this.product.id, data: form });
        //             this.$router.push('/admin/product/');
        //         } catch ($e) {
        //             this.$message({
        //                 message: 'Thay đổi lỗi',
        //                 type: 'error',
        //             });
        //         }
        //     },
        // },
    };
</script>
