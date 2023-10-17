<script lang="ts" setup>
import axios from "../../../api/axios.ts";
import emitter from "../../../plugins/emitter.ts";
import { global } from "../../../store/global.ts";
import moment from "moment";
const emit = defineEmits(["reload"]);
const { selectdosageForm, baseUrl, openLoading, openSnackbar } = global();
interface prop {
  expier: boolean;
  item: object;
}
const props = defineProps<prop>();
const openDelete = ref<boolean>(false);
const openReject = ref<boolean>(false);
const openAccept = ref<boolean>(false);
emitter.on("closeUse", () => {
  openDelete.value = false;
  openAccept.value = false;
  openReject.value = false;
});

function rejectOrAccept(): void {
  openReject.value = false;
  openAccept.value = false;
  openLoading(true);
  axios
    .delete(`Products/AcceptOrUnAccept/${props.item.id}`)
    .then((res) => {
      if (props.item.accepted) {
        openSnackbar("تم التوقيف", true, "green");
      } else {
        openSnackbar("تمت الموافقة ", true, "green");
      }
      emit("reload");
    })
    .finally(() => {
      openLoading(false);
    });
}
</script>
<template>
  <div class="bg-ColorGray pa-5 rounded-xl d-flex">
    <div class="one">
      <div>
        <div class="d-flex align-center">
          <h3>المعلومات الطبية</h3>
          <div class="d-flex align-center">
            <!-- <Icon  class="mx-3 pa-1  bg-ColorBlue rounded-lg  cursPointer" width="25" icon="carbon:license"/> -->
            <p class="mx-3 pa-1 rounded-xl px-3 bg-ColorBlue">
              {{ props.item.specialty?.name }}
            </p>
          </div>
          <div class="d-flex align-center" v-if="props.expier">
            <!-- <Icon  class="mx-3 pa-1  bg-ColorBlue rounded-lg  cursPointer" width="25" icon="carbon:license"/> -->
            <p class="mx-3 pa-1 rounded-xl px-3 bg-red">منتهي الصلاحية</p>
          </div>
        </div>
      </div>
      <div class="mt-10 borderGrayBottom pb-5">
        <div class="d-flex justify-space-between">
          <div class="mx-4 text-center">
            <p class="text-ColorTextGray">الأسم</p>
            <p class="text-black mt-1">{{ props.item.tradeName }}</p>
          </div>
          <div class="mx-4 text-center">
            <p class="text-ColorTextGray">الأسم العلمي</p>
            <p class="text-black mt-1">{{ props.item.scientificName }}</p>
          </div>
          <div class="mx-4 text-center">
            <p class="text-ColorTextGray">أسم الشركة</p>
            <p class="text-black mt-1">{{ props.item.companyName }}</p>
          </div>
          <div class="mx-4 text-center">
            <p class="text-ColorTextGray">الشكل الطبي</p>
            <p class="text-black mt-1">
              {{ selectdosageForm(props.item.dosageForm) }}
            </p>
          </div>
          <div class="mx-4 text-center">
            <p class="text-ColorTextGray">تاريخ الأنتهاء</p>
            <p class="text-black mt-1">
              {{ moment(props.item.expDate).format("L") }}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-10">
        <div class="d-flex justify-space-between">
          <div class="mx-4 text-center">
            <p class="text-ColorTextGray">الكمية</p>
            <p class="text-black mt-1">{{ props.item.qty }}</p>
          </div>
          <div class="mx-4 text-center">
            <p class="text-ColorTextGray">السعر</p>
            <p class="text-black mt-1">{{ props.item.price }}</p>
          </div>
          <div class="mx-4 text-center">
            <p class="text-ColorTextGray">الخصم</p>
            <p class="text-black mt-1">{{ props.item.discount }}%</p>
          </div>
          <div class="mx-4 text-center">
            <p class="text-ColorTextGray">السعر الكلي</p>
            
             
            <p class="text-black mt-1">{{ props.item.price }}</p>
          </div>
          <div class="mx-4 text-center">
            <p class="text-ColorTextGray">حالة المنتج</p>
             <p
                class="text-black mt-1 statusOrder"
              >
                <icon
                  class="icon"
                  icon="ph:dot-outline-fill"
                  :class="item.accepted ? 'text-green' : 'text-red'"
                  width="30"
                />

                {{ item.accepted ? "موافق" : "متوقف" }}
              </p>
          </div>
        </div>
      </div>
    </div>
    <div class="two d-flex flex-column align-center">
      <div class="containerImageShow">
        <img :src="baseUrl + props.item.pictureUrl" />
      </div>
      <div v-if="!props.expier" class="mt-5">
        <v-btn
          v-if="!props.item?.accepted"
          @click="openReject = true"
          class="bg-ColorBlue rounded-lg px-8"
        >
          {{ $t("Accept") }}</v-btn
        >
        <v-btn v-else class="bg-red rounded-lg px-8" @click="openAccept = true">
          {{ $t("Reject") }}</v-btn
        >
      </div>
      <div v-else class="mt-5">
        <v-btn
          variant="outlined"
          class="text-ColorBlue rounded-lg px-8"
          @click="openDelete = true"
        >
          {{ $t("Delete") }}</v-btn
        >
      </div>
    </div>
    <v-dialog v-model="openDelete" width="500">
      <ConfDialog
        MainParag="Stoped_Pharmncy"
        :NameParag="props.item.tradeName"
        SubParag="Sub_Delete_Message_product"
      />
    </v-dialog>
    <v-dialog v-model="openReject" width="500">
      <ConfDialog
        MainParag="Accept_Products"
        @yes="rejectOrAccept()"
        :NameParag="props.item.tradeName"
        SubParag="Sub_Delete_Message_Accept_prodeuct"
      />
    </v-dialog>
    <v-dialog v-model="openAccept" width="500">
      <ConfDialog
        MainParag="Reject_Products"
        @yes="rejectOrAccept()"
        :NameParag="props.item.tradeName"
        SubParag="Sub_Delete_Message_Reject_Products"
      />
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped>
.containerImageShow {
  width: 200px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.one {
  width: 75%;
  margin-left: 5%;
}
.two {
  width: 20%;
}
</style>
