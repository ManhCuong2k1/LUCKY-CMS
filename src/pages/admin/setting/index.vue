<template>
    <div>
        <PageHeader title="Hạn mức" />
        <ExchangeForm :data-form="limit" @submitForm="updateLimitChange" />
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';
    import ExchangeForm from '~/components/admin/setting/Form.vue';

    export default {
        layout: 'admin',
        components: {
            PageHeader,
            ExchangeForm,
        },
        async asyncData({ store }) {
            await store.dispatch('admin/setting/show');
        },
        computed: {
            ...mapState('admin/setting', ['limit']),
        },
        methods: {
            async updateLimitChange(limit) {
                try {
                    if (this.limit.data === null) {
                        await this.$store.dispatch('admin/setting/fetch', { data: limit });
                    } else {
                        await this.$store.dispatch('admin/setting/update', { data: limit });
                    }
                    this.$message({
                        message: 'Thành công',
                        type: 'success',
                    });
                    this.$router.push('/admin/setting/');
                } catch ($e) {
                    this.$message({
                        message: 'Thất bại',
                        type: 'error',
                    });
                }
            },
        },
    };
</script>
