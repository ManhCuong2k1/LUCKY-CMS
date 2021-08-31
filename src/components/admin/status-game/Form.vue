<template>
    <div>
        <el-form
            ref="statusForm"
            :model="statusForm"
            label-width="120px"
            class="w-full"
            :rules="rules"
        >
            <div>
                <div class="flex flex-wrap clearfix vi-header w-full">
                    <el-form-item
                        v-for="item in statusForm"
                        :key="item.id"
                        :label="checkType(item.gameName)"
                        class="w-1/2"
                    >
                        <el-col :span="10">
                            <el-select v-model="item.status" placeholder="Trạng thái">
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                </div>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('statusForm')">
                        Lưu
                    </el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';
    import { checkType } from '~/utils/configData';

    export default {
        props: {
            dataForm: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                statusForm: cloneDeep(this.dataForm.data),
            };
        },
        methods: {
            checkType,
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('submitForm', this.statusForm);
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
