<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { global } from '../../../store/global';
import moment from 'moment'
const {baseUrl ,selectdosageForm} = global()
interface prop {
  item: array,
} 
// moment(item.insertDate).format("LL") :' '
const props = defineProps<prop>()
const router = useRouter()
</script>
<template>
   <div class="tableAll " :class="item.length !==0?'':'hidden'" >
     <div v-if="item.length !==0" class="rounded-lg pa-5 headData d-flex align-center itemss">
     
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Picture") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Name_subject") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Name_Techgno") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Name_Compnay") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Name_Masculine") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
     {{ $t("Shapge_Pharmcy") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Date_Expier") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
       {{ $t("Total") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Price") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
       {{ $t("DisCount") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
       {{ $t("Total_Count") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Status_pharmcy") }}
      </p>
   
    </div>

    <div v-if="item.length !==0" class="  rounded-lg   bodyData">
        <div v-for="item in props.item " :key="item" :class="item.accepted?'bg-ColorGray':'bgColorRed'"  class=" itemss my-2 pa-5 rounded-xl d-flex align-center cursPointer " @click="router.push({name:'ShowPharmcyPill',params:{idTwo:item.id }})">
            
      <div class="text-16 font-weight-bold text-black  text-start w-100 ">
        <div class="imgTable">
          <img :src="baseUrl+item.pictureUrl" />
        </div>
      </div>
      <p class="text-16 font-weight-bold text-black  text-start w-100 ">
       {{ item.tradeName }}
      </p>
      <p class="text-16 font-weight-bold text-black  text-start w-100 ">
        {{ item.scientificName }}
      </p>
      <p class="text-16 font-weight-bold text-black  text-start w-100 ">
        {{ item.companyName }}
      </p>
      <p class="text-16 font-weight-bold text-black  text-start w-100 ">
        {{ item.storeName }}
      </p>
      <p class="text-16 font-weight-bold text-black  text-start w-100 ">
    {{ selectdosageForm(item.dosageForm) }}
      </p>
      <p class="text-16 font-weight-bold text-black  text-start w-100 ">
       {{ moment(item.expDate).format("L") }}
      </p>
      <p class="text-16 font-weight-bold text-black  text-start w-100 ">
       {{ item.qty }}
      </p>
      <p class="text-16 font-weight-bold text-black  text-start w-100 ">
         {{item.price}}دع
      </p>
      <p class="text-16 font-weight-bold text-black  text-start w-100 ">
        {{item.discount}}%
      </p>
      <p class="text-16 font-weight-bold text-black  text-start w-100 ">
        {{ item.price }}
      </p>
     <div class="w-100  ">
       <p class="text-16 font-weight-bold text-black  text-start statusOrder w-33 " >
            <icon class="icon" icon="ph:dot-outline-fill" :class=" item.accepted ?'text-green':'text-red'" width="30" />
        
        {{ item.accepted ?'موافق':"متوقف" }}
      </p>
          </div>
        </div>
    </div>
    <div v-if="item.length ===0" class="w-100 h-100  d-flex flex-column justify-center align-center pa-10" >
      <icon icon="material-symbols:pill-outline" class="text-ColorTextGray" width="50" />
      <p class="text-20 text-ColorTextGray">لا توجد بيانات</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.statusOrder {
  position: relative;
  .icon {
    position: absolute;
    top: -10px;

    left: -20px;
  }
}
.hidden{
  &::-webkit-scrollbar{
    display: none
  }
}
.imgTable{
  height: 30px;
  img{
    width: 50px ;
    height: 100%;
    object-fit: contain
  }
}
.pill{
  width:1500px !important;
}
</style>
