<template>
    <div>
        <el-form
            ref="limitForm"
            :model="limitForm"
            label-width="120px"
            class="w-full"
            :rules="rules"
        >
            <div class="flex">
                <div class="clearfix vi-header w-1/2">
                    <h3 class="vi-left-title pull-left">
                        Hạn mức tối thiểu
                    </h3>
                    <el-form-item label="Nạp MOMO" prop="value">
                        <el-col :span="18">
                            <el-input v-model="limitForm.recharge_momo_min" placeholder="Số tiền tối thiểu" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Nạp VNPAY" prop="value">
                        <el-col :span="18">
                            <el-input v-model="limitForm.recharge_vnpay_min" placeholder="Số tiền tối thiểu" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút ví LUCKY" prop="value">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_local_min" placeholder="Số tiền tối thiểu" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút ví điện tử" prop="value">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_wallet_min" placeholder="Số tiền tối thiểu" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút TK Bank" prop="value">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_bank_min" placeholder="Số tiền tối thiểu" />
                        </el-col>
                    </el-form-item>
                </div>
                <div class="clearfix vi-header w-1/2">
                    <h3 class="vi-left-title pull-left">
                        Hạn mức tối đa
                    </h3>
                    <el-form-item label="Nạp MOMO" prop="value">
                        <el-col :span="18">
                            <el-input v-model="limitForm.recharge_momo_max" placeholder="Số tiền tối đa" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Nạp VNPAY" prop="value">
                        <el-col :span="18">
                            <el-input v-model="limitForm.recharge_vnpay_max" placeholder="Số tiền tối đa" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút ví LUCKY" prop="value">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_local_max" placeholder="Số tiền tối đa" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút ví điện tử" prop="value">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_wallet_max" placeholder="Số tiền tối đa" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút TK Bank" prop="value">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_bank_max" placeholder="Số tiền tối đa" />
                        </el-col>
                    </el-form-item>
                </div>
            </div>

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
        recharge_momo_min: '',
        recharge_vnpay_min: '',
        exchange_local_min: '',
        exchange_wallet_min: '',
        exchange_bank_min: '',
        recharge_momo_max: '',
        recharge_vnpay_max: '',
        exchange_local_max: '',
        exchange_wallet_max: '',
        exchange_bank_max: '',
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
                    email: [
                        { required: true, message: 'Please input email', trigger: 'blur' },
                        {
                            type: 'email',
                            message: 'Please input correct email address',
                            trigger: ['blur', 'change'],
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
