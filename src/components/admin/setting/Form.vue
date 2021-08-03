<template>
    <div>
        <el-form
            ref="limitForm"
            :model="limitForm"
            label-width="120px"
            class="w-2/3"
            :rules="rules"
        >
            <el-form-item label="Hạn mức" prop="value">
                <el-col :span="12">
                    <el-input v-model="limitForm.value" placeholder="Số tiền cần nhập" />
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('limitForm')">
                    Lưu
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';

    const modelForm = {
        value: '',
    };
    export default {
        props: {
            dataForm: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                limitForm: this.dataForm.data ? cloneDeep(this.dataForm.data) : cloneDeep(modelForm),
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
                        this.$emit('submitForm', this.limitForm);
                        // console.log(this.limitForm);
                    } else {
                        return false;
                    }
                });
            },
        },
    };
</script>
