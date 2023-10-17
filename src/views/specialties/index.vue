
<script lang="ts" setup>
import emitter from '../../plugins/emitter';
import axios from '../../api/axios.ts'
import { global } from '../../store/global';
const {openLoading , openSnackbar} = global()

const openDelete = ref<boolean>(false)
const openEdit = ref<boolean>(false)
const openAdd = ref<boolean>(false)
const data = ref<Array<object>>([])
const dataForEdit = ref<object>({})
const filters = ref<object>({
   page: 1,
   sizePage: 2,
   totalPages:1,
})

const closeFilter = ref<boolean>(false)
function getAllData() {
    openLoading(true)
    axios.get(`Specialties/GetAll?PageIndex=${filters.value.page}&PageSize=${filters.value.sizePage}`).then((res) => {
        data.value = res.data.result.data
      filters.value.totalPages =Math.ceil( res.data.result.count / filters.value.sizePage);
    }).finally(() => {
        openLoading(false)
    })
}
function deleData() {
    openDelete.value= false
    openLoading(true)
    axios.delete(`Specialties/Delete/${dataForEdit.value.id}`).then((res) => {
        openSnackbar('تمت الحذف بنجاح', true, 'green')
        getAllData()
    }).finally(() => {
        
    openLoading(false)
    })
}
function getFilters(dataTwo) {
   filter.value = false
   openLoading(true)
   axios.get(`Specialties/GetAll?PageIndex=${filters.value.page}&PageSize=${100}`, {
       params: {
        SpecialtyType:dataTwo.SpecialtyType
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
emitter.on('openDeleteSpeci',(value: object)  => {
    openDelete.value = true
    dataForEdit.value = value
})
emitter.on('openEditSpeci', (value: object) => {
    openEdit.value = true
    dataForEdit.value = value
})
emitter.on('closeUse', () => {
    openDelete.value = false;
    openEdit.value = false;
    openAdd.value = false;
})
emitter.on('reloadSpecial', () => {
    
    openDelete.value = false;
    openEdit.value = false;
    openAdd.value = false;
    getAllData()
    
})
// funcitons paginations
function pre(number:number):void {
   filters.value.page -= number
   getAllData()
}
function inc(number:number):void {
   filters.value.page += number
   getAllData()
}
onMounted(() => {
    getAllData()
})
const search = ref<string>("")
const filter = ref<boolean>(false)
watch(() => search.value, () => {
   if (search.value.length !== 0) {
      axios.get(`Specialties/GetAll?PageIndex=1&PageSize=100&search=${search.value}`).then((res) => {
         data.value = res.data.result.data
      })
   } else {
      getAllData()
   }
})
</script>
<template>
    <v-container fluid>
     <div class="mb-10">
               <topUser :showFilter="true"  :showSearchFilter="true"  :clseFlter="closeFilter" @Cls-Filter="{getAllData();closeFilter = false}" @V-Model="(e)=>search = e " @Open-Filter="filter = true"  />
        </div> 
    <div class="mb-5 mx-4">
      <p>{{ $t("Specilites_Title") }}</p>
    </div>
      <div class="mt-5 mx-5">
          <v-btn class="bg-ColorBlue rounded-lg" :elevation="0" @click="openAdd = true" >{{ $t('AddAll') }}</v-btn>
      </div>
      <div class="mt-4">
        <tableSpecialites :items="data" />
      </div>
      <div class="w-100 " 
        v-if="data.length !==0">
            <pagination :page="filters.page" :sizePage="filters.sizePage" :totalPages="filters.totalPages" @pre="pre(1)" @preTwo="pre(2)" @preOne="pre(1)" @incOne="inc(1)" @incTwo="inc(2)" @inc="inc(1)" />
            <!-- <v-select ></v-select> -->
        </div>
          <v-dialog v-model="openDelete" width="500" >
            <ConfDialog @yes="deleData()" MainParag="Delete_Message"  :NameParag="dataForEdit.name" SubParag="Sub_Delete_Message_Section" />
        </v-dialog>
        <v-dialog v-model="openEdit" width="500">
            <editSpecialites  :item="dataForEdit" />
        </v-dialog>
        <v-dialog v-model="openAdd" width="500">
            <addSpecialites/>
        </v-dialog>
        <v-dialog v-model="filter" width="1024">
         <fitersSpeci  @CloseD="filter=false"  @Filters="(e)=>{getFilters(e);closeFilter = true }" />
        </v-dialog>
    </v-container>
</template>

<style lang="scss" scoped>

</style>