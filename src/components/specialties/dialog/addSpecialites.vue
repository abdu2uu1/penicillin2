<script lang="ts" setup>
import emitter from "../../../plugins/emitter.ts";
import axios from '../../../api/axios.ts'
import { global } from "../../../store/global";
import { rules } from "../../../plugins/utils";
import { storeToRefs } from 'pinia'

const { specialType } = storeToRefs(global())
const {openSnackbar} = global()
const valid= ref<boolean>(false)
const data = ref<object>({
  name: null,
  specialtyType:null,
})
const isloading = ref<boolean>(false)
function addSpeic() {
  if (valid.value) {
    isloading.value = true;
    
    axios.post('/Specialties/Post', data.value).then((res) => {
        openSnackbar('تمت الاضافة بنجاح', true, 'green')
        emitter.emit('reloadSpecial')
    }).finally(() => {
      isloading.value= false
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
        <h3>أضافة قسم جديد</h3>
    </div>
    <v-form @submit.prevent="addSpeic()" v-model="valid">
        <v-row class="mt-5">
            <v-col cols="12">
                <v-text-field label="أسم القسم" v-model="data.name" :rules="[rules.required]" ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-select  label=" نوع التخصص" :items="specialType" item-title="descAr" item-value="value" v-model="data.specialtyType" :rules="[rules.required]" ></v-select>
            </v-col>
            <v-col cols="12">
                <div class="d-flex justify-center align-center">
                    <v-btn class="bg-ColorBlue rounded-lg px-7  "  :loading="isloading" type="submit" :elevation="0" >{{ $t('AddAll') }}</v-btn>
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
