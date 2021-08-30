<template>
    <div>
        <el-form
            ref="statusForm"
            :model="statusForm"
            label-width="120px"
            class="w-full"
            :rules="rules"
        >
            <div class="flex">
                <div class="clearfix vi-header w-1/2">
                    <el-form-item label="KENO" prop="keno">
                        <el-col :span="10">
                            <el-select
                                v-model="statusForm.keno"
                                value-key="value"
                                placeholder="Trạng thái"
                            >
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="POWER" prop="power">
                        <el-col :span="10">
                            <el-select v-model="statusForm.power" placeholder="Trạng thái">
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="MEGA" prop="mega">
                        <el-col :span="10">
                            <el-select v-model="statusForm.mega" placeholder="Trạng thái">
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="MAX3D" prop="max3d">
                        <el-col :span="10">
                            <el-select v-model="statusForm.max3d" placeholder="Trạng thái">
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="MAX3DPLUS" prop="max3dplus">
                        <el-col :span="10">
                            <el-select v-model="statusForm.max3dplus" placeholder="Trạng thái">
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="MAX4D" prop="max4d">
                        <el-col :span="10">
                            <el-select v-model="statusForm.max4d" placeholder="Trạng thái">
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Điện toán 1-2-3" prop="compute123">
                        <el-col :span="10">
                            <el-select v-model="statusForm.compute123" placeholder="Trạng thái">
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                </div>
                <div class="clearfix vi-header w-1/2">
                    <el-form-item label="Điện toán 6-3-6" prop="compute636">
                        <el-col :span="10">
                            <el-select v-model="statusForm.compute636" placeholder="Trạng thái">
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Loto 2-3-4" prop="loto234">
                        <el-col :span="10">
                            <el-select v-model="statusForm.loto234" placeholder="Trạng thái">
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Loto2" prop="loto2">
                        <el-col :span="10">
                            <el-select v-model="statusForm.loto2" placeholder="Trạng thái">
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Loto3" prop="loto3">
                        <el-col :span="10">
                            <el-select v-model="statusForm.loto3" placeholder="Trạng thái">
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Loto5" prop="loto5">
                        <el-col :span="10">
                            <el-select v-model="statusForm.loto5" placeholder="Trạng thái">
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Kiến thiết" prop="kienthiet">
                        <el-col :span="10">
                            <el-select v-model="statusForm.kienthiet" placeholder="Trạng thái">
                                <el-option label="Đang hoạt động" value="working" />
                                <el-option label="Không hoạt động" value="blocked" />
                            </el-select>
                        </el-col>
                    </el-form-item>
                </div>
            </div>
            <el-form-item>
                <el-button type="primary" @click="submitForm('statusForm')">
                    Lưu
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';

    const modelForm = {
        keno: '',
        power: '',
        max3d: '',
        max3dplus: '',
        max4d: '',
        mega: '',
        compute123: '',
        compute636: '',
        loto234: '',
        loto2: '',
        loto3: '',
        loto5: '',
        kienthiet: '',
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
                statusForm: this.dataForm.data
                    ? cloneDeep(this.dataForm.data)
                    : cloneDeep(modelForm),
                rules: {
                },
            };
        },
        methods: {
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
