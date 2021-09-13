<template>
    <div>
        <PageHeader title="Chỉnh sửa tài khoản" />
        <BankForm :bank-data="bank" @submitForm="updateBank" />
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';
    import BankForm from '~/components/admin/bank-account/Form.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';

    export default {
        layout: 'admin',
        components: {
            BankForm,
            PageHeader,
        },
        async asyncData({ params, store }) {
            await store.dispatch('admin/bankAccount/show', params.bank);
            const bank = cloneDeep(store.state.admin.bankAccount.bank);
            return {
                bank,
            };
        },
        methods: {
            async updateBank(form) {
                try {
                    await this.$store.dispatch('admin/bankAccount/update', { id: this.bank.id, data: form });
                    this.$router.push('/admin/bank-account/');
                } catch ($e) {
                    this.$message({
                        message: 'Sửa thất bại.',
                        type: 'error',
                    });
                }
            },
        },
    };
</script>
