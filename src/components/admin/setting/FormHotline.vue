<template>
    <div>
        <el-form
            ref="limitForm"
            :model="limitForm"
            label-width="120px"
            class="w-full"
            :rules="rules"
        >
            <el-form-item label="Số điện thoại" prop="hot_line">
                <el-col :span="6">
                    <el-input v-model="limitForm.hot_line" placeholder="số điện thoại" />
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
        hot_line: '',
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
                limitForm: this.dataForm.data
                    ? cloneDeep(this.dataForm.data)
                    : cloneDeep(modelForm),
                rules: {
                    hot_line: [
                        {
                            required: true, message: 'Vui lòng nhập số điện thoại', trigger: 'blur',
                        },
                        {
                            trigger: 'blur',
                            validator(rule, value, callback) {
                                if (/^[0-9]{10}$/.test(value)) {
                                    callback();
                                } else {
                                    callback(new Error('Số điện thoại đủ 10 số'));
                                }
                            },
                        },
                    ],
                },
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('submitForm', this.limitForm);
                    } else {
                        return false;
                    }
                });
            },
        },
    };
</script>

<style>
.vi-left-title {
    font-size: 18px;
    width: fit-content;
    padding: 6px 30px;
    border-radius: 41px;
    margin-bottom: 20px;
}
</style>
