<template>
    <div>
        <PageHeader />
        <LuckyForm :lucky-data="configString" :data-image="images" />
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';
    import LuckyForm from '~/components/admin/ticket-loto/Form.vue';
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
            await store.dispatch('admin/images/fetch', params.id);
            const images = store.state.admin.images.images;
            const lucky = cloneDeep(store.state.admin.orderLucky.orderDetail);
            return {
                lucky,
                images,
            };
        },
        computed: {
            configString() {
                const luckyDetail = JSON.parse(this.lucky.orders[0].orderDetail);
                const data = luckyDetail.data;
                // eslint-disable-next-line no-unused-vars
                const str = [];
                if (luckyDetail.childgame === 'chanle_lonnho') {
                    data.forEach((element) => {
                        const string = checkName(element.select);
                        str.push(`${element.price / 1000}K - ${string}`);
                    });
                } else {
                    data.forEach((element) => {
                        let string = '';
                        element.number.forEach((e) => {
                            string += `${e} `;
                        });
                        str.push(`${element.price / 1000}K - ${string}`);
                    });
                }
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.lucky.orders[0].orderDetail = JSON.parse(this.lucky.orders[0].orderDetail);
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.lucky.orders[0].orderDetail.data = str;
                return this.lucky;
            },
        },
    };
</script>
