<template>
    <div>
        <el-form
            ref="limitForm"
            :model="limitForm"
            label-width="120px"
            class="w-full"
        >
            <div class="flex">
                <div class="clearfix vi-header w-1/2">
                    <h3 class="vi-left-title pull-left">
                        Hạn mức tối thiểu
                    </h3>
                    <el-form-item
                        v-for="item in limitForm.minLimit"
                        :key="item.id"
                        :label="checkKey(item.key)"
                        :prop="item.key"
                    >
                        <el-col :span="18">
                            <money v-model="item.value" v-bind="money" class="input-money" />
                        </el-col>
                    </el-form-item>
                </div>
                <div class="clearfix vi-header w-1/2">
                    <h3 class="vi-left-title pull-left">
                        Hạn mức tối đa
                    </h3>
                    <el-form-item
                        v-for="item in limitForm.maxLimit"
                        :key="item.id"
                        :label="checkKey(item.key)"
                        :prop="item.key"
                    >
                        <el-col :span="18">
                            <money v-model="item.value" v-bind="money" class="input-money" />
                        </el-col>
                    </el-form-item>
                </div>
            </div>
            <el-form-item :label="checkKey(limitForm.storageFee.key)" :prop="limitForm.storageFee.key">
                <el-col :span="6">
                    <el-input v-model="limitForm.storageFee.value" placeholder="Phí lưu vé %" />
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
    import { Money } from 'v-money';
    import { checkKey } from '~/utils/configData';

    const modelForm = {
        minLimit: [
            {
                key: 'exchange_local_min',
                value: 0,
            },
            {
                key: 'exchange_momo_min',
                value: 0,
            },
            {
                key: 'exchange_vnpay_min',
                value: 0,
            },
            {
                key: 'exchange_bank_min',
                value: 0,
            },
            {
                key: 'recharge_momo_min',
                value: 0,
            },
            {
                key: 'recharge_vnpay_min',
                value: 0,
            },
        ],
        maxLimit: [
            {
                key: 'exchange_local_max',
                value: 0,
            },
            {
                key: 'exchange_momo_max',
                value: 0,
            },
            {
                key: 'exchange_vnpay_max',
                value: 0,
            },
            {
                key: 'exchange_bank_max',
                value: 0,
            },
            {
                key: 'recharge_momo_max',
                value: 0,
            },
            {
                key: 'recharge_vnpay_max',
                value: 0,
            },
        ],
        storageFee: {
            key: 'ticket_storage_fee',
            value: 0,
        },
    };
    export default {
        components: {
            Money,
        },
        props: {
            dataForm: {
                type: Object,
                required: true,
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
                limitForm: this.dataForm.data
                    ? cloneDeep(this.dataForm.data)
                    : cloneDeep(modelForm),
            };
        },
        methods: {
            checkKey,
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (/^[0-9]{1,2}$/.test(this.limitForm.storageFee.value)) {
                            this.$emit('submitForm', this.limitForm);
                        } else {
                            this.$message({
                                message: 'Nhập phí lưu vé',
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

<style>
.vi-left-title {
    font-size: 18px;
    width: fit-content;
    padding: 6px 30px;
    border-radius: 41px;
    margin-bottom: 20px;
}
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
