<template>
    <div class="bg-gray-100 min-h-screen py-5 -m-5">
        <div class="flex flex-wrap md:flex-nowrap md:mb-5">
            <ItemNumber
                :icon="['fas', 'ticket-alt']"
                :color="'text-yellow-400'"
                title="Số vé bán hôm nay"
                :value="numberTicketToday"
            />
            <ItemNumber
                :icon="['fas', 'dollar-sign']"
                :color="'text-blue-400'"
                title="Doanh thu hôm nay"
                :value="totalRevenueToday"
            />
            <ItemNumber
                :icon="['fas', 'hand-holding-usd']"
                :color="'text-green-400'"
                title="Nạp tiền hôm nay"
                :value="rechargeToday"
            />
            <ItemNumber
                :icon="['fas', 'money-check-alt']"
                :color="'text-red-400'"
                title="Rút thưởng hôm nay"
                :value="exchangesToday"
            />
        </div>
        <div class="flex flex-wrap md:flex-nowrap">
            <ItemNumber
                :icon="['fas', 'ticket-alt']"
                :color="'text-yellow-400'"
                title="Số vé bán tuần này"
                :value="numberTicketWeek"
            />
            <ItemNumber
                :icon="['fas', 'dollar-sign']"
                :color="'text-blue-400'"
                title="Doanh thu tuần này"
                :value="totalRevenueWeek"
            />
            <ItemNumber
                :icon="['fas', 'hand-holding-usd']"
                :color="'text-green-400'"
                title="Nạp tiền tuần này"
                :value="rechargeWeek"
            />
            <ItemNumber
                :icon="['fas', 'money-check-alt']"
                :color="'text-red-400'"
                title="Rút thưởng tuần này"
                :value="exchangesWeek"
            />
        </div>
        <div class="flex flex-wrap md:flex-nowrap mt-5 mx-5 md:mx-5 md:p-5 md:mt-10 bg-white shadow-lg">
            <div class="w-full">
                <Chart :labels="labels" :amount-order-by-day="amountTicketByDay" :sum-order-by-day="sumOrderByDay" />
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import ItemNumber from '~/components/admin/dashboard/ItemNumber.vue';
    import Chart from '~/components/admin/dashboard/ChartJs.vue';

    export default {
        layout: 'admin',
        components: {
            ItemNumber,
            Chart,
        },
        async asyncData({ $axios }) {
            const data = await $axios.$get('/admin/dashboard');
            return {
                numberTicketToday: parseInt(data.numberTicketToday[0].total_ticket, 10) || 0,
                totalRevenueToday: parseInt(data.revenueToday[0].total_revenue, 10) || 0,
                rechargeToday: parseInt(data.rechargeToday[0].total_recharge, 10) || 0,
                exchangesToday: parseInt(data.exchangesToday[0].total_exchanges, 10) || 0,
                numberTicketWeek: parseInt(data.numberTicketWeek[0].total_ticket_week, 10) || 0,
                totalRevenueWeek: parseInt(data.revenueWeek[0].total_revenue_week, 10) || 0,
                rechargeWeek: parseInt(data.rechargeWeek[0].total_recharge_week, 10) || 0,
                exchangesWeek: parseInt(data.exchangesWeek[0].total_exchanges_week, 10) || 0,
                labels: data.amountTicketByDay.map((i) => moment(i.formatCreatedAt, 'YYYYMMDD').format('DD-MM')),
                amountTicketByDay: data.amountTicketByDay.map((i) => i.count),
                sumOrderByDay: data.sumOrderByDay.map((i) => i.total_price),
            };
        },

        computed: {
            userLoged() {
                return this.$store.state.auth.user;
            },
        },

    };
</script>
