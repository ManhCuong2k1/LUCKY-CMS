<template>
    <div>
        <PageHeader :title="'Tài khoản ngân hàng'" />
        <div>
            <el-button type="primary" @click="createBank">
                Thêm
            </el-button>
        </div>

        <div>
            <TableBank :data-bank="banks" @updateData="confirm" />
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import TableBank from '~/components/admin/bank-account/Table.vue';
    import PageHeader from '~/components/admin/shared/PageHeader.vue';

    export default {
        layout: 'admin',
        components: {
            TableBank,
            PageHeader,
        },
        async asyncData({ store }) {
            await store.dispatch('admin/bankAccount/fetch');
        },
        computed: {
            ...mapState('admin/bankAccount', ['banks']),
        },
        methods: {
            createBank() {
                this.$router.push('/admin/bank-account/create');
            },
        },
    };
</script>
