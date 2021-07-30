<template>
    <div>
        <el-table :data="dataTable" class="w-full">
            <el-table-column
                fixed
                type="index"
            />
            <el-table-column
                fixed
                prop="name"
                label="Name"
                width="150"
            />
            <el-table-column prop="phone" label="Số điện thoại">
                <template slot-scope="scope">
                    <span>{{ scope.row.phone }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="email" label="Email">
                <template slot-scope="scope">
                    <span>{{ scope.row.email }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="gender" label="Giới tính">
                <template slot-scope="scope">
                    <span>{{ gender(scope.row.gender) }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="Trạng thái">
                <template slot-scope="scope">
                    <span>{{ status(scope.row.status) }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Created At">
                <template slot-scope="scope">
                    <span>{{ scope.row.createdAt | formatDate }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Operations" fixed="right" width="220">
                <template slot-scope="scope">
                    <el-button icon="el-icon-edit" @click="$router.push(`/admin/staff/${scope.row.id}/edit`)" />
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
    import { statusUser, checkGender } from '~/utils/configData';
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
            const dataTable = cloneDeep(this.data);
            return {
                dataTable,
                dialogVisibleInstant: false,
                userIdChangePass: -1,
            };
        },

        computed: {
            ...mapState('admin/user', ['user']),
        },

        watch: {
            data() {
                this.dataTable = cloneDeep(this.data);
            },
        },

        methods: {
            formatPrice(value) {
                const val = (value / 1).toFixed(0).replace('.', ',');
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
            },
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
            status(status) {
                return statusUser(status);
            },
            gender(gender) {
                return checkGender(gender);
            },
        },
    };
</script>
