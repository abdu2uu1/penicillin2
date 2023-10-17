
<script lang="ts" setup>
import axios from '../../api/axios'
import { global } from '../../store/global';
import emitter from '../../plugins/emitter';

const { openLoading } = global()
const filters = ref<object>({
   page: 1,
   sizePage: 2,
   totalPages:1,
})
const Data = ref<Array<object>>([])
const closeFilter= ref<boolean>(false)
// api functions 
function getAllPharmcy() {
   openLoading(true)
   axios.get(`Pharmacies/Get?PageIndex=${filters.value.page}&PageSize=${filters.value.sizePage}&Activated=${false}`).then((res) => {
      
      Data.value = res.data.result.data
      filters.value.totalPages =Math.ceil( res.data.result.count / filters.value.sizePage);
   }).catch((err) => {
      console.log(err)
   }).finally(() => {
      openLoading(false)
   })
}
function getFilters(data) {
   filter.value = false
   openLoading(true)
   axios.get(`Pharmacies/Get?PageIndex=${filters.value.page}&PageSize=${filters.value.sizePage}&Activated=${false}`, {
      params: {
         SpecialtyId: data.SpecialtyId,
         Type: data.Type,
         Class: data.Class,
         ZoonId:data.ZoonId
      }
    }).then((res) => {
      
      Data.value = res.data.result.data
      filters.value.totalPages =Math.ceil( res.data.result.count / filters.value.sizePage);
   }).catch((err) => {
      console.log(err)
   }).finally(() => {
      openLoading(false)
   })
}
// funcitons paginations
function pre(number:number):void {
   filters.value.page -= number
   getAllPharmcy()
}
function inc(number:number):void {
   filters.value.page += number
   getAllPharmcy()
}
emitter.on('reloadPage',()=> {
   getAllPharmcy()
})
onMounted(() => {
   openLoading(true)
   getAllPharmcy()
})
const search = ref<string>("")
const filter = ref<boolean>(false)
watch(() => search.value, () => {
   if (search.value.length !== 0) {
      axios.get(`Pharmacies/Get?PageIndex=1&PageSize=100&search=${search.value}`).then((res) => {
         Data.value = res.data.result.data
      })
   } else {
      getAllPharmcy()
   }
})
</script>
<template>
     <div>
       <div class="mb-10">
            
               <topUser  :showSearchFilter="true" :showFilter="true" :clseFlter="closeFilter" @Cls-Filter="{getAllPharmcy();closeFilter = false}" @V-Model="(e)=>search = e " @Open-Filter="filter = true"  />
        </div>
      <div class="mb-5 mx-4">
         <p>{{ $t("Title_Stoped_pharmcy") }}</p>
      </div>
         <div  class=" mt-6 pa-3 rounded-xl ">
         <AllPharmacyTable :items="Data"  :edite="true" />
        </div>
        <div class="w-100 " v-if="Data.length !== 0">
            <pagination :page="filters.page" :sizePage="filters.sizePage" :totalPages="filters.totalPages" @pre="pre(1)" @preTwo="pre(2)" @preOne="pre(1)" @incOne="inc(1)" @incTwo="inc(2)" @inc="inc(1)" />
            <!-- <v-select ></v-select> -->
        </div>
         <v-dialog v-model="filter" width="1024">
         <FiltersPharmcyStoped  @CloseD="filter=false"  @Filters="(e)=>{getFilters(e);closeFilter = true }" />
        </v-dialog>
     </div>
</template>

<style lang="scss" scoped>

</style>