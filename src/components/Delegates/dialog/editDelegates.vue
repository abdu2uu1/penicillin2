<script lang="ts" setup>
import emitter from "../../../plugins/emitter.ts";
import axios from '../../../api/axios.ts'
import { global } from "../../../store/global";
import { rules } from "../../../plugins/utils";
const {openSnackbar} = global()
interface prop {
    item:object
}
const props = defineProps<prop>()
const data = ref<object>({
    fullName: props.item?.fullName,
    phoneNumber: props.item?.phoneNumber,
    companyName: props.item?.companyName,
    companyLogo: props.item?.companyLogo
})
const isloading = ref<boolean>(false)
const valid = ref<boolean>(false)
function add() {
    if (valid.value) {
        isloading.value = true
        axios.put(`/Representatives/Put/${props.item.id}`, data.value).then((res) => {
            if (res.status >= 200 && res.status < 300) {
                openSnackbar('تم التعديل بنجاح' ,true, 'green')
            }
            closeAndReload()
        }).finally(() => {
            isloading.value = false
        })
    }
}
function closeAndReload() {
    emitter.emit('closeAddandedit')
    
}
function closedd():void {
  emitter.emit("closeUse");
}
</script>
<template>
  <div class="bg-white pa-5 rounded-xl addNewDeleg">
    <div class="mb-3">
      <Icon
        @click="closedd()"
        class="cursPointer"
        icon="ph:x-bold"
        width="22"
      />
    </div>
    <div  class="pa-10">
        <div class="d-flex align-center justify-center">
            <div class="ContainerImmggeAdd ">
                    <img src="../../../assets/image/UploadImage.png" class="rounded-xl"/>
                </div>
        </div>
        <v-form  @submit.prevent="add()" v-model="valid"  >
            <v-row class="mt-5">
                <v-col cols="12">
                    <v-text-field label="الاسم الكامل" :rules="[rules.required]" v-model="data.fullName" ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field label="رقم الهاتف"   :rules="[rules.Number]" v-model="data.phoneNumber" ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field label="اسم الشركة" v-model="data.companyName" ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field label="شعار الشركة" :rules="[rules.required]" v-model="data.companyLogo" ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <div class="d-flex justify-center align-center">
                        <v-btn class="bg-ColorBlue rounded-lg px-7  "  :loading="isloading"   type="submit" :elevation="0" >{{ $t('Edit_All') }}</v-btn>
                    </div>
                </v-col>
            </v-row>
            
        </v-form>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.addNewDeleg{
    overflow-y:scroll;
    &::-webkit-scrollbar{
        display: none
    } 
}
.ContainerImmggeAdd{
    width: 150px;
    height: 150px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain 
    }
}

</style>
