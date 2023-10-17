<script lang="ts" setup>
import axios from '../../../api/axios.ts'
import { global } from '../../../store/global.ts'
import { storeToRefs } from 'pinia';
const {OrderState ,pharmacyType} = storeToRefs(global())
const Pharmcy  = ref<Array<object>>([])
const special  = ref<Array<object>>([])
const data = ref<object>({})
function getAll() {
    axios.get('/Pharmacies/Get?PageIndex=1&PageSize=100').then((res) => {
        Pharmcy.value= res.data.result.data
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
                        <v-text-field label="رقم الطلب" type="number"  v-model="data.No" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" >
                        <v-select label="الصيدلية" :items="Pharmcy" item-value="id" item-title="name"  v-model="data.PharmacyId" ></v-select>
                    </v-col>
                    <v-col cols="12" md="6" >
                        <v-select label="نوع الصيدلية" :items="pharmacyType" item-value="value" item-title="descAr"  v-model="data.PharmacyType" ></v-select>
                        
                    </v-col>
                    <v-col cols="12" md="6" >
                        <v-select label="  حالة الطلب" :items="OrderState" item-value="value" item-title="descAr"  v-model="data.OrderStatus"></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                        <!-- <v-select label="التخصص" :items="special" item-value="id" item-title="name"  v-model="data.FromExpDate"></v-select> -->
                        <VueDatePicker  auto-apply  placeholder="  تاريخ الطلب من "  v-model="data.FromDate"></VueDatePicker>
                    </v-col>
                    <v-col cols="12" md="6">
                        <!-- <v-select label="التخصص" :items="special" item-value="id" item-title="name"  v-model="data.ToExpDate"></v-select> -->
                        <VueDatePicker  auto-apply  placeholder="تاريخ الطلب الى"  v-model="data.ToDate"></VueDatePicker>
                    </v-col>
                    <v-col cols="12" md="6" >
                        <v-select label=" حالة الدفع" :items="[{name:'نقدا' , value:true},{name:'اونلاين' , value:false}]"  item-value="value" item-title="name"  v-model="data.Cash" ></v-select>
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