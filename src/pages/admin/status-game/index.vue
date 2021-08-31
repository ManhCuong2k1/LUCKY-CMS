<template>
    <div>
        <PageHeader title="Trạng thái trò chơi" />
        <StatusForm :data-form="status" @submitForm="updateStatusGame" />
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';
    import StatusForm from '~/components/admin/status-game/Form.vue';

    export default {
        layout: 'admin',
        components: {
            PageHeader,
            StatusForm,
        },
        async asyncData({ store }) {
            await store.dispatch('admin/statusGame/show');
        },
        computed: {
            ...mapState('admin/statusGame', ['status']),
        },
        methods: {
            async updateStatusGame(form) {
                try {
                    if (this.status.data.length === 0) {
                        await this.$store.dispatch('admin/statusGame/fetch', { data: form });
                    } else {
                        await this.$store.dispatch('admin/statusGame/update', { data: form });
                    }
                    this.$message({
                        message: 'Thành công',
                        type: 'success',
                    });
                    this.$router.push('/admin/status-game/');
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
