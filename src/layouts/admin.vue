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
        data() {
            return {
                collapsed: false,
            };
        },
    };
</script>

<style>
.popup-user {
    position: absolute;
    background: white;
    width: 44rem;
    padding-top: 4rem;
    z-index: 50;
    box-shadow: 0px 0px 13px 0px #ccc;
    border-radius: 8px;
    top: 10rem;
    left: 30%;
    height: 33rem;

}
</style>
