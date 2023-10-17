<script lang="ts" setup>
import emitter from '../../../plugins/emitter';
import moment from 'moment';
import { global } from '../../../store/global'
const {selectSpecial} = global()
interface prop{
  items:Array<object>,
}
const props = defineProps<prop>()
function openDialog(type: string, value: object): void {
    if (type === 'delete') {
        emitter.emit("openDeleteSpeci" , value)
    } else {
      emitter.emit("openEditSpeci",value)
    }
}
</script>
<template>
  <div class="tableAll " :class="items.length !==0?'':'hidden'">
     <div 
        v-if="items.length !==0" class="rounded-lg pa-5 headData d-flex">
      <!-- <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-center">
        #
      </p> -->
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-center">
   {{$t('The_name')}}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-center">
        {{$t('Date_Create')}}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-center">
        {{$t('specialType')}}
      </p>
     
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-center">
       {{$t('Edit_All')}}
      </p>
    </div>

    <div 
        v-if="items.length !==0" class="  rounded-lg   bodyData">
        <div v-for="item in props.items " :key="item.id"  class="bg-ColorGray mt-2 pa-5 rounded-xl d-flex align-center ">
                    <!-- <p class="text-16 font-weight-bold text-black  text-center w-100 ">
                        #
                    </p> -->
                    <p class="text-16 font-weight-bold text-black  text-center w-100  ">
                        {{ item.name }}
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-center w-100  ">
                        {{ moment(item.createdAt).format('L') }}
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-center w-100  ">
                       {{selectSpecial(item.specialtyType)}}
                    </p>
                    
                    <div class="text-16 font-weight-bold text-black  text-center w-100  " >
                        
                     <Icon icon="mingcute:delete-2-line" class="mx-3 text-red cursPointer" width="20"  @click="openDialog('delete',item)" />
            <Icon icon="ep:edit" class="mx-3 text-blue cursPointer" width="20" @click="openDialog('edit', item)"  />
                    </div>
        </div>
    </div>
    <div
        v-if="items.length ===0"
        class="w-100 h-100 d-flex flex-column justify-center align-center pa-10"
      >
        <icon
          icon="material-symbols:pill-outline"
          class="text-ColorTextGray"
          width="50"
        />
        <p class="text-20 text-ColorTextGray">لا توجد بيانات</p>
      </div>
  </div>
</template>

<style lang="scss">
.hidden{
  &::-webkit-scrollbar{
    display: none
  }
}
.tableAll{
    overflow-x:scroll;
    // width: 500px
}
</style>
