<template>
    <div>
        <el-table :data="dataTable" class="w-full">
            <el-table-column
                fixed
                type="index"
            />
            <el-table-column
                fixed
                prop="username"
                label="Username"
                width="150"
            />
            <el-table-column prop="phone" label="Số điện thoại">
                <template slot-scope="scope">
                    <span>{{ scope.row.phone }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="gender" label="Giới tính">
                <template slot-scope="scope">
                    <span>{{ scope.row.gender }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="Trạng thái">
                <template slot-scope="scope">
                    <span>{{ scope.row.status }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="totalCoin" label="Tổng tiền">
                <template slot-scope="scope">
                    <span>{{ scope.row.totalCoin }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="totalReward" label="Tổng phần thưởng">
                <template slot-scope="scope">
                    <span>{{ scope.row.totalReward }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Created At">
                <template slot-scope="scope">
                    <span>{{ scope.row.createdAt | formatDate }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Operations" fixed="right" width="220">
                <template slot-scope="scope">
                    <el-button
                        :type="scope.row.deletedAt == null ? '' : 'danger'"
                        icon="el-icon-remove-outline"
                        @click="switchLockUser(scope.row.id, scope.row.deletedAt)"
                    />
                    <el-button icon="el-icon-edit" @click="$router.push(`/admin/user/${scope.row.id}/edit`)" />
                    <el-button icon="el-icon-key" @click="openChangePass(scope.row.id)" />
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
            title="Đổi mật khẩu"
            :visible.sync="dialogVisibleInstant"
            width="30%"
        >
            <PasswordForm :re-open-form="dialogVisibleInstant" :user-id="userIdChangePass" @finishForm="updatePassword" />
        </el-dialog>
    </div>
</template>

<script>
    import { findIndex } from 'lodash';
    import cloneDeep from 'lodash/cloneDeep';
    import { mapState } from 'vuex';
    import PasswordForm from '~/components/admin/user/PasswordForm.vue';

    export default {
        components: {
            PasswordForm,
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
                dialogVisibleInstant: false,
                userIdChangePass: -1,
            };
        },

        computed: {
            ...mapState('admin/user', ['user']),
        },

        watch: {
            data: {
                handler() {
                    this.dataTable = this.data;
                },
                deep: true,
            },
        },

        methods: {
            switchLockUser(id, deleteAt) {
                if (deleteAt === null) {
                    this.$confirm('Bạn sẽ xóa bản ghi này ?', 'Warning', {
                        confirmButtonText: 'OK',
                        cancelButtonText: 'Cancel',
                        type: 'warning',
                    }).then(() => {
                        this.lockUser(id);
                        this.$message({
                            type: 'success',
                            message: 'Delete completed',
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: 'Delete canceled',
                        });
                    });
                } else {
                    this.unLockUser(id);
                }
            },

            async lockUser(id) {
                await this.$store.dispatch('admin/user/lock', { id });
                const newItem = this.user;
                const index = findIndex(this.dataTable, { id });
                this.dataTable.splice(index, 1, { ...index, ...newItem.data });
            },

            async unLockUser(id) {
                await this.$store.dispatch('admin/user/unLock', { id });
                const newItem = this.user;
                const index = findIndex(this.dataTable, { id });
                this.dataTable.splice(index, 1, { ...index, ...newItem.data });
            },

            async updatePassword(payload) {
                try {
                    await this.$axios.put(`/admin/users/${this.userIdChangePass}`, payload);
                    this.dialogVisibleInstant = false;
                    this.$message({
                        message: 'Update success.',
                        type: 'success',
                    });
                } catch ($e) {
                    this.$message({
                        message: 'Update error.',
                        type: 'error',
                    });
                }
            },

            openChangePass(id) {
                this.dialogVisibleInstant = true;
                this.userIdChangePass = id;
            },
        },
    };
</script>
