<template>
    <div>
        <PageHeader :title="user.name" />
        <StaffForm :staff-data="user" @submitForm="updateStaff" />
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';
    import StaffForm from '~/components/admin/staff/Form.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';

    export default {
        layout: 'admin',
        components: {
            StaffForm,
            PageHeader,
        },
        async asyncData({ params, store }) {
            await store.dispatch('admin/user/show', params.username);
            const user = cloneDeep(store.state.admin.user.user);
            console.log(user);
            // user.is_active = user.deletedAt === null;
            // user.is_admin = user.is_admin === 1;
            return {
                user,
            };
        },
        methods: {
            async updateStaff(form) {
                try {
                    await this.$store.dispatch('admin/user/update', { id: this.user.id, data: form });
                    this.$router.push('/admin/staff/');
                } catch ($e) {
                    this.$message({
                        message: 'Không có quyền chỉnh sửa.',
                        type: 'error',
                    });
                }
            },
        },
    };
</script>
