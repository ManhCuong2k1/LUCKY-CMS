<template>
    <div>
        <PageHeader title="Hotline" />
        <HotlineForm :data-form="hotline" @submitForm="updateLimitChange" />
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';
    import HotlineForm from '~/components/admin/setting/FormHotline.vue';

    export default {
        layout: 'admin',
        components: {
            PageHeader,
            HotlineForm,
        },
        async asyncData({ store }) {
            await store.dispatch('admin/setting/getHotline');
        },
        computed: {
            ...mapState('admin/setting', ['hotline']),
        },
        methods: {
            async updateLimitChange(hotline) {
                try {
                    if (this.hotline.data === null) {
                        await this.$store.dispatch('admin/setting/createHotline', { data: hotline });
                    } else {
                        await this.$store.dispatch('admin/setting/updateHotline', { data: hotline });
                    }
                    this.$message({
                        message: 'Thành công',
                        type: 'success',
                    });
                    this.$router.push('/admin/hotline/');
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
