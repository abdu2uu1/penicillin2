<script lang="ts" setup>
import emitter from "../../../plugins/emitter.ts";
import axios from "../../../api/axios.ts";
import { global } from "../../../store/global";
import { rules } from "../../../plugins/utils";
import { storeToRefs } from "pinia";
import func from "./vue-temp/vue-editor-bridge";
const { AllGove } = storeToRefs(global());
const { openSnackbar, openLoading } = global();
const valid = ref<boolean>(false);
const data = ref<object>({
  name: null,
  description: null,
  cities: [],
});
const cityAny = ref<any>(null);
const isLoading = ref<boolean>(false);
// fuctions api
function add() {
  if (valid.value) {
    isLoading.value = true;
    axios.post("Cities/Post", data.value).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        openSnackbar("تمت الاضافة بنجاح", true, "green");
      }
      isLoading.value = false;
      emitter.emit("reloadAddCountry");
    });
  }
}
function closedd(): void {
  emitter.emit("closeUse");
}
function addSelect(item: object) {
    if (data.value.cities.indexOf(item) !== -1){
        data.vale.cities.splice(data.value.cities.indexOf(item),1)
    } else {
        console.log('hello ')
        data.value.cities.push(item)
    }
    console.log(data.value.cities)
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
    <div class="pa-10">
      <div>
        <h3>أضافة منطقة جديدة</h3>
      </div>
      <v-form @submit.prevent="add()" v-model="valid">
        <v-row class="mt-5">
          <!-- <v-col cols="12">
                <v-text-field label="أسم المنطقة" ></v-text-field>
            </v-col> -->
          <v-col cols="12">
            <v-text-field
              label="أسم المدينة"
              :rules="[rules?.required]"
              v-model="data.name"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              label="الوصف"
              :rules="[rules?.required]"
              v-model="data.description"
            ></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-select
              label="أسم المنطقة"
              multiple
              :items="AllGove"
              item-value="id"
              item-title="name"
              v-model="cityAny"
              :rules="[rules?.required]"
            >
              <template v-slot:item="{ props, item }">
                <v-list-item
                  v-bind="props"
                  @click="addSelect({cityId: item.raw.id})"
                >
                </v-list-item>
              </template>
            </v-select>
            {{ data.cities }}
          </v-col>
          <!-- <v-col cols="12">
                here component map
            </v-col> -->
          <v-col cols="12">
            <div class="d-flex justify-center align-center">
              <v-btn
                class="bg-ColorBlue rounded-lg px-7"
                :loading="isLoading"
                type="submit"
                :elevation="0"
                >{{ $t("AddAll") }}</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.addNewDeleg {
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
.ContainerImmggeAdd {
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
