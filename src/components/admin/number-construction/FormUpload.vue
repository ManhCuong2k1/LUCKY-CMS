<template>
    <el-form
        ref="limitForm"
        :model="limitForm"
        label-width="120px"
        class="w-full"
        :rules="rules"
    >
        <el-form-item label="Up file">
            <el-upload
                ref="upload"
                class="upload-demo"
                action="/api/admin/lottery-order/excel/upload"
                :auto-upload="false"
                :on-success="getdata"
                :before-upload="before"
                @change="handleFileUpload()"
            >
                <el-button slot="trigger" size="small" type="primary">
                    Chọn file
                </el-button>
            </el-upload>
        </el-form-item>
        <el-form-item label="Ngày hiệu lực" prop="date">
            <el-col :span="18">
                <el-date-picker
                    v-model="limitForm.date"
                    type="date"
                    value-format="dd-MM-yyyy"
                    placeholder="Chọn ngày"
                    style="width: 50%;"
                />
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-button
                style="margin-left: 10px;"
                size="small"
                type="success"
                @click="submitUpload"
            >
                upload to server
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    // import axios from 'axios';

    export default {
        data() {
            return {
                limitForm: {
                    date: '',
                },
                file: '',
                createAt: '',
                rules: {
                    date: [
                        { required: true, message: 'Hãy chọn ngày', trigger: 'blur' },
                    ],
                },
            };
        },

        methods: {
            async getdata(res) {
                this.createAt = res.response[0].createdAt;
                await this.$store.dispatch('admin/orderLucky/upDate', { createAt: this.createAt, date: this.limitForm.date, file: res.file });
                await this.$store.dispatch('admin/storage/fetch');
            },
            submitUpload() {
                this.$refs.upload.submit();
                this.$emit('closeForm');
            },
        },
    };
</script>
