<script lang="ts" setup>
import emitter from "../../plugins/emitter";
import axios from "../../api/axios.ts";
import { global } from "../../store/global";
const { openLoading, openSnackbar } = global();
const OpenDelete = ref<boolean>(false);
const OpenEdit = ref<boolean>(false);
const OpenAdd = ref<boolean>(false);
const data = ref<Array<object>>([]);
const deleteObj = ref<object>({
  id: null,
  name: "",
});
const filters = ref<object>({
  page: 1,
  sizePage: 2,
  totalPages: 1,
});

const closeFilter = ref<boolean>(false);
function getAlldeleg() {
  openLoading(true);
  axios
    .get(
      `Representatives/Get?PageIndex=${filters.value.page}&PageSize=${filters.value.sizePage}`
    )
    .then((res) => {
      data.value = res.data.result.data;
      filters.value.totalPages = Math.ceil(
        res.data.result.count / filters.value.sizePage
      );
    })
    .finally(() => {
      openLoading(false);
    });
}
function deleteDeleg() {
  OpenDelete.value = false;
  openLoading(true);
  axios
    .delete(`/Representatives/Delete/${deleteObj.value.id}`)
    .then((res) => {
      if (res.status === 200) {
        openSnackbar("تم الحذف بنجاح", true, "green");
        getAlldeleg();
      }
    })
    .finally(() => {
      openLoading(false);
    });
}

emitter.on("openDelete", (item: object) => {
  OpenDelete.value = true;
  deleteObj.value.id = item.id;
  deleteObj.value.name = item.fullName;
});
const editItem = ref<object>({});
emitter.on("openEdit", (item: object) => {
  OpenEdit.value = true;
  editItem.value = item;
});
emitter.on("closeUse", () => {
  OpenDelete.value = false;
  OpenEdit.value = false;

  OpenAdd.value = false;
});
emitter.on("closeAddandedit", () => {
  OpenDelete.value = false;
  OpenEdit.value = false;
  OpenAdd.value = false;
  getAlldeleg();
});
// funcitons paginations
function pre(number: number): void {
  filters.value.page -= number;
  getAlldeleg();
}
function inc(number: number): void {
  filters.value.page += number;
  getAlldeleg();
}
onMounted(() => {
  getAlldeleg();
});
const search = ref<string>("");
watch(
  () => search.value,
  () => {
    if (search.value.length !== 0) {
      axios
        .get(
          `Representatives/Get?PageIndex=1&PageSize=100&Search=${search.value}`
        )
        .then((res) => {
          data.value = res.data.result.data;
        });
    } else {
      getAlldeleg();
    }
  }
);
</script>
<template>
  <v-container>
    <div class="mb-10">
      <topUser
      :showSearchFilter="true"
        :showFilter="false"
        @V-Model="(e) => (search = e)"
        @Open-Filter="filter = true"
      />
    </div>
    <div class="mb-5 mx-4">
      <p>{{ $t("delegates_Title") }}</p>
      <div class="mt-5">
        <v-btn
          class="bg-ColorBlue rounded-lg"
          :elevation="0"
          @click="OpenAdd = true"
          >{{ $t("AddAll") }}</v-btn
        >
      </div>
      <div v-if="data.length !== 0">
        <v-row class="mt-5">
          <v-col cols="3" v-for="item in data" :key="item">
            <CardDelegates :item="item" :single="true" />
          </v-col>
        </v-row>
      </div>
      <div
        v-else
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
    <div class="w-100" v-if="data.length !== 0">
      <pagination
        :page="filters.page"
        :sizePage="filters.sizePage"
        :totalPages="filters.totalPages"
        @pre="pre(1)"
        @preTwo="pre(2)"
        @preOne="pre(1)"
        @incOne="inc(1)"
        @incTwo="inc(2)"
        @inc="inc(1)"
      />
      <!-- <v-select ></v-select> -->
    </div>
    <v-dialog v-model="OpenDelete" width="500">
      <ConfDialog
        MainParag="Delete_Message"
        @yes="deleteDeleg()"
        :NameParag="deleteObj.name"
        SubParag="Sub_Delete_Message_delegate"
      />
    </v-dialog>
    <v-dialog v-model="OpenEdit" width="500">
      <editDelegates :item="editItem" />
    </v-dialog>
    <v-dialog v-model="OpenAdd" width="500">
      <addNewDelegates />
    </v-dialog>
    <v-dialog v-model="filter" width="1024">
      <filtersOrder
        @CloseD="filter = false"
        @Filters="
          (e) => {
            getFilters(e);
            closeFilter = true;
          }
        "
      />
    </v-dialog>
  </v-container>
</template>

<style lang="scss" scoped></style>
