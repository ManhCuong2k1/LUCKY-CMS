<template>
    <el-menu
        ref="menu"
        :collapse="collapsed"
        :default-active="active"
        :default-openeds="defaultOpeneds"
        :class="{ collapsed }"
        class="admin-sidebar h-full flex-col"
        :text-color="!collapsed ? '#fff' : '#909399'"
        active-text-color="#ffd04b"
        :collapse-transition="false"
    >
        <nuxt-link :to="userLoged.role === 'admin' ? '/admin/dashboard' : '/admin/ticket-vietlott'">
            <div class="py-4" :class="collapsed ? 'text-center' : 'flex justify-center'">
                <img v-if="!collapsed" src="/images/logo.png" class="w-16">
                <img v-else src="/images/logo.png" class="w-10 mx-auto">
            </div>
        </nuxt-link>

        <el-scrollbar wrap-class="overflow-hidden" native="false">
            <SidebarItem v-if="userLoged.role === 'admin'" icon="el-icon-s-home" link="/admin/dashboard">
                Tổng quan
            </SidebarItem>

            <SidebarItem icon="el-icon-collection" link="/admin/ticket-vietlott">
                Vé Vietlott
            </SidebarItem>
            <SidebarItem icon="el-icon-collection" link="/admin/ticket-lottery">
                Vé xổ số
            </SidebarItem>
            <el-submenu index="4" class="submenu">
                <template slot="title">
                    <i class="el-icon-tickets" />
                    <span :class="collapsed ? 'pl-4': ''">Kiến thiết</span>
                </template>
                <SidebarItem v-if="userLoged.role === 'admin'" icon="el-icon-folder-opened" link="/admin/number-construction">
                    File
                </SidebarItem>
                <SidebarItem icon="el-icon-collection" link="/admin/ticket-construction">
                    Vé kiến thiết
                </SidebarItem>
            </el-submenu>
            <SidebarItem v-if="userLoged.role === 'admin'" icon="el-icon-time" link="/admin/history-user">
                Lịch sử giao dịch
            </SidebarItem>
            <SidebarItem v-if="userLoged.role === 'admin'" icon="el-icon-printer" link="/admin/exchange">
                Đổi thưởng <span v-if="newNoti" class="ml-2 bg-red-500 px-2 text-center border border-white rounded-full">{{ newNoti }}</span>
            </SidebarItem>
            <SidebarItem v-if="userLoged.role === 'admin'" icon="el-icon-user" link="/admin/user">
                Khách hàng
            </SidebarItem>
            <SidebarItem v-if="userLoged.role === 'admin'" icon="el-icon-files" link="/admin/banner">
                Banner
            </SidebarItem>
            <el-submenu v-if="userLoged.role === 'admin'" index="6" class="submenu">
                <template slot="title">
                    <i class="el-icon-setting" />
                    <span :class="collapsed ? 'pl-4': ''">Cài đặt</span>
                </template>
                <SidebarItem v-if="userLoged.role === 'admin'" icon="el-icon-user" link="/admin/staff">
                    Nhân viên
                </SidebarItem>
                <SidebarItem v-if="userLoged.role === 'admin'" icon="el-icon-s-flag" link="/admin/status-game">
                    Trạng thái trò chơi
                </SidebarItem>
                <SidebarItem v-if="userLoged.role === 'admin'" icon="fas fa-money-check-alt pr-3" link="/admin/setting">
                    Hạn mức
                </SidebarItem>
                <SidebarItem v-if="userLoged.role === 'admin'" icon="fas fa-phone-alt pr-3 pl-1" link="/admin/hotline">
                    Hotline
                </SidebarItem>
                <SidebarItem v-if="userLoged.role === 'admin'" icon="fas fa-university pr-3 pl-1" link="/admin/bank-account">
                    Tài khoản ngân hàng
                </SidebarItem>
            </el-submenu>
        </el-scrollbar>
        <ElMenuItem class="toggle-sidebar" @click="toggleSidebar">
            <i :class="`el-icon-d-arrow-${collapsed ? 'right' : 'left'}`" />
            <template #title>
                <span>Thu gọn menu</span>
            </template>
        </ElMenuItem>
    </el-menu>
</template>

<script>
    import { mapState } from 'vuex';
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
                newNoti: null,
            };
        },

        computed: {
            ...mapState('admin/exchange', ['total']),
            userLoged() {
                return this.$store.state.auth.user;
            },
        },

        watch: {
            '$route.path': 'setActiveItem',
            total() {
                this.newNoti = this.total[0].total_exchange;
            },
        },

        mounted() {
            this.setActiveItem();
            this.setTotalExchange();
        },

        methods: {
            toggleSidebar() {
                this.collapsed = !this.collapsed;
            },

            setActiveItem() {
                const activeItem = _findKey(this.$refs.menu.items, (_, key) => this.$route.path.startsWith(key));

                this.active = activeItem;
            },

            async setTotalExchange() {
                await this.$store.dispatch('admin/exchange/totalExchangeToday');
                this.newNoti = this.total[0].total_exchange;
            },
        },
    };
</script>

<style lang="scss">
    @import '~/assets/scss/_color';
</style>
