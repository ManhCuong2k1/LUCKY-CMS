<template>
    <div>
        <el-col :span="12">
            <el-form
                ref="pointofsaleForm"
                :model="pointofsaleForm"
                label-width="150px"
                class="w-full"
                :rules="rules"
            >
                <el-form-item label="Tên chủ cửa hàng" prop="ownerName">
                    <el-input v-model="pointofsaleForm.ownerName" placeholder="Tên chủ cửa hàng" />
                </el-form-item>
                <el-form-item label="Tên cửa hàng" prop="name">
                    <el-input v-model="pointofsaleForm.name" placeholder="Tên cửa hàng" />
                </el-form-item>
                <el-form-item label="Điện thoại" prop="phone">
                    <el-input v-model="pointofsaleForm.phone" placeholder="Điện thoại" />
                </el-form-item>
                <el-form-item label="Email" prop="email">
                    <el-input v-model="pointofsaleForm.email" placeholder="Email" />
                </el-form-item>
                <el-form-item label="Địa chỉ" prop="address">
                    <el-input v-model="pointofsaleForm.address" placeholder="Địa chỉ" />
                </el-form-item>
                <el-form-item label="Tỉnh\Thành phố" prop="CityId">
                    <el-select
                        v-model="pointofsaleForm.CityId"
                        placeholder="Thành phố"
                        @change="updateSelectCity"
                    >
                        <el-option
                            v-for="item in optionCities"
                            :key="item.slug"
                            :label="item.label"
                            :value="item.slug"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item label="Quận\Huyện" prop="DistrictId">
                    <el-select
                        v-model="pointofsaleForm.DistrictId"
                        placeholder="Quận huyện"
                    >
                        <el-option
                            v-for="item in optionDistricts"
                            :key="item.slug"
                            :label="item.label"
                            :value="item.slug"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item v-if="userLoged.type == 'admin'" label="Nhà phân phối" prop="AdminId">
                    <el-select
                        v-model="pointofsaleForm.AdminId"
                        placeholder="Nhà phân phối"
                        filterable
                        remote
                        :remote-method="remoteDistributor"
                        :loading="loading"
                    >
                        <el-option
                            v-for="item in optionDistributors"
                            :key="item.slug"
                            :label="item.label"
                            :value="item.slug"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item v-if="userLoged.type == 'admin'">
                    <el-button v-if="pointofsaleForm.status != 'confirm'" type="success" @click="confirmPOS()">
                        Duyệt điểm bán
                    </el-button>
                    <el-button type="primary" @click="submitForm('pointofsaleForm')">
                        Lưu
                    </el-button>
                    <el-button @click="resetForm('pointofsaleForm')">
                        Làm mới
                    </el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import cloneDeep from 'lodash/cloneDeep';

    const modelForm = {
        name: '',
        ownerName: '',
        phone: '',
        email: '',
        address: '',
        CityId: '',
        DistrictId: '',
        AdminId: '',
    };

    export default {
        components: {
        },
        props: {
            pointofsaleData: {
                type: Object,
                required: false,
            },
        },
        data() {
            const pointofsaleForm = this.pointofsaleData ? cloneDeep(this.pointofsaleData) : cloneDeep(modelForm);
            return {
                loading: false,
                pointofsaleForm,
                rules: {
                    name: [
                        { required: true, message: 'Vui lòng nhập tên', trigger: 'blur' },
                    ],
                    ownerName: [
                        { required: true, message: 'Vui lòng nhập tên đầy đủ', trigger: 'blur' },
                    ],
                    phone: [
                        { required: true, message: 'Vui lòng nhập số điện thoại', trigger: 'blur' },
                    ],
                    CityId: [
                        { required: true, message: 'Vui lòng nhập thành phố', trigger: 'blur' },
                    ],
                    DistrictId: [
                        { required: true, message: 'Vui lòng nhập quận/huyện', trigger: 'blur' },
                    ],
                    AdminId: [
                        { required: true, message: 'Vui lòng nhập nhà phân phối', trigger: 'blur' },
                    ],

                },
            };
        },
        computed: {
            ...mapState('admin/common', ['optionCities', 'optionDistricts', 'optionDistributors']),
            userLoged() {
                return this.$store.state.auth.user;
            },
        },
        async beforeMount() {
            await this.$store.dispatch('admin/common/searchCities');
            if (this.pointofsaleData != null) {
                await this.$store.dispatch('admin/common/searchDistrics', { cityId: this.pointofsaleData.CityId });
            }
        },
        methods: {
            async updateSelectCity(cityId) {
                if (cityId) {
                    await this.$store.dispatch('admin/common/searchDistrics', { cityId });
                }
            },
            submitForm(formName) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        this.$emit('submitForm', this.pointofsaleForm);
                    } else {
                        return false;
                    }
                });
            },
            confirmPOS() {
                this.$confirm('Bạn sẽ duyệt điểm bán này ?', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning',
                }).then(() => {
                    this.$emit('confirmPOS', this.pointofsaleForm.id);
                    this.$message({
                        type: 'success',
                        message: 'Thành công',
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: 'Đã hủy',
                    });
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            async remoteDistributor(query) {
                this.loading = true;
                await this.$store.dispatch('admin/common/searchDistributors', { query });
                this.loading = false;
            },
        },
    };
</script>
