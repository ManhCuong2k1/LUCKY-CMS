<template>
    <div>
        <el-form
            ref="ruleForm"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="80px"
            class="demo-ruleForm"
        >
            <el-form-item label="Số tiền" prop="recharge">
                <Money
                    v-model="ruleForm.recharge"
                    v-bind="money"
                    class="input-money"
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
    import { Money } from 'v-money';

    export default {
        components: {
            Money,
        },
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
                money: {
                    decimal: ',',
                    thousands: '.',
                    prefix: '',
                    suffix: ' đ',
                    precision: 0,
                    masked: false,
                },
                ruleForm: {
                    recharge: '',
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
                                    callback(new Error('Số tiền tối thiểu là 10000VND và phải nhập số'));
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

<style>
.input-money {
        -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
}
</style>
