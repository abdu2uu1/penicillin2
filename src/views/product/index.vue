<script lang="ts" setup>
import axios from '../../api/axios.ts';
import { global } from '../../store/global';
const { openLoading } = global()
const filters = ref<object>({
   page: 1,
   sizePage: 2,
   totalPages:1,
})
const data = ref<Array<objec>>([])
const closeFilter = ref<boolean>(false)
function getAllProduct() {
  openLoading(true)
  axios.get(`/Products/Get?PageIndex=${filters.value.page}&PageSize=${filters.value.sizePage}`).then((res) => {
    data.value = res.data.result.data
    filters.value.totalPages = Math.ceil(res.data.result.count / filters.value.sizePage);
  }).finally(() => {
    openLoading(false)
  })
}
function getFilters(dataTwo) {
   filter.value = false
   openLoading(true)
   axios.get(`/Products/Get?PageIndex=${filters.value.page}&PageSize=${100}`, {
      params: {
       SpecialtyId: dataTwo.SpecialtyId,
       PharmacyId: dataTwo.PharmacyId,
       DosageForm: dataTwo.DosageForm,
       SaleCash: dataTwo.SaleCash,
       Accepted: dataTwo.Accepted,
       FromExpDate: dataTwo.FromExpDate,
       ToExpDate: dataTwo.ToExpDate,
       FromPrice: dataTwo.FromPrice,
       ToPrice: dataTwo.ToPrice,
      }
    }).then((res) => {
      
      data.value = res.data.result.data
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
   getAllProduct()
}
function inc(number:number):void {
   filters.value.page += number
   getAllProduct()
}
onMounted(() => {
  getAllProduct()
})
const search = ref<string>("")
const filter = ref<boolean>(false)
watch(() => search.value, () => {
   if (search.value.length !== 0) {
      axios.get(`/Products/Get?PageIndex=1&PageSize=100&search=${search.value}`).then((res) => {
         data.value = res.data.result.data
      })
   } else {
      getAllProduct()
   }
})
</script>
<template>
  <v-container fluid>
    <div class="mb-10">
               <topUser :showSearchFilter="true" :showFilter="true"   :clseFlter="closeFilter" @Cls-Filter="{getAllProduct();closeFilter = false}" @V-Model="(e)=>search = e " @Open-Filter="filter = true"  />
        </div> 
    <div class="mb-5 mx-4">
      <p>{{ $t("Product_Title") }}</p>
    </div>
    <div class=" pa-5 rounded-xl">
        <AllPillTable :item="data"   />
    </div>
    <div class="w-100 ">
            <pagination :page="filters.page" :sizePage="filters.sizePage" :totalPages="filters.totalPages" @pre="pre(1)" @preTwo="pre(2)" @preOne="pre(1)" @incOne="inc(1)" @incTwo="inc(2)" @inc="inc(1)" />
            <!-- <v-select ></v-select> -->
        </div>
         <v-dialog v-model="filter" width="1024">
         <productFilters  @CloseD="filter=false"  @Filters="(e)=>{getFilters(e);closeFilter = true }" />
        </v-dialog>
  </v-container>
</template>

<style lang="scss" scoped></style>
