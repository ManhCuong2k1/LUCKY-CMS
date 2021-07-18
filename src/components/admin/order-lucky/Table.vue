<template>
    <el-table :data="changeData" class="w-full">
        <el-table-column prop="name" label="Mã vé" width="120">
            <template slot-scope="scope">
                <span>{{ scope.row.id }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="city" label="Khách hàng" width="180">
            <template slot-scope="scope">
                <span>{{ scope.row.user.phone }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="phone" label="Thời gian đặt">
            <template slot-scope="scope">
                <span>{{ scope.row.createdAt | formatDate }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="transporter" label="Loại vé" width="200">
            <template slot-scope="scope">
                <span>{{ type(scope.row.type) }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="total" label="Nội dung">
            <template slot-scope="scope">
                <p v-for="orderDetail in scope.row.orders.orderDetail" :key="orderDetail">
                    {{ orderDetail }}
                </p>
            </template>
        </el-table-column>
        <el-table-column prop="total" label="Số kỳ">
            <template slot-scope="scope">
                <span>{{ scope.row.orders.length }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="orderStatus" label="Trạng thái">
            <template slot-scope="scope">
                <div style="height: 40px; line-height:40px;">
                    <span :class="scope.row.orderStatus == 'printed' ? 'active-order' : ''">
                        {{ status(scope.row.orderStatus) }}
                    </span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="Công cụ" width="170">
            <template slot-scope="scope">
                <router-link v-if="scope.row.orderStatus == 'delay'" :to="`/admin/order-lucky/${scope.row.id}/edit`">
                    <el-button
                        icon="el-icon-camera-solid"
                        class="button-upload"
                    >
                        Up ảnh vé
                    </el-button>
                </router-link>
                <router-link v-else to="/">
                    <el-button
                        icon="el-icon-view"
                        class="button-view"
                    />
                </router-link>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';
    import { checkType, checkStatus } from '~/utils/configData';

    export default {
        props: {
            dataOrder: {
                type: Array,
                required: true,
            },
        },

        data() {
            const dataForm = cloneDeep(this.dataOrder);
            return {
                dataForm,
            };
        },
        computed: {
            changeData() {
                const arr = [];
                const arrOrder = [];
                this.dataForm.forEach((element) => {
                    arr.push(JSON.parse(element.orders[0].orderDetail));
                });
                arr.forEach((element) => {
                    arrOrder.push(element.data);
                });
                arrOrder.forEach((element, index) => {
                    const str = [];
                    if (arr[index].childgame === 'basic') {
                        element.forEach((s) => {
                            const string = `${s.number[0]} ${s.number[1]}`;
                            str.push(`${s.price / 1000}K - ${string}`);
                        });
                        this.dataForm[index].orders.orderDetail = str;
                    } else if (arr[index].childgame === 'chanle') {
                        element.forEach((s) => {
                            const string = `${s.price / 1000}K - ${s.select}`;
                            str.push(string);
                        });
                        this.dataForm[index].orders.orderDetail = str;
                    }
                });
                return this.dataForm;
            },
        },
        methods: {
            type(type) {
                return checkType(type);
            },
            status(status) {
                return checkStatus(status);
            },
        },
    };
</script>

<style>
.button-upload {
    color: white;
    background: linear-gradient(180deg, #720000 9%, #D40B02 82%);
}
.button-upload:hover {
    color: white;
    background: linear-gradient(180deg, #720000 18%, #D40B02 70%);
}
.button-upload:active {
    color: white;
    background: linear-gradient(180deg, #720000 18%, #D40B02 70%);
}
.active-order {
    background-color: #E1F3D8;
    border-radius: 27px;
    padding: 8px;
}
.button-view {
    background-color: #67C23A;
    color: white;
}
.el-table td, .el-table th {
    vertical-align: text-top;
}
</style>
