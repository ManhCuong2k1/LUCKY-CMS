<template>
    <div>
        <el-table :data="dataForm" class="w-full">
            <el-table-column type="index" width="50" />
            <el-table-column prop="name" label="Khách hàng">
                <template slot-scope="scope">
                    <span>{{ scope.row.user.username }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="phone" label="Số điện thoại">
                <template slot-scope="scope">
                    <span>{{ scope.row.user.phone }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="phone" label="Hành động">
                <template slot-scope="scope">
                    <span>{{ scope.row.actionName }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="transporter" label="Nội dung">
                <template slot-scope="scope">
                    <span>{{ scope.row.detail }} </span>
                </template>
            </el-table-column>
            <el-table-column prop="total" label="Thời gian">
                <template slot-scope="scope">
                    {{ scope.row.createdAt | formatDate }}
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';
    // import { mapState } from 'vuex';
    // import { image as toImage } from '~/utils/url';
    // import { checkType, checkStatus, checkName } from '~/utils/configData';

    export default {
        props: {
            dataHistory: {
                type: Array,
                required: true,
            },
        },
        data() {
            const dataForm = cloneDeep(this.dataHistory);
            return {
                dataForm,
                showImages: false,
            };
        },
        watch: {
            dataHistory() {
                this.dataForm = cloneDeep(this.dataHistory);
            },
        },
    };
</script>

<style>
</style>
