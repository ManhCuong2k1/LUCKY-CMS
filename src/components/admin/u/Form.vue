<template>
    <div>
        <el-form
            ref="userForm"
            :model="userForm"
            label-width="120px"
            class="w-2/3"
            :rules="rules"
        >
            <el-form-item label="Username" prop="username">
                <el-col :span="12">
                    <el-input v-model="userForm.username" placeholder="Username" disabled />
                </el-col>
            </el-form-item>
            <el-form-item label="Tên hiển thị" prop="name">
                <el-col :span="12">
                    <el-input v-model="userForm.name" placeholder="Name" />
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
            const userForm = this.userData;
            return {
                userForm,
                rules: {
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
        },
    };
</script>
