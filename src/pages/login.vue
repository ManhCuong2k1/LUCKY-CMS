<template>
    <div class="flex justify-center h-screen bg-gray-100">
        <el-card shadow="always" class="flex align-middle m-auto p-3 md:w-1/4 sm:w-full">
            <div class="font-bold text-center text-xl mb-5">
                Đăng nhập
            </div>
            <div class="mb-5">
                <el-alert
                    v-if="errorLogin"
                    title="Sai thông tin đăng nhập"
                    type="error"
                />
            </div>
            <div class="mb-2">
                <el-input v-model="username" placeholder="Tên đăng nhập" @keyup.enter.native="loginAction" />
            </div>
            <div class="mb-2">
                <el-input
                    v-model="password"
                    placeholder="Mật khẩu"
                    show-password
                    @keyup.enter.native="loginAction"
                />
            </div>
            <div class="mb-5 flex justify-between">
                <nuxt-link to="/forget-password" class="text-blue-600 font-semibold text-sm hover:underline">
                    Quên mật khẩu
                </nuxt-link>
                <nuxt-link to="/register" class="text-blue-600 font-semibold text-sm hover:underline">
                    Tạo tài khoản
                </nuxt-link>
            </div>
            <div class="w-full">
                <el-button class="w-full" type="success" @click="loginAction">
                    Đăng nhập
                </el-button>
            </div>
            <!-- <div class="flex align-items-center justify-content-between my-4">
                <hr class="flex-1 m-auto">
                <span class="mx-3">
                    Hoặc sử dụng
                </span>
                <hr class="flex-1 m-auto">
            </div>
            <div class="flex justify-center">
                <el-button><i class="text-blue-600 mr-2 fab fa-facebook-f" />Facebook</el-button>
                <el-button @click="regGoogle">
                    <i class="text-red-600 mr-2 fab fa-google" />Google
                </el-button>
            </div> -->
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
                errorLogin: false,
            };
        },
        methods: {
            async loginAction() {
                try {
                    await this.$store.dispatch('admin/user/show', this.username);
                    const user = this.$store.state.admin.user.user;
                    if (user) {
                        if (user.status === 'pending') {
                            this.$message({
                                message: 'Tài khoản đang chờ xét duyệt',
                                type: 'error',
                            });
                        } else if (user.role === 'user') {
                            this.$message({
                                message: 'Bạn không có quyền đăng nhập vào đây',
                                type: 'error',
                            });
                        } else if (user.status === 'blocked') {
                            this.$message({
                                message: 'Tài khoản này hiện đang bị khóa',
                                type: 'error',
                            });
                        } else {
                            await this.$auth.loginWith('local', {
                                data: {
                                    username: this.username,
                                    password: this.password,
                                },
                            });
                            if (user.role === 'employe') {
                                this.$router.push('/admin/ticket-vietlott');
                            } else {
                                this.$router.push('/admin/dashboard');
                            }
                            this.$message({
                                message: 'Đăng nhập thành công!',
                                type: 'success',
                            });
                        }
                    }
                } catch (e) {
                    this.errorLogin = true;
                    setTimeout(() => {
                        this.errorLogin = false;
                    }, 5000);
                }
            },
            // regGoogle() {
            //     window.location.href = `${process.env.APP_URL}/api/auth/login/google`;
            // },
        },
    };
</script>

<style lang="sass">
    .el-card__body
        width: 100%
</style>
