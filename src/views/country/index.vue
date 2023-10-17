
<script lang="ts" setup>
import emitter from '../../plugins/emitter';
import { global } from '../../store/global.ts'
import axios from '../../api/axios';
const {openLoading , openSnackbar } = global()
const openDelete = ref<boolean>(false)
const openEdit = ref<boolean>(false)
const openAdd = ref<boolean>(false)
const data = ref<Array<object>>([])
const dataZoon = ref<Array<object>>([])
const zoonId = ref<any>(null)
const objectForEdDe=ref<object>()
// functions api 
function GetAllZoon() {
    openLoading(true)
    axios.get(`Zoons/GetAll`).then((res) => {
        dataZoon.value = res.data.result.data
        zoonId.value = dataZoon.value[0].id
        getAllCountry(zoonId.value)
    }).finally(() => {
        openLoading(false)
        
    })
}
function getAllCountry(id:any) {
    openLoading(true)
    axios.get(`Zoons/GetAll?Id=${id}`).then((res) => {
        data.value = res.data.result.data[0].cities
    }).finally(() => {
        openLoading(false)
        
    })
}
function deleteCountry() {
    openDelete.value = false;
    openLoading(true)
    axios.delete(`Cities/Delete/${objectForEdDe.value.city.id}`).then((res) => {
        if (res.status >= 200 && res.status < 300) {
            openSnackbar('تم الحذف بنجاح' ,true , 'green')
        }
        getAllCountry(zoonId.value)
    })
}

watch(() => zoonId.value, () => [
    getAllCountry(zoonId.value)
])
emitter.on('openDelete', (value:object) => {
    openDelete.value = true
    objectForEdDe.value =value
})
emitter.on('openEdit', (value:object) => {
    openEdit.value = true
    objectForEdDe.value =value
})
emitter.on('reloadAddCountry', () => {
    openDelete.value = false;
    openEdit.value = false;
    openAdd.value = false;
    getAllCountry()
})
emitter.on('closeUse', () => {
    openDelete.value = false;
    openEdit.value = false;
    openAdd.value = false;
})
onMounted(() => {
    GetAllZoon()
})
</script>
<template>
    <v-container fluid>
    <div class="mb-10">
      <topUser />
    </div>
    <div class="mb-5 mx-4">
      <p>{{ $t("Country_Title") }}</p>
    </div>
      <div class="mt-5 mx-5 d-flex align-center">
        <div class="w-50">
          <v-select class="search "  label="المنطقة" v-model="zoonId" :items="dataZoon" item-value="id" item-title="name" ></v-select>

        </div>
          <v-btn class="bg-ColorBlue rounded-lg mx-4" :elevation="0" @click="openAdd = true" >{{ $t('AddAll') }}</v-btn>
      </div>
      <div class="mt-4">
        <tableCountry :items="data" />
      </div>
          <v-dialog v-model="openDelete" width="500" >
            <ConfDialog MainParag="Delete_Message"  @yes="deleteCountry()" :NameParag="objectForEdDe.name" SubParag="Sub_Delete_Message_Country" />
        </v-dialog>
        <v-dialog v-model="openEdit" width="500">
            <editCountry :item="objectForEdDe" />
        </v-dialog>
        <v-dialog v-model="openAdd" width="500">
            <addNewCountry/>
        </v-dialog>
    </v-container>
</template>

<style lang="scss" scoped>

</style>