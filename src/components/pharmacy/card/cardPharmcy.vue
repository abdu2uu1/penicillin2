<script setup>

</script>
<template>
    <div class="bg-ColorGray pa-5 px-3 rounded-xl">
        <div class="d-flex flex-column align-center w-100">
            <div class="ContainerImmgge ">
                <img src="../../../assets/image/TestMedical.png"  class="rounded-lg" />
            </div>
            <div class="mt-4 text-center">
                <h4>براستيمول</h4>
                <p class="text-ColorTextGray text-12 mt-1">نسيم الحياة</p>
            </div>
        </div>
        <div class="mt-2 d-flex justify-space-evenly">
            <div class="text-center">
                <p class="text-ColorTextGray ">{{ $t('Total') }}</p>
                <p class="text-black">9</p>
            </div>
            <div class="text-center">
                <p class="text-ColorTextGray ">{{ $t('Total_Count') }}</p>
                <p class="text-black">9</p>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.ContainerImmgge{
    width:70px;
    height: 70px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover
    }
}
</style>