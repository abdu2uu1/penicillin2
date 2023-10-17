<script lang="ts" setup>
import axios from '../../../api/axios.ts';
import emitter from '../../../plugins/emitter';
import { global } from '../../../store/global';
import { useRouter } from 'vue-router';
const router = useRouter()
const {openSnackbar , openLoading}  = global()
interface prop  {
  edite: boolean,
  items: object,
  nameEmitr:string
}
const props = defineProps<prop>()
const OpenEdit = ref<boolan>(false)
const OpenDelete = ref<boolan>(false)
const DataEdit = ref<object>({})
const IdDelete = ref<any>()
const Name_Pharmcy = ref<string>()
function openDialog(type:string , item:object):void {
  if (type === 'edit') {
    OpenEdit.value = true;
    DataEdit.value = item
  } else {
    OpenDelete.value = true
    IdDelete.value = item.id
      Name_Pharmcy.value = item.name
    }
}
function deletePharmcy() {
     OpenEdit.value = false;
  OpenDelete.value = false
  openLoading(true)
  axios.delete(`Pharmacies/Delete/${IdDelete.value}`).then((res) => {
    if (res.data.statusCode >= 200 && res.data.statusCode < 300) {
      openSnackbar('تم الحذف بنجاح', true, 'green')
      emitter.emit(props.nameEmitr)
    }
  }).catch((err) => {
    if (err.response.status === 404) {
      openSnackbar('العنصر غير موجود',true,'red')
    }
  }).finally(() => {
    openLoading(false)
  })
}
emitter.on('closeUse', () => {
  OpenEdit.value = false;
  OpenDelete.value = false
})


</script>
<template>
  <div class="tableAll " :class="items.length !==0?'':'hidden'" >
     <div v-if="items.length !==0" class="rounded-lg pa-5 headData d-flex align-center nono">
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Name_Pharmcy") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Number_Pharmcy") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Title_Pharmcy") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Admin_Pharmcy") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Type_Pharmcy") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Count_Pharmcy") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Status_pharmcy") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t('Edit_All') }}
      </p>
    </div>
    <div  v-if="items.length !==0"  class="  rounded-lg   bodyData">
      <div v-for="item in props.items " :key="item"  class="bg-ColorGray nono my-2 pa-5 rounded-xl d-flex align-center ">
          <p class="text-16 font-weight-bold text-black  text-start w-100 ">
              {{ item.name }}
          </p>
          <p class="text-16 font-weight-bold text-black  text-start w-100  ">
              {{item.phoneNumber}}
          </p>
          <p class="text-16 font-weight-bold text-black  text-start w-100  ">
              {{item.address}}
          </p>
          <p class="text-16 font-weight-bold text-black  text-start w-100  ">
              <!-- {{$t('Total')}} -->
          </p>
          <p class="text-16 font-weight-bold text-black  text-start w-100  ">
              {{item.pharmacyType === 1 ? 'باي هاند' :'مجمع طبي'}}
          </p>
          <p class="text-16 font-weight-bold text-black  text-start w-100  ">
              <!-- {{item.no}} -->
          </p>
          <div class="w-100  ">
          <p class="text-16 font-weight-bold text-black  statusOrder text-start  w-33" >
            
            <icon class="icon" icon="ph:dot-outline-fill" :class=" item.activated ?'text-green':'text-red'" width="30" />
              {{item.activated?'نشط':"متوقف"}}
          </p>

          </div>
          <p class="text-16 font-weight-regular text-black    w-100 text-start " >
              <Icon icon="ph:eye-bold" class=" text-ColorBlue cursPointer" width="20"     @click="router.push({name:'ShowPharmcy',params:{id:item.id}})"/>
              <Icon v-if="props.edite" icon="mingcute:edit-line"    width="20" class=" mx-1 text-ColorTextGray cursPointer"  @click="openDialog('edit',item)"/>
              <Icon icon="mingcute:delete-2-line" class=" text-red cursPointer" width="20"  @click="openDialog('delete',item)"  />
          </p>
      </div>
    </div>
     <div v-if="items.length ===0" class="w-100 h-100  d-flex flex-column justify-center align-center pa-10 " >
      <icon icon="material-symbols:pill-outline" class="text-ColorTextGray" width="50" />
      <p class="text-20 text-ColorTextGray">لا توجد بيانات</p>
    </div>
    <v-dialog v-model="OpenEdit" width="1024" >
      <editPharmcy :item="DataEdit" />
    </v-dialog>
    <v-dialog v-model="OpenDelete" width="600" >
        <ConfDialog MainParag="Stoped_Pharmncy_delete" @yes="deletePharmcy()" :NameParag="Name_Pharmcy" SubParag="Sub_Delete_Message_Pharmcy"  />
    </v-dialog>
  </div>
</template>

<style lang="scss">
.statusOrder {
  position: relative;
  .icon {
    position: absolute;
    top: -10px;

    left: -20px;
  }
}
.hidden{
  &::-webkit-scrollbar{
    display: none
  }
}
.tableAll{
    overflow-x:scroll;
    .nono{
      width: 1300px
    }
}
</style>
