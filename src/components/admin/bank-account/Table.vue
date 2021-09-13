<template>
    <div>
        <el-table :data="dataForm" class="w-full">
            <el-table-column type="index" width="50" />
            <el-table-column prop="bank_user" label="Chủ tài khoản">
                <template slot-scope="scope">
                    <span>{{ scope.row.bank_user }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="bank_name" label="Tên ngân hàng">
                <template slot-scope="scope">
                    <span>{{ scope.row.bank_name }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="bank_number" label="Số tài khoản">
                <template slot-scope="scope">
                    <span>{{ scope.row.bank_number }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="bank_branch" label="Chi nhánh">
                <template slot-scope="scope">
                    <span>{{ scope.row.bank_branch }} </span>
                </template>
            </el-table-column>
            <el-table-column label="Hành động" fixed="right" width="220">
                <template slot-scope="scope">
                    <el-button icon="el-icon-edit" @click="$router.push(`/admin/bank-account/${scope.row.id}/edit`)" />
                    <el-button type="danger" icon="el-icon-delete" @click="deleteBank(scope.row.id)" />
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
            deleteBank(id) {
                this.$confirm('Bạn có muốn xóa bản ghi này ?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning',
                }).then(async () => {
                    await this.$store.dispatch('admin/bankAccount/delete', id);
                    this.$store.dispatch('admin/bankAccount/fetch');
                    this.$message({
                        type: 'success',
                        message: 'Xóa thành công',
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Xóa thất bại',
                    });
                });
            },
        },
    };
</script>
