\<script lang="ts" setup>
import { useRouter } from 'vue-router';
import emitter from '../../../plugins/emitter.ts'
const router = useRouter()
const openDelete = ref<boolean>(false)
emitter.on('closeUse', () => {
  openDelete.value = false
})
</script>
<template>
  <div class="tableAll ">
     <div class="rounded-lg pa-5 headData d-flex  itemss">
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        #
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t('Picture') }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Name_subject") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Name_Techgno") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Name_Compnay") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Name_Pharmcy") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Shapge_Pharmcy") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Date_Expier") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Total") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Price") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("DisCount") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Total_Count") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-center">
        {{ $t("Edit_All") }}
      </p>
     
      <!-- <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t('Edit_All') }}
      </p> -->
    </div>

    <div class=" rounded-lg   bodyData"> 
        <div v-for="i in 10 " :key="i"  class="bg-ColorGray mt-2 pa-5 rounded-xl d-flex align-center  itemss  "    >
                    <p class="text-16 font-weight-bold text-black  text-start w-100 ">
                        {{$t('Name_Pharmcy')}}
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100 ">
                        {{$t('Name_Pharmcy')}}
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  ">
                        Paractemol 
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  ">
                        Paractemol 500mg
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  ">
                        سامراء
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  ">
                       عقيل
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  ">
                       كبسول    
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  " >
                       2024/10/1
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  " >
                    500
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  " >
                    1000دع
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  " >
                    25%
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  " >
                    750دع
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  " >
                    نشط
                    </p>
                    <div class="text-16 font-weight-regular text-black    w-100 text-center editeee "  >
                       <Icon icon="ph:eye-bold"     width="20" class="mx-2  text-ColorTextGray cursPointer"  @click="router.push({name:'showExpired',params:{id:3}})"/>
                       <Icon icon="ph:bell-fill"    width="20" class=" mx-2 text-blue cursPointer"  />
                       <Icon icon="ph:trash-bold"    width="20" class="  text-red cursPointer"  @click="openDelete=true"/>
                    </div>
        </div>
    </div>
    <v-dialog v-model="openDelete" width="500">
        <ConfDialog MainParag="product_delete"  NameParag="abdullah" SubParag="Sub_Delete_Message_product"  />
    </v-dialog>
  </div>
</template>

<style lang="scss">
.editeee{
    z-index: 3;
}

</style>
