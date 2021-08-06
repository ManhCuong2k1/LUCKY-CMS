<template>
    <div>
        <el-table :data="changeData" class="w-full">
            <el-table-column prop="name" label="Mã vé" width="80">
                <template slot-scope="scope">
                    <span>{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="city" label="Khách hàng" width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.user.phone }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="phone" label="Thời gian đặt" width="220">
                <template slot-scope="scope">
                    <span>{{ formatDate(scope.row.createdAt) }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="transporter" label="Loại vé" width="220">
                <template slot-scope="scope">
                    <span>{{ checkType(scope.row.type) }} {{ checkLevel(scope.row.orders[0].orderDetail) }} </span>
                </template>
            </el-table-column>
            <el-table-column prop="total" label="Nội dung" width="350">
                <template slot-scope="scope">
                    <p v-for="orderDetail in scope.row.orders[0].orderDetail.data" :key="orderDetail">
                        {{ orderDetail }}
                    </p>
                </template>
            </el-table-column>
            <el-table-column prop="total" label="Số kỳ" width="100">
                <template slot-scope="scope">
                    <span>{{ scope.row.preriod }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="orderStatus" label="Trạng thái" width="240">
                <template slot-scope="scope">
                    <div style="height: 40px; line-height:40px;">
                        <span :class="scope.row.orderStatus == 'printed' ? 'active-order' : scope.row.resultDetail == 'TRÚNG GIẢI' ? 'active-winned': ''">
                            {{ checkStatus(scope.row.orderStatus, scope.row.resultDetail) }}
                        </span>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="Công cụ" width="200">
                <template slot-scope="scope">
                    <router-link v-if="scope.row.orderStatus == 'delay'" :to="`/admin/order-lucky/${scope.row.id}/edit`">
                        <el-button
                            icon="el-icon-camera-solid"
                            class="button-upload"
                        >
                            Up ảnh vé
                        </el-button>
                    </router-link>
                    <div v-if="scope.row.orderStatus == 'printed'" class="flex">
                        <el-button
                            icon="el-icon-view"
                            class="button-view"
                            @click="viewImage(scope.row.id)"
                        />
                        <router-link :to="`/admin/order-lucky/${scope.row.id}/edit`">
                            <el-button
                                icon="el-icon-camera-solid"
                            />
                        </router-link>
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <div v-if="showImages" class="show-images overflow-y-scroll">
            <div class=" cursor-pointer sticky top-0 bg-white z-50" @click="close()">
                <i class="el-icon-close absolute right-2 top-2" />
                <div>
                    <h4 class="text-2xl pt-4 pb-4 ml-4 mr-4 border-b">
                        Images
                    </h4>
                </div>
            </div>
            <div class="flex flex-wrap">
                <span class="w-1/2 p-4 ">
                    <img :src="toImage(image.data.beforeImage, 'full')" class="w-22 h-22">
                </span>
                <span class="w-1/2 p-4 ">
                    <img :src="toImage(image.data.afterImage, 'full')" class="w-full">
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import cloneDeep from 'lodash/cloneDeep';
    import { mapState } from 'vuex';
    import { image as toImage } from '~/utils/url';
    import { checkType, checkStatus, checkName } from '~/utils/configData';
    import { formatDate } from '~/utils/formatDate';

    const modelForm = [{
        id: '',
        createdAt: '',
        type: '',
        user: {
            phone: '',
        },
        orderStatus: '',
        orders: [
            {
                orderDetail: {
                    childgame: '',
                    data: '',
                    level: '',
                },

            },
        ],
    }];
    const dataImages = {
        data: {
            beforeImage: '',
            afterImage: '',
        },
    };

    export default {
        props: {
            dataOrder: {
                type: Array,
                required: true,
            },
        },
        data() {
            const dataForm = this.dataOrder ? cloneDeep(this.dataOrder) : cloneDeep(modelForm);
            const image = this.images ? cloneDeep(this.images) : dataImages;
            return {
                image,
                dataForm,
                showImages: false,
            };
        },
        computed: {
            ...mapState('admin/images', ['images']),
            changeData() {
                const arr = [];
                const arrOrder = [];
                if (this.dataForm !== undefined) {
                    this.dataForm.forEach((element) => {
                        arr.push(JSON.parse(element.orders[0].orderDetail));
                    });
                    arr.forEach((element) => {
                        arrOrder.push(element.data);
                    });
                    arrOrder.forEach((element, index) => {
                        const str = [];
                        if (arr[index].childgame === 'chanle_lonnho') {
                            element.forEach((s) => {
                                const string = checkName(s.select);
                                str.push(`${s.price / 1000}K - ${string}`);
                            });
                        } else {
                            element.forEach((s) => {
                                let string = '';
                                s.number.forEach((e) => {
                                    string += `${e} `;
                                });
                                str.push(`${s.price / 1000}K - ${string}`);
                            });
                        }
                        this.dataForm[index].orders[0].orderDetail = JSON.parse(this.dataForm[index].orders[0].orderDetail);
                        this.dataForm[index].orders[0].orderDetail.data = str;
                    });
                    return this.dataForm;
                }
                return [];
            },
        },
        watch: {
            dataOrder() {
                this.dataForm = cloneDeep(this.dataOrder);
            },
        },
        methods: {
            toImage,
            formatDate,
            checkType,
            checkStatus,
            close() {
                this.showImages = false;
            },
            async viewImage(id) {
                this.showImages = true;
                await this.$store.dispatch('admin/images/fetch', id);
                if (this.images.data !== null) {
                    this.image = this.images;
                }
            },
            checkLevel(dataDetail) {
                let numberLevel = '';
                switch (dataDetail.childgame) {
                    case 'chanle_lonnho':
                        numberLevel = '( Chẵn lẻ )';
                        break;
                    case 'basic':
                        if (dataDetail.level !== undefined) {
                            numberLevel = `( bậc ${dataDetail.level})`;
                        } else {
                            numberLevel = '';
                        }
                        break;
                    default:
                        break;
                }

                return numberLevel;
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
.active-winned {
    color: #D40B02;
    background: #fbd41f;
    /* font-weight: 600; */
    border-radius: 27px;
    padding: 8px 15px;
}
.button-view {
    margin-right: 5px;
    background-color: #67C23A;
    color: white;
}
.el-table td, .el-table th {
    vertical-align: text-top;
}
.show-images {
    box-shadow: 0px 0px 10px 0px grey;
    position: absolute;
    width: 50rem;
    height: 40rem;
    top: 8rem;
    left: 26%;
    background: white;
    border-radius: 6px;
    transition: 0.3s ease all;
}
.show-images::-webkit-scrollbar {
width: 4px;
background-color: #F5F5F5;
}

.show-images::-webkit-scrollbar-thumb {
background-color: #000000;
border: 2px solid #555555;
}
</style>
