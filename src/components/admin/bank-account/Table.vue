<template>
    <div>
        <el-table :data="dataForm" class="w-full">
            <el-table-column type="index" width="50" />
            <el-table-column prop="name" label="Chủ tài khoản">
                <template slot-scope="scope">
                    <span>{{ scope.row.bank_user }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="phone" label="Tên ngân hàng">
                <template slot-scope="scope">
                    <span>{{ scope.row.bank_name }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="identify" label="Số tài khoản">
                <template slot-scope="scope">
                    <span>{{ scope.row.bank_number }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="bankCode" label="Chi nhánh">
                <template slot-scope="scope">
                    <span>{{ scope.row.bank_branch }} </span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';

    export default {
        props: {
            dataBank: {
                type: Array,
                required: true,
            },
        },
        data() {
            const dataForm = cloneDeep(this.dataBank);
            return {
                dataForm,
            };
        },
        watch: {
            dataBank() {
                this.dataForm = cloneDeep(this.dataBank);
            },
        },
        methods: {
        },
    };
</script>
