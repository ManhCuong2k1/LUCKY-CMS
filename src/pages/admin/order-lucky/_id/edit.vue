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
    import { checkName } from '~/utils/configData';

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
<<<<<<< HEAD
                const luckyDetail = JSON.parse(this.lucky.orders[0].orderDetail);
                const data = luckyDetail.data;
                // eslint-disable-next-line no-unused-vars
                const str = [];
                if (luckyDetail.childgame === 'basic') {
                    data.forEach((element) => {
                        let string = '';
                        element.number.forEach((e) => {
                            string += `${e} `;
                        });
                        str.push(`${element.price / 1000}K - ${string}`);
                    });
                } else if (luckyDetail.childgame === 'chanle_lonnho') {
                    data.forEach((element) => {
                        const string = checkName(element.select);
                        str.push(`${element.price / 1000}K - ${string}`);
=======
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
>>>>>>> 3b2faa1f650839f37c4bb93635f3d7b7d0f22985
                    });
                }
                return str;
            },
        },
    };
</script>
