<script lang="ts" setup>
import axios from '../../api/axios.ts'
import { global } from '../../store/global';
const {openLoading} = global()
const data = ref<Array<object>>([])
const filters = ref<object>({
   page: 1,
   sizePage: 2,
   totalPages:1,
})

const closeFilter = ref<boolean>(false)
function getAllOrder() {
  openLoading(true)
  axios.get(`Orders/Get?PageIndex=${filters.value.page}&PageSize=${filters.value.sizePage}`).then((res) => {
    data.value = res.data.result.data
    filters.value.totalPages = Math.ceil(res.data.result.count / filters.value.sizePage);
    console.log(data.value)
  }).finally(() => {
    openLoading(false)
  })
}
function getFilters(dataTwo) {
   filter.value = false
   openLoading(true)
   axios.get(`Orders/Get?PageIndex=${filters.value.page}&PageSize=${100}`, {
      params: {
       No: dataTwo.No,
       PharmacyId: dataTwo.PharmacyId,
       PharmacyType: dataTwo.PharmacyType,
       OrderStatus: dataTwo.OrderStatus,
       FromDate: dataTwo.FromDate,
       FromExpDate: dataTwo.FromExpDate,
       ToDate: dataTwo.ToDate,
       Cash: dataTwo.Cash,
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
   getAllOrder()
}
function inc(number:number):void {
   filters.value.page += number
   getAllOrder()
}
onMounted(() => {
  getAllOrder()
})
const search = ref<string>("")
const filter = ref<boolean>(false)
watch(() => search.value, () => {
   if (search.value.length !== 0) {
      axios.get(`/Products/Get??PageIndex=1&PageSize=100&search=${search.value}`).then((res) => {
         data.value = res.data.result.data
      })
   } else {
      getAllOrder()
   }
})
</script>
<template>
  <v-container fluid>
    <div class="mb-10">
        <topUser :showFilter="true" :showSearchFilter="true" :clseFlter="closeFilter" @Cls-Filter="{getAllOrder();closeFilter = false}" @V-Model="(e)=>search = e " @Open-Filter="filter = true"  />
    </div> 
    <div class="mb-5 mx-4">
      <p>{{ $t("Order_Title") }}</p>
    </div>
    <div class=" pa-5 rounded-xl">
        <AllOrderTable :items="data" />
    </div>
     <div class="w-100 " v-if="data.length !==0">
            <pagination :page="filters.page" :sizePage="filters.sizePage" :totalPages="filters.totalPages" @pre="pre(1)" @preTwo="pre(2)" @preOne="pre(1)" @incOne="inc(1)" @incTwo="inc(2)" @inc="inc(1)" />
           
        </div>
        <v-dialog v-model="filter" width="1024">
         <filtersOrder  @CloseD="filter=false"  @Filters="(e)=>{getFilters(e);closeFilter = true }" />
        </v-dialog>
  </v-container>
</template>

<style lang="scss" scoped></style>
