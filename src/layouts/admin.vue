<template>
    <el-container class="admin h-screen">
        <el-aside class="h-full overflow-y-hidden" width="auto">
            <Sidebar :collapsed="collapsed" />
        </el-aside>

        <el-container direction="vertical" class="w-full h-full">
            <el-header class="admin__navbar flex items-center justify-end border-b">
                <UserMenu class="ml-10" />
            </el-header>

            <el-main class="admin__content w-full overflow-x-hidden">
                <nuxt />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    // import { mapState } from 'vuex';
    import Sidebar from '~/components/admin/sidebar/Sidebar.vue';
    import UserMenu from '~/components/layout/UserMenu.vue';

    export default {
        name: 'AdminLayout',

        middleware: ['auth'],

        components: {
            Sidebar,
            UserMenu,
        },
        data: () => ({
            collapsed: false,
        }),
    };
</script>
