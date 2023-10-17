<script lang="ts" setup>
import { useRouter } from 'vue-router';
import emitter from '../../../plugins/emitter';
interface prop{
  items:Array
}
const props= defineProps<prop>()
const router = useRouter()

function openDialog(type:string,item:object):void {
    if (type === 'delete') {
        emitter.emit("openDelete",item)
    } else {
        emitter.emit("openEdit",item)
        
    }
}
</script>
<template>
  <div class="tableAll ">
     <div  v-if="props.items.length !==0"  class="rounded-lg pa-5 headData d-flex">
      <!-- <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-center">
        #
      </p> -->
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-center">
   {{$t('Gov')}}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-center">
        {{$t('City')}}
      </p>
      <!-- <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-center">
        {{$t('LogcalCity')}}
      </p> -->
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-center">
       {{$t('Count_Of_Pharmcy')}}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-center">
        {{$t('Map')}}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-center">
       {{$t('Edit_All')}}
      </p>
    </div>

    <div   v-if="props.items.length !==0" class="  rounded-lg   bodyData">
        <div v-for="item in props.items " :key="item.id"  class="bg-ColorGray mt-2 pa-5 rounded-xl d-flex align-center ">
                    <!-- <p class="text-16 font-weight-bold text-black  text-center w-100 ">
                        #
                    </p> -->
                    <p class="text-16 font-weight-bold text-black  text-center w-100  ">
                        {{ item.city.governorate.name }}
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-center w-100  ">
                       {{item.city.name}}
                    </p>
                    <!-- <p class="text-16 font-weight-bold text-black  text-center w-100  ">
                        {{$t('LogcalCity')}}
                    </p> -->
                    <p class="text-16 font-weight-bold text-black  text-center w-100  ">
                        {{$t('Count_Of_Pharmcy')}}
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-center w-100  ">
                       <Icon icon="pepicons-pencil:map" width="23" class=" text-blue cursPointer" />
                    </p> 
                    <div class="text-16 font-weight-bold text-black  text-center w-100  " >
                        
                     <Icon icon="mingcute:delete-2-line" class="mx-3 text-red cursPointer" width="20"  @click="openDialog('delete',item)" />
            <Icon icon="carbon:view" class="text-green cursPointer" width="20" @click="router.push({name:'Showountry',params:{id:item.id}})"  />
            <Icon icon="ep:edit" class="mx-3 text-blue cursPointer" width="20" @click="openDialog('edit',item)"  />
                    </div>
        </div>
    </div>
     <div v-if="props.items.length ===0" class="w-100 h-100  d-flex flex-column justify-center align-center pa-10" >
      <icon icon="material-symbols:pill-outline" class="text-ColorTextGray" width="50" />
      <p class="text-20 text-ColorTextGray">لا توجد بيانات</p>
    </div>
  </div>
</template>

<style lang="scss">
.tableAll{
    overflow-x:scroll;
    // width: 500px
}
</style>
