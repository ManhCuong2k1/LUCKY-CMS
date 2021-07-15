<template>
    <div>
        <PageHeader :title="'Thêm điểm bán'" />
        <PointOfSaleForm @submitForm="create" />
    </div>
</template>

<script>
    import PointOfSaleForm from '~/components/admin/point-of-sale/Form.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';

    export default {
        layout: 'admin',
        components: {
            PointOfSaleForm,
            PageHeader,
        },
        methods: {
            async create(form) {
                try {
                    this.loading = true;
                    await this.$axios.post('/admin/point-of-sale', form);
                    this.$router.push('/admin/point-of-sale');
                } catch (error) {
                    this.$message.error(this.$constants.ERROR_MESSAGE.Default);
                    throw error;
                } finally {
                    this.loading = false;
                }
            },
        },
    };
</script>
