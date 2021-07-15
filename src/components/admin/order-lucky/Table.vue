<template>
    <el-table :data="dataOrder" class="w-full">
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
                <span>{{ scope.row.type }}</span>
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
                <span>{{ scope.row.orderStatus }}</span>
            </template>
        </el-table-column>
        <el-table-column label="Công cụ" width="170">
            <template slot-scope="scope">
                <nuxt-link :to="`/admin/order-lucky/${scope.row.id}/edit`">
                    <el-button
                        icon="el-icon-camera-solid"
                        class="button-upload"
                    >
                        Up ảnh vé
                    </el-button>
                </nuxt-link>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        props: {
            dataOrder: {
                type: Array,
                required: true,
            },
        },

        data() {
            return {
            };
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
</style>
