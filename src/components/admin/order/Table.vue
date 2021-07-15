<template>
    <div>
        <el-table :data="dataTable" class="w-full">
            <el-table-column
                prop="code"
                label="ID"
            />
            <el-table-column prop="name" label="Tên">
                <template slot-scope="scope">
                    <span>{{ scope.row.PointOfSale.name }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="city" label="Khu vực">
                <template slot-scope="scope">
                    <span>{{ scope.row.PointOfSale.City.name }}, {{ scope.row.PointOfSale.District.name }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="transporter" label="Vận chuyển">
                <template slot-scope="scope">
                    <span v-if="!scope.row.Transporter">{{ scope.row.TransporterAnoy }}</span>
                    <span v-else>{{ scope.row.Transporter.name }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="phone" label="Điện thoại">
                <template slot-scope="scope">
                    <span>{{ scope.row.PointOfSale.phone }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="total" label="Tổng tiền">
                <template slot-scope="scope">
                    {{ scope.row.total | formatNumber }}
                </template>
            </el-table-column>
            <el-table-column prop="status" label="Trạng thái">
                <template slot-scope="scope">
                    <StatusTag :status="scope.row.status" />
                </template>
            </el-table-column>
            <el-table-column label="Ngày tạo">
                <template slot-scope="scope">
                    <span>{{ scope.row.createdAt | formatDate }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Ngày cập nhật">
                <template slot-scope="scope">
                    <span>{{ scope.row.updatedAt | formatDate }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Hành động" fixed="right" max-width="220">
                <template slot-scope="scope">
                    <el-button
                        :type="scope.row.deletedAt == null ? '' : 'danger'"
                        icon="el-icon-delete"
                        @click="switchDeleteDistrictbutor(scope.row.id, scope.row.deletedAt)"
                    />
                    <div>
                        <nuxt-link :to="`/admin/order-sale/${scope.row.id}/edit`">
                            <el-button icon="el-icon-view" />
                        </nuxt-link>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import { findIndex } from 'lodash';
    import cloneDeep from 'lodash/cloneDeep';
    import { mapState } from 'vuex';
    import StatusTag from '~/components/admin/shared/StatusTag.vue';

    export default {
        components: {
            StatusTag,
        },

        props: {
            data: {
                type: Array,
                require: true,
            },
        },

        data() {
            return {
                dataTable: cloneDeep(this.data),
            };
        },

        computed: {
            ...mapState('admin/distributor', ['distributors', 'distributorDelete', 'distributorRestore']),
        },

        watch: {
            data: {
                handler() {
                    this.dataTable = cloneDeep(this.data);
                },
                deep: true,
            },
        },

        methods: {
            switchDeleteDistrictbutor(id, deleteAt) {
                if (deleteAt === null) {
                    this.$confirm('Bạn sẽ xóa bản ghi này ?', 'Warning', {
                        confirmButtonText: 'OK',
                        cancelButtonText: 'Cancel',
                        type: 'warning',
                    }).then(() => {
                        this.actionDeleteDistributor(id);
                        this.$message({
                            type: 'success',
                            message: 'Xóa thành công',
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: 'Đã hủy xóa',
                        });
                    });
                } else {
                    this.actionRestoreDistributor(id);
                }
            },

            async actionDeleteDistributor(id) {
                await this.$store.dispatch('admin/distributor/delete', { id });
                const newItem = this.distributorDelete;
                const index = findIndex(this.dataTable, { id });
                this.dataTable.splice(index, 1, { ...index, ...newItem.data });
            },

            async actionRestoreDistributor(id) {
                await this.$store.dispatch('admin/distributor/restore', { id });
                const newItem = this.distributorRestore;
                const index = findIndex(this.dataTable, { id });
                this.dataTable.splice(index, 1, { ...index, ...newItem.data });
            },
        },
    };
</script>
