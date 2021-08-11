<template>
    <div>
        <el-form
            ref="userForm"
            :model="userForm"
            label-width="120px"
            class="w-2/3"
            :rules="rules"
        >
            <el-form-item label="Tên hiển thị" prop="username">
                <el-col :span="12">
                    <el-input v-model="userForm.name" placeholder="Username" />
                </el-col>
            </el-form-item>
            <el-form-item label="Email" prop="email">
                <el-col :span="12">
                    <el-input v-model="userForm.email" placeholder="Email" />
                </el-col>
            </el-form-item>
            <el-form-item label="Phone" prop="phone">
                <el-col :span="12">
                    <el-input v-model="userForm.phone" placeholder="Phone" disabled />
                </el-col>
            </el-form-item>
            <el-form-item label="Số CMND" prop="identify">
                <el-col :span="12">
                    <el-input v-model="userForm.identify" placeholder="Số CMND" />
                </el-col>
            </el-form-item>
            <el-form-item label="Ngày sinh" prop="birthday">
                <el-col :span="6">
                    <el-date-picker
                        v-model="userForm.dateOfBirth"
                        type="date"
                        value-format="yyyy-MM-dd"
                        placeholder="Pick a date"
                        style="width: 100%;"
                    />
                </el-col>
            </el-form-item>
            <el-form-item label="Giới tính" prop="gender">
                <el-col :span="6">
                    <el-select v-model="userForm.gender" placeholder="Gender">
                        <el-option label="Nam" value="male" />
                        <el-option label="Nữ" value="female" />
                        <el-option label="Khác" value="other" />
                    </el-select>
                </el-col>
            </el-form-item>
            <el-form-item label="Trạng thái" prop="status">
                <el-col :span="6">
                    <el-select v-model="userForm.status" placeholder="Trạng thái">
                        <el-option label="Tạm khóa" value="blocked" />
                        <el-option label="Đang hoạt động" value="working" />
                    </el-select>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('userForm')">
                    Lưu
                </el-button>
                <!-- <el-button @click="resetForm('userForm')">
                    Làm mới
                </el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        props: {
            userData: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                userForm: this.userData,
                rules: {
                    identify: [
                        {
                            required: true, message: 'Vui lòng nhập thông tin', trigger: 'blur',
                        },
                        {
                            trigger: 'blur',
                            validator(rule, value, callback) {
                                if (/^[0-9]{12}$/.test(value)) {
                                    callback();
                                } else {
                                    callback(new Error('Chỉ nhập số và đủ 12 số'));
                                }
                            },
                        },
                    ],
                    email: [
                        { required: true, message: 'Please input email', trigger: 'blur' },
                        { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] },
                    ],
                },
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('submitForm', this.userForm);
                    } else {
                        return false;
                    }
                });
            },
            // resetForm(formName) {
            //     this.$refs[formName].resetFields();
            // },
        },
    };
</script>
