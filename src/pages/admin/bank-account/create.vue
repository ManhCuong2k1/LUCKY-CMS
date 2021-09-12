<template>
    <div>
        <div>
            <PageHeader title="Thêm tài khoản " />
        </div>
        <div>
            <el-form
                ref="bankForm"
                :model="bankForm"
                label-width="160px"
                class="w-2/3"
                :rules="rules"
            >
                <el-form-item label="Tên chủ tài khoản" prop="bank_user">
                    <el-col :span="12">
                        <el-input v-model="bankForm.bank_user" placeholder="Tên chủ tài khoản" />
                    </el-col>
                </el-form-item>
                <el-form-item label="Tên ngân hàng" prop="bank_name">
                    <el-col :span="12">
                        <el-select v-model="bankForm.bank_name" placeholder="Chọn ngân hàng">
                            <el-option
                                v-for="item in banks"
                                :key="item.code"
                                :label="item.name"
                                :value="item.code"
                            />
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="Số tài khoản" prop="bank_number">
                    <el-col :span="12">
                        <el-input v-model="bankForm.bank_number" placeholder="Số tài khoản" />
                    </el-col>
                </el-form-item>
                <el-form-item label="Chi nhánh" prop="bank_branch">
                    <el-col :span="12">
                        <el-input v-model="bankForm.bank_branch" placeholder="Chi nhánh" />
                    </el-col>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('bankForm')">
                        Thêm
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import PageHeader from '~/components/admin/shared/PageHeader.vue';
    import { bankCode } from '~/constants/bank';

    export default {
        layout: 'admin',
        components: {
            PageHeader,
        },
        data() {
            const bankForm = {
                bank_user: '',
                bank_name: '',
                bank_number: '',
                bank_branch: '',
            };
            return {
                bankForm,
                banks: bankCode,
                rules: {
                    bank_user: [
                        {
                            required: true, message: 'Vui lòng nhập tên chủ tài khoản', trigger: 'blur',
                        },
                        {
                            min: 2, max: 300, message: 'Tên quá ngắn', trigger: ['blur', 'change'],
                        },
                    ],
                    bank_name: [
                        { required: true, message: 'Vui lòng nhập tên ngân hàng', trigger: 'blur' },
                        {
                            min: 2, max: 300, message: 'Tên quá ngắn', trigger: ['blur', 'change'],
                        },
                    ],
                    bank_number: [
                        { required: true, message: 'Vui lòng nhập số tài khoản', trigger: 'blur' },
                        {
                            trigger: 'blur',
                            validator(rule, value, callback) {
                                if (/^[0-9]{2,}$/.test(value)) {
                                    callback();
                                } else {
                                    callback(new Error('Chỉ nhập số '));
                                }
                            },
                        },
                    ],
                    bank_branch: [
                        { required: true, message: 'Nhập tên chi nhánh', trigger: 'blur' },
                        {
                            min: 2, max: 300, message: 'Tên quá ngắn', trigger: ['blur', 'change'],
                        },
                    ],
                },
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        try {
                            this.$store.dispatch('admin/bank-account/update', this.bankForm);
                            this.$store.dispatch('admin/bank-account/fetch');
                            this.$router.push('/admin/bank-account');
                            this.$message({
                                message: 'Thêm thành công',
                                type: 'success',
                            });
                        } catch (error) {
                            this.$message({
                                message: 'Thêm thất bại',
                                type: 'error',
                            });
                        }
                    } else {
                        return false;
                    }
                });
            },
        },
    };
</script>
