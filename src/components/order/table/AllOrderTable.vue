<script lang="ts" setup>
import { useRouter } from 'vue-router';
import {global} from '../../../store/global.ts'
import moment from 'moment';
import { storeToRefs } from 'pinia';
// const { OrderState } = storeToRefs(global())

const {selectOrderState} = global()
interface prop {
  items: Array,
}
const props = defineProps<prop>()
const router = useRouter()

</script>
<template>
  <div class="tableAll " :class="items.length !==0?'':'hidden'">
     <div v-if="items.length !==0" class="rounded-lg pa-5 headData d-flex  itemss">
      <!-- <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        #
      </p> -->
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("From") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("To") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Total_Count") }}
      </p
      ><p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("PriceDiscoutn") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Navbar_Delegates") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Country") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Pay") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Date") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Total") }}
      </p>
      
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Status_pharmcy") }}
      </p>
      <!-- <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t('Edit_All') }}
      </p> -->
    </div>

    <div v-if="items.length !==0" class=" rounded-lg   bodyData"> 
        <div v-for="item in props.items " :key="item"  class="bg-ColorGray mt-2 pa-5 rounded-xl d-flex align-center  itemss  cursPointer"   @click="router.push({name:'showOrder',params:{id:item.id}})" >
      <!-- <p class="text-16 font-weight-bold text-black  w-100 text-start">
        #
      </p> -->
      <p class="text-16 font-weight-bold text-black  w-100 text-start">
        {{ $t("From") }}
      </p>
      <p class="text-16 font-weight-bold text-black  w-100 text-start">
        {{ $t("To") }}
      </p>
      <p class="text-16 font-weight-bold text-black  w-100 text-start">
       {{item.total}}دع
      </p>
       <p class="text-16 font-weight-bold text-black  w-100 text-start">
       {{ item.totalAfterDiscount }}دع
      </p>
      <p class="text-16 font-weight-bold text-black  w-100 text-start">
        {{ $t("Navbar_Delegates") }}
      </p>
      <p class="text-16 font-weight-bold text-black  w-100 text-start">
        {{ item.pharmacy.zoon.name }}
      </p>
      <p class="text-16 font-weight-bold text-black  w-100 text-start">
        {{ item.cash ?'نقدا':"اونلاين" }}
      </p>
      <p class="text-16 font-weight-bold text-black  w-100 text-start">
      {{moment(item.createdAt).format("L")}}
      </p>
      <p class="text-16 font-weight-bold text-black  w-100 text-start">
        {{ item.items.length }}
      </p>
     <div class="text-16 font-weight-bold text-black  w-100 text-start">
      <p class=" w-50  statusOrder" >
        <icon class="icon" icon ="ph:dot-outline-fill" :class="`text-${selectOrderState(item.orderStatus ,true)}`" width="30"/>
        {{ selectOrderState(item.orderStatus ,false) }}
      </p>

     </div>
        </div>

    </div>
    <div v-if="items.length ===0" class="w-100 h-100  d-flex flex-column justify-center align-center pa-10" >
      <icon icon="material-symbols:pill-outline" class="text-ColorTextGray" width="50" />
      <p class="text-20 text-ColorTextGray">لا توجد بيانات</p>
    </div>
  </div>
</template>

<style lang="scss">
.hidden{
  &::-webkit-scrollbar{
    display: none
  }
}
.statusOrder{
  position: relative;
  .icon{
    position: absolute;
    top:-10px;

    left: -10px;
  }
}
</style>
