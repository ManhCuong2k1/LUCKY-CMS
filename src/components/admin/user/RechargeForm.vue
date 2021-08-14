<template>
    <div>
        <el-form
            ref="ruleForm"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
        >
            <el-form-item label="Số tiền" prop="recharge">
                <el-input
                    v-model="ruleForm.recharge"
                    type="recharge"
                    autocomplete="off"
                />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">
                    Lưu
                </el-button>
                <el-button @click="resetForm('ruleForm')">
                    Làm mới
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        props: {
            reOpenForm: {
                type: Boolean,
                require: false,
            },
            userId: {
                type: Number,
                require: true,
            },
        },

        data() {
            return {
                ruleForm: {
                    recharge: null,
                },
                formLabelWidth: '120px',
                rules: {
                    recharge: [
                        { required: true, message: 'Hãy nhập số tiền cần nạp', trigger: 'blur' },
                        {
                            trigger: 'blur',
                            validator(rule, value, callback) {
                                if (/^[0-9]{5,}$/.test(value)) {
                                    callback();
                                } else {
                                    callback(new Error('Số tiền không được dưới 10000VND và là số'));
                                }
                            },
                        },
                    ],
                },
            };
        },

        watch: {
            reOpenForm(newVal, oldVal) {
                if (oldVal === false && newVal === true) {
                    this.resetForm('ruleForm');
                }
            },
        },

        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('finishForm', this.ruleForm);
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        },
    };
</script>
