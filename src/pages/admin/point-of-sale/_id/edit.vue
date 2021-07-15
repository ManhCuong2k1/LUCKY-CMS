<template>
    <div>
        <PageHeader :title="pointofsale.name" />
        <PointOfSaleForm :pointofsale-data="pointofsale" @submitForm="updatePointOfSale" @confirmPOS="confirmPOS" />
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';
    import PointOfSaleForm from '~/components/admin/point-of-sale/Form.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';

    export default {
        layout: 'admin',
        components: {
            PointOfSaleForm,
            PageHeader,
        },
        async asyncData({ params, store }) {
            await store.dispatch('admin/pointofsale/show', params.id);
            const pointofsale = cloneDeep(store.state.admin.pointofsale.pointofsaleDetail);
            await store.dispatch('admin/common/searchDistributors', { query: pointofsale.AdminId });
            return {
                pointofsale,
            };
        },

        methods: {
            async updatePointOfSale(form) {
                try {
                    await this.$store.dispatch('admin/pointofsale/update', { id: this.pointofsale.id, data: form });
                    this.$router.push('/admin/point-of-sale/');
                } catch ($e) {
                    this.$message({
                        message: 'Update error.',
                        type: 'error',
                    });
                }
            },
            async confirmPOS(id) {
                try {
                    this.pointofsale.status = 'confirm';
                    await this.$store.dispatch('admin/pointofsale/update', { id, data: this.pointofsale });
                    this.$router.push('/admin/point-of-sale/');
                } catch ($e) {
                    this.$message({
                        message: 'Update error.',
                        type: 'error',
                    });
                }
            },
        },
    };
</script>
