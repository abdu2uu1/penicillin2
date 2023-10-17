<script lang="ts" setup>
const a = ref(0)
interface prop {
    Status?:number ,
    Count?:number,
    Text?:string,
}
const props = defineProps<prop>()
</script>
<template>
    <div class="bg-ColorGray rounded-xl pa-2  d-flex alin-center ">
        <div class=" pa-1 rounded-xl cardIcon" :class="props.Status === 0 ? 'ColorBgCardBlue': props.Status === 1 ? 'ColorBgCardGreen':'ColorBgCardRed'" >
            <img v-if="props.Status === 0" src="../../../assets/image/home/cardHomePharmcy.svg" />
            <img v-else-if="props.Status === 1"  src="../../../assets/image/home/cardHomePill.svg" />
            <img  v-else src="../../../assets/image/home/cardHomeOrder.svg" />
        </div>
        <div class="mx-3">
            <p  class="font-weight-bold  text-40" >{{props.Count}}</p>
            <p class="text-ColorTextGray text-20 ">{{$t(props.Text)}}</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.cardIcon{
    width: 6rem;
    height: 6rem;
    display:flex ; 
    align-items: center;
    justify-content: center
}
</style>