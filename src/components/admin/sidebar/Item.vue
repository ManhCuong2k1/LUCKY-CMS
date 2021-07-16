<template functional>
    <nuxt-link :to="props.link" class="menu-active">
        <el-menu-item :index="props.link">
            <i v-if="props.icon" :class="props.icon" class="" />
            <template #title>
                <span><slot /></span>
            </template>
        </el-menu-item>
    </nuxt-link>
</template>

<script>
    export default {
        props: {
            link: String,
            icon: String,
        },
    };
</script>

<style>
.menu-active li:hover {
    color: black !important;
}
</style>
