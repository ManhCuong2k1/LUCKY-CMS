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
            const lucky = cloneDeep(store.state.admin.orderLucky.orderDetail);
            return {
                lucky,
            };
        },
        computed: {
            configString() {
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
                    });
                }
                return str;
            },
        },
    };
</script>
