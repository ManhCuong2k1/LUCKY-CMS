<template>
    <div>
        <el-table :data="changeData" class="w-full">
            <el-table-column prop="name" label="Mã vé" width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="city" label="Khách hàng">
                <template slot-scope="scope">
                    <span>{{ scope.row }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="phone" label="Thời gian đặt">
                <template slot-scope="scope">
                    <span>{{ scope.row }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="transporter" label="Loại vé" width="200">
                <template slot-scope="scope">
                    <span>{{ scope.row }} </span>
                </template>
            </el-table-column>
            <el-table-column prop="total" label="Nội dung" width="300">
                <template slot-scope="scope">
                    <p>
                        {{ scope.row }}
                    </p>
                </template>
            </el-table-column>
            <el-table-column prop="total" label="Số kỳ">
                <template slot-scope="scope">
                    <span>{{ scope.row }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="orderStatus" label="Trạng thái">
                <template slot-scope="scope">
                    <div style="height: 40px; line-height:40px;">
                        <span :class="scope.row == 'printed' ? 'active-order' : ''">
                            {{ scope.row }}
                        </span>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
    };
</script>

<style>
</style>
