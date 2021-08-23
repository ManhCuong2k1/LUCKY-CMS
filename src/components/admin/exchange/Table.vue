<template>
    <div>
        <el-table :data="dataForm" class="w-full">
            <el-table-column type="index" width="50" />
            <el-table-column prop="name" label="Khách hàng" width="150">
                <template slot-scope="scope">
                    <span>{{ scope.row.user_exchange.name }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="phone" label="Số điện thoại" width="160">
                <template slot-scope="scope">
                    <span>{{ scope.row.user_exchange.phone }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="identify" label="Số CMT/CMND" width="160">
                <template slot-scope="scope">
                    <span>{{ scope.row.user_exchange.identify }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="bankCode" label="Phương thức" width="160">
                <template slot-scope="scope">
                    <span>{{ scope.row.bankCode }} </span>
                </template>
            </el-table-column>
            <el-table-column prop="bankNumber" label="Số tài khoản" width="150">
                <template slot-scope="scope">
                    <span>{{ scope.row.bankNumber }} </span>
                </template>
            </el-table-column>
            <el-table-column prop="bankUserName" label="Tên tài khoản" width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.bankUserName }} </span>
                </template>
            </el-table-column>
            <el-table-column prop="amount" label="Số tiền đổi thưởng" width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.amount | formatPrice }} </span>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="Trạng thái" width="150">
                <template slot-scope="scope">
                    <span :class="scope.row.status === 'success' ? 'success': scope.row.status === 'delay' ? 'delay': ''">{{ statusExchange(scope.row.status) }} </span>
                </template>
            </el-table-column>
            <el-table-column prop="createdAt" label="Ngày tạo" width="160">
                <template slot-scope="scope">
                    <span>{{ formatDate(scope.row.createdAt) }} </span>
                </template>
            </el-table-column>
            <el-table-column label="Xác nhận">
                <template slot-scope="scope">
                    <el-button
                        icon="far fa-check-circle"
                        @click="confirm(scope.row.id, scope.row.status)"
                    />
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';
    import { formatDate } from '~/utils/formatDate';
    import { statusExchange } from '~/utils/configData';

    export default {
        props: {
            dataExchange: {
                type: Array,
                required: true,
            },
        },
        data() {
            const dataForm = cloneDeep(this.dataExchange);
            return {
                dataForm,
                showImages: false,
            };
        },
        watch: {
            dataExchange() {
                this.dataForm = cloneDeep(this.dataExchange);
            },
        },
        methods: {
            formatDate,
            statusExchange,
            async confirm(id, status) {
                if (status === 'delay') {
                    this.$emit('updateData', id);
                } else {
                    this.$message({
                        message: 'Đã xác nhận',
                        type: 'draw',
                    });
                }
            },
        },
    };
</script>

<style>
.success {
    display: inline-block;
    height: 32px;
    padding: 0 10px;
    line-height: 30px;
    font-size: 12px;
    /* color: #409eff; */
    border: 1px solid #d9ecff;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;
    border-color: #67c23a;
    color: #fff;
    background-color: #67c23a;
}
.delay {
    display: inline-block;
    height: 32px;
    padding: 0 10px;
    line-height: 30px;
    font-size: 12px;
    /* color: #409eff; */
    border: 1px solid #d9ecff;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;
    border-color: #f56c6c;
    color: #fff;
    background-color: #f56c6c;
}
</style>
