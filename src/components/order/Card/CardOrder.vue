<script lang="ts" setup>

interface props {
    item:object,
}
const  props =defineProps<props>()
</script>
<template>
    <div class="bg-ColorGray pa-5 px-3 rounded-xl">
        <div class="d-flex flex-column align-center w-100">
            <div class="ContainerImmgge ">
                <img src="../../../assets/image/TestMedical.png"  class="rounded-lg" />
            </div>
            <div class="mt-4 text-center">
                <h4>{{ props.item.productTradeName }}</h4>
                <p class="text-ColorTextGray text-12 mt-1"> productScientificName</p>
            </div>
        </div>
        <div class="mt-2 d-flex justify-space-between">
            <div class="text-center">
                <p class="text-ColorTextGray ">{{ $t('Total') }}</p>
                <p class="text-black">{{ props.item.qty }}</p>
            </div>
            <div class="text-center">
                <p class="text-ColorTextGray ">{{ $t('Single_Price') }}</p>
                <p class="text-black">{{ props.item.price }}دع</p>
            </div>
            <div class="text-center">
                <p class="text-ColorTextGray ">{{ $t('Total_Count') }}</p>
                <p class="text-black">{{ props.item.total }}دع</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.ContainerImmgge{
    width:100px;
    height: 100px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover
    }
}
p{
    font-size: 12px
}
</style>