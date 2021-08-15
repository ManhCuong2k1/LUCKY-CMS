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
                    <el-form-item label="Nạp MOMO" prop="recharge_momo_min">
                        <el-col :span="18">
                            <el-input v-model="limitForm.recharge_momo_min" placeholder="Số tiền tối thiểu" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Nạp VNPAY" prop="recharge_vnpay_min">
                        <el-col :span="18">
                            <el-input v-model="limitForm.recharge_vnpay_min" placeholder="Số tiền tối thiểu" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút ví LUCKY" prop="exchange_local_min">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_local_min" placeholder="Số tiền tối thiểu" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút ví MOMO" prop="exchange_momo_min">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_momo_min" placeholder="Số tiền tối thiểu" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút ví VNPAY" prop="exchange_vnpay_min">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_vnpay_min" placeholder="Số tiền tối thiểu" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút TK Bank" prop="exchange_bank_min">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_bank_min" placeholder="Số tiền tối thiểu" />
                        </el-col>
                    </el-form-item>
                </div>
                <div class="clearfix vi-header w-1/2">
                    <h3 class="vi-left-title pull-left">
                        Hạn mức tối đa
                    </h3>
                    <el-form-item label="Nạp MOMO" prop="recharge_momo_max">
                        <el-col :span="18">
                            <el-input v-model="limitForm.recharge_momo_max" placeholder="Số tiền tối đa" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Nạp VNPAY" prop="recharge_vnpay_max">
                        <el-col :span="18">
                            <el-input v-model="limitForm.recharge_vnpay_max" placeholder="Số tiền tối đa" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút ví LUCKY" prop="exchange_local_max">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_local_max" placeholder="Số tiền tối đa" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút ví MOMO" prop="exchange_momo_max">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_momo_max" placeholder="Số tiền tối đa" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút ví VNPAY" prop="exchange_vnpay_max">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_vnpay_max" placeholder="Số tiền tối đa" />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Rút TK Bank" prop="exchange_bank_max">
                        <el-col :span="18">
                            <el-input v-model="limitForm.exchange_bank_max" placeholder="Số tiền tối đa" />
                        </el-col>
                    </el-form-item>
                </div>
            </div>
            <el-form-item label="% Phí lưu vé" prop="ticket_storage_fee">
                <el-col :span="6">
                    <el-input v-model="limitForm.ticket_storage_fee" placeholder="Phí lưu vé %" />
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
        recharge_momo_min: '',
        recharge_vnpay_min: '',
        exchange_local_min: '',
        exchange_momo_min: '',
        exchange_vnpay_min: '',
        exchange_bank_min: '',
        recharge_momo_max: '',
        recharge_vnpay_max: '',
        exchange_local_max: '',
        exchange_momo_max: '',
        exchange_vnpay_max: '',
        exchange_bank_max: '',
        ticket_storage_fee: '',
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
                    recharge_momo_min: [
                        { required: true, message: 'Vui lòng nhập số tiền', trigger: 'blur' },
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
                    recharge_vnpay_min: [
                        { required: true, message: 'Vui lòng nhập số tiền', trigger: 'blur' },
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
                    exchange_local_min: [
                        { required: true, message: 'Vui lòng nhập số tiền', trigger: 'blur' },
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
                    exchange_momo_min: [
                        { required: true, message: 'Vui lòng nhập số tiền', trigger: 'blur' },
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
                    exchange_vnpay_min: [
                        { required: true, message: 'Vui lòng nhập số tiền', trigger: 'blur' },
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
                    exchange_bank_min: [
                        { required: true, message: 'Vui lòng nhập số tiền', trigger: 'blur' },
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
                    recharge_momo_max: [
                        { required: true, message: 'Vui lòng nhập số tiền', trigger: 'blur' },
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
                    recharge_vnpay_max: [
                        { required: true, message: 'Vui lòng nhập số tiền', trigger: 'blur' },
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
                    exchange_local_max: [
                        { required: true, message: 'Vui lòng nhập số tiền', trigger: 'blur' },
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
                    exchange_momo_max: [
                        { required: true, message: 'Vui lòng nhập số tiền', trigger: 'blur' },
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
                    exchange_vnpay_max: [
                        { required: true, message: 'Vui lòng nhập số tiền', trigger: 'blur' },
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
                    exchange_bank_max: [
                        { required: true, message: 'Vui lòng nhập số tiền', trigger: 'blur' },
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
                    ticket_storage_fee: [
                        { required: true, message: 'Hãy nhập % phí lưu vé ', trigger: 'blur' },
                        {
                            trigger: 'blur',
                            validator(rule, value, callback) {
                                if (/^[0-9]{1,3}$/.test(value)) {
                                    callback();
                                } else {
                                    callback(new Error('Nhập % phí lưu vé'));
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
