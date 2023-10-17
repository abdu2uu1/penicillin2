<script lang="ts" setup>
import emitter from "../../../plugins/emitter.ts";
import axios from '../../../api/axios.ts'
import { global } from "../../../store/global";
import { rules } from "../../../plugins/utils";
import { storeToRefs } from 'pinia'

interface prop{
    item:object
}
const props = defineProps<prop>()

const { AllGove } = storeToRefs(global())
const {openSnackbar , openLoading} = global() 
const valid = ref<boolean>(false)
const data = ref<object>({
  "name": props.item.name,
  "governorateId": props.item.governorate.id
})
const isLoading = ref<boolean>(false)
// fuctions api 
function add() {
    if (valid.value) {
      isLoading.value = true
      axios.put(`Cities/Put/${props.item.id}`, data.value).then((res) => {
          if (res.status >= 200 && res.status < 300) {
            openSnackbar('تمت التعديل بنجاح' ,true , 'green')
        }
            isLoading.value = false
            emitter.emit("reloadAddCountry");
        })
  }
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
    <div>
        <h3>تعديل المنطقة </h3>
    </div>
        <v-form @submit.prevent="add()" v-model="valid">
            <v-row class="mt-5">
            <!-- <v-col cols="12">
                <v-text-field label="أسم المنطقة" ></v-text-field>
            </v-col> -->
            <v-col cols="12">
                <v-select label="أسم المحافظة" :items="AllGove" item-value="id" item-title="name" v-model="data.governorateId"  :rules="[rules?.required]" ></v-select>
            </v-col>
            <v-col cols="12">
                <v-text-field label="أسم المدينة" :rules="[rules?.required]" v-model="data.name" ></v-text-field>
            </v-col>
            <v-col cols="12">
                here component map
            </v-col>
            <v-col cols="12">
                <div class="d-flex justify-center align-center">
                    <v-btn class="bg-ColorBlue rounded-lg px-7  " :loading="isLoading" type="submit" :elevation="0" >{{ $t('Edit_All') }}</v-btn>
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
