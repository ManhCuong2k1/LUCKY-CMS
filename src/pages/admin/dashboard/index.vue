<template>
    <div class="bg-gray-100 min-h-screen py-5 -m-5">
        <div class="flex flex-wrap md:flex-nowrap md:mb-5">
            <ItemNumber
                :icon="['fas', 'dollar-sign']"
                :color="'text-yellow-400'"
                title="Doanh thu"
            />
            <ItemNumber />
            <ItemNumber />
            <ItemNumber />
        </div>
        <div class="flex flex-wrap md:flex-nowrap">
            <ItemNumber />
            <ItemNumber />
            <ItemNumber />
            <ItemNumber />
        </div>
        <div class="flex flex-wrap md:flex-nowrap mt-5 mx-5 md:mx-5 md:p-5 md:mt-10 bg-white shadow-lg">
            <div class="w-full">
                <Chart />
            </div>
        </div>
    </div>
</template>

<script>
    import ItemNumber from '~/components/admin/dashboard/ItemNumber.vue';
    import Chart from '~/components/admin/dashboard/ChartJs.vue';

    export default {
        layout: 'admin',
        components: {
            ItemNumber,
            Chart,
        },
    };
</script>
