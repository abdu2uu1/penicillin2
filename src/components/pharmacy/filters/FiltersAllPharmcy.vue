<script lang="ts" setup>
import axios from '../../../api/axios.ts'
import { global } from '../../../store/global.ts'
import { storeToRefs } from 'pinia';
const {AllClass ,pharmacyType} = storeToRefs(global())
const zoons  = ref<Array<object>>([])
const special  = ref<Array<object>>([])
const data = ref<object>({})
function getAll() {
    axios.get('Zoons/GetAll?PageIndex=1&PageSize=50').then((res) => {
        zoons.value= res.data.result.data
    })
       axios.get('/Specialties/GetAll?PageIndex=1&PageSize=100').then((res) => {
        special.value= res.data.result.data
    })
}

onMounted(() => {
    getAll()
})
</script>
<template>
    <div class="bg-white rounded-xl pa-5 filters">

         <div class="bg-white rounded-xl pa-5  editPharmcy">
        <Icon  icon="ph:x-bold"   width="20" class="cursPointer" @click="$emit('CloseD')" />
        <div class="     mt-5 ">
            <v-form>
                <v-row>
                    <v-col cols="12" md="6" >
                        <v-select label="المنطقة" :items="zoons" item-value="id" item-title="name"  v-model="data.ZoonId" ></v-select>
                    </v-col>
                    <v-col cols="12" md="6" >
                        <v-select label="الفئة" :items="AllClass" item-value="value" item-title="descAr"  v-model="data.Class" ></v-select>
                        
                    </v-col>
                    <v-col cols="12" md="6" >
                        <v-select label="نوع الصيديلة " :items="pharmacyType" item-value="value" item-title="descAr"  v-model="data.Type"></v-select>
                    </v-col>
                    <v-col cols="12" md="6" >
                        <v-select label="حالة الصيدلية" :items="[{name:'نشط' , value:true},{name:'غير نشط' , value:false}]"  item-value="value" item-title="name"  v-model="data.Activated" ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-select label="التخصص" :items="special" item-value="id" item-title="name"  v-model="data.SpecialtyId"></v-select>
                    </v-col>
                    <!-- <v-col cols="12" md="6">
                        <v-select label="الخدمات" v-model="data.ServiceId" ></v-select>
                    </v-col> -->
                    <v-col  cols="12" class="d-flex justify-end">
                        <v-btn @click="$emit('Filters',data)" class="bg-ColorBlue" elevation="0">
                            فلتر
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </div>
    </div>
    </div>
</template>


<style lang="scss" scoped>

</style>