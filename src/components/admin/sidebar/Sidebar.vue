<template>
    <el-menu
        ref="menu"
        :collapse="collapsed"
        :default-active="active"
        :default-openeds="defaultOpeneds"
        :class="{ collapsed }"
        class="admin-sidebar h-full flex-col"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse-transition="false"
    >
        <nuxt-link to="/admin/user">
            <div class="py-4" :class="collapsed ? 'text-center' : 'flex justify-center'">
                <img v-if="!collapsed" src="/images/logo.png" class="w-16">
                <img v-else src="/images/logo.png" class="w-10 mx-auto">
            </div>
        </nuxt-link>

        <el-scrollbar wrap-class="overflow-hidden">
            <SidebarItem icon="el-icon-s-home" link="/admin/dashboard">
                Tổng quan
            </SidebarItem>

            <SidebarItem icon="el-icon-collection" link="/admin/order-lucky">
                Đặt vé
            </SidebarItem>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-time" />
                    <span :style="!collapsed ? 'padding-right: 20px' : 'padding-right: 0px'">Lịch sử giao dịch</span>
                </template>
            </el-submenu>
            <SidebarItem icon="el-icon-user" link="/">
                Người dùng
            </SidebarItem>
            <SidebarItem icon="el-icon-files" link="/">
                Quảng cáo
            </SidebarItem>
            <el-submenu index="6">
                <template slot="title">
                    <i class="el-icon-setting" />
                    <span>Cài đặt</span>
                </template>
            </el-submenu>
        </el-scrollbar>
        <ElMenuItem @click="toggleSidebar">
            <i :class="`el-icon-d-arrow-${collapsed ? 'right' : 'left'}`" />
            <template #title>
                <span>Thu gọn menu</span>
            </template>
        </ElMenuItem>
    </el-menu>
</template>

<script>
    import _findKey from 'lodash/findKey';
    import SidebarItem from './Item.vue';

    export default {
        components: {
            SidebarItem,
        },

        data() {
            return {
                active: this.$route.path,
                collapsed: false,
                defaultOpeneds: [],
            };
        },

        computed: {
            userLoged() {
                return this.$store.state.auth.user;
            },
        },

        watch: {
            '$route.path': 'setActiveItem',
        },

        mounted() {
            this.setActiveItem();
        },

        methods: {
            toggleSidebar() {
                this.collapsed = !this.collapsed;
            },

            setActiveItem() {
                const activeItem = _findKey(this.$refs.menu.items, (_, key) => this.$route.path.startsWith(key));

                this.active = activeItem;
            },
        },
    };
</script>

<style lang="scss">
    @import '~/assets/scss/_color';
</style>
