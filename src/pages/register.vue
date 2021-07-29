<template>
    <div class="flex justify-center h-screen bg-gray-100">
        <el-card shadow="always" class="flex align-middle m-auto p-3 md:w-1/4 sm:w-full">
            <div class="font-bold text-center text-xl mb-5">
                Đăng ký
            </div>
            <div class="mb-5">
                <el-alert
                    v-if="errorLogin"
                    title="Tên đăng nhập hoặc số điện thoại đã được sử dụng."
                    type="error"
                />
            </div>
            <div class="mb-2">
                <el-input v-model="name" placeholder="Tên hiển thị" />
            </div>
            <div class="mb-2">
                <el-input v-model="email" placeholder="Email" />
            </div>
            <div class="mb-2">
                <el-input v-model="phone" placeholder="Phone" />
            </div>
            <!-- <div class="mb-2">
                <el-input v-model="username" placeholder="Tên đăng nhập" />
            </div> -->
            <div class="mb-2">
                <el-input
                    v-model="password"
                    placeholder="Mật khẩu"
                    show-password
                />
            </div>
            <div class="mb-1">
                <el-input
                    v-model="repassword"
                    placeholder="Nhập lại mật khẩu"
                    show-password
                />
            </div>
            <div class="mb-5 flex justify-between">
                <nuxt-link to="/login" class="text-blue-600 font-semibold text-sm hover:underline">
                    Đăng nhập
                </nuxt-link>
            </div>
            <div class="w-full mt-3">
                <el-button class="w-full" type="success" @click="regAction">
                    Đăng ký
                </el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // username: '',
                name: '',
                phone: '',
                email: '',
                password: '',
                repassword: '',
                errorLogin: false,
            };
        },
        async mounted() {
            try {
                await this.$recaptcha.init();
            // eslint-disable-next-line no-empty
            } catch (e) {}
        },
        beforeDestroy() {
            this.$recaptcha.destroy();
        },
        methods: {
            sendError(mes) {
                this.$message({
                    message: mes,
                    type: 'error',
                });
            },
            async regAction() {
                try {
                    const checkEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
                    const checkPhone = /^[0-9]{10}$/;
                    // eslint-disable-next-line eqeqeq
                    if (this.name == '' || this.password == '' || this.phone == '' || this.repassword == '' || this.email == '') {
                        this.sendError('Điền đầy đủ các trường');
                    } else if (!checkPhone.test(this.phone)) {
                        this.sendError('Số điện thoại không đủ ký tự');
                    } else if (!checkEmail.test(this.email)) {
                        this.sendError('Nhập đúng định dạng email Example@gmail.com!');
                    } else {
                        const token = await this.$recaptcha.execute('register');
                        await this.$axios.post('/auth/register', {
                            // username: this.username,
                            password: this.password,
                            name: this.name,
                            email: this.email,
                            phone: this.phone,
                            role: 'admin',
                            token,
                        });
                        this.$message({
                            message: 'Đăng ký thành công!',
                            type: 'success',
                        });
                        this.$router.push('/login');
                    }
                } catch (e) {
                    this.errorLogin = true;
                    setTimeout(() => {
                        this.errorLogin = false;
                    }, 5000);
                }
            },

            regGoogle() {
                window.location.href = `${process.env.APP_URL}/api/auth/login/google`;
            },
        },
    };
</script>

<style lang="sass">
    .el-card__body
        width: 100%
</style>
