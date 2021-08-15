<template>
    <div>
        <el-table :data="dataForm" class="w-full">
            <el-table-column type="index" width="50" />
            <el-table-column prop="name" label="Tên file">
                <template slot-scope="scope">
                    <span>{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="Ngày hiệu lực">
                <template slot-scope="scope">
                    {{ scope.row.date }}
                </template>
            </el-table-column>
            <el-table-column prop="createdAt" label="Thời gian up file">
                <template slot-scope="scope">
                    {{ formatDate(scope.row.createdAt) }}
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';
    import { formatDate } from '~/utils/formatDate';

    export default {
        props: {
            dataFile: {
                type: Array,
                required: true,
            },
        },
        data() {
            const dataForm = cloneDeep(this.dataFile);
            return {
                dataForm,
            };
        },
        watch: {
            dataFile() {
                this.dataForm = cloneDeep(this.dataFile);
            },
        },
        methods: {
            formatDate,
        },
    };
</script>

<style>
</style>
