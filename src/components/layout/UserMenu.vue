<template>
    <div class="flex">
        <div class="name-user">
            <span>{{ userLoged.name }}</span>
        </div>
        <el-dropdown trigger="click">
            <img class="user-icon" src="/images/avatar-default.png">
            <el-dropdown-menu slot="dropdown" class="user-menu">
                <el-dropdown-item disabled>
                    <div class="text-md text-center leading-6 p-1 w-full my-2">
                        <div class="font-thin">
                            {{ userLoged.email }}
                        </div>
                    </div>
                </el-dropdown-item>
                <el-dropdown-item class="user-menu-item">
                    <nuxt-link :to="`/admin/u/${userLoged.id}`">
                        <i class="el-icon-user-solid mr-1" /> Cá nhân
                    </nuxt-link>
                </el-dropdown-item>
                <el-dropdown-item class="user-menu-item sign-out">
                    <div @click="signOut()">
                        <i class="mr-1 fas fa-sign-out-alt" /> Đăng xuất
                    </div>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    // import { image as toImage } from '~/utils/url';

    export default {
        computed: {
            isLoggedIn() {
                return this.$store.state.auth.loggedIn;
            },
            userLoged() {
                return this.$store.state.auth.user;
            },
        },
        methods: {
            // toImage,
            async signOut() {
                await this.$auth.logout();
                this.$router.push('/admin');
            },
        },
    };
</script>

<style lang="sass" scoped>
.name-user
    line-height: 32px
    padding-right: 10px
    font-size: 18px
    color: #777
.user-fullname
    color: #5c7293
.user-icon
    border-radius: 100%
    max-height: 40px
    max-width: 40px
.user-icon-big
    border-radius: 100%
    max-height: 60px
    max-width: 60px
.user-menu
    padding: 0px
    .user-menu-item
        font-size: 15px
        padding: 5px 18px
    .user-menu-item.sign-out
            border-top: 1px solid #dcdcdc
</style>
