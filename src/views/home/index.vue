<script lang="ts" setup>
import emitter from "../../plugins/emitter";
const openDialog = ref<boolean>(false);
emitter.on("closeUse", () => {
  openDialog.value = false;
});
</script>
<template>
  <v-container fluid>
    <div class="mb-10">
      <topUser :showSearchFilter="true" />
    </div>
    <div>

    <v-row class=" ma-2">
      <v-col cols="4">
        <cardHome :Status="0" :Count="250" Text="All_Pharmcy" />
      </v-col>
      <v-col cols="4">
        <cardHome :Status="1" :Count="250" Text="Navbar_Product" />
      </v-col>
      <v-col cols="4">
        <cardHome :Status="2" :Count="250" Text="Navbar__Order" />
      </v-col>
    </v-row>
    </div>
    <div class="mt-5">
      <div>
        <p class="font-weight-medium text-20">اخر المنتجات</p>
      </div>
      <div class="tableHome mt-6 pa-3 rounded-xl bg-ColorGray">
        <homeTable/>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
//  MainParag: string,
//     NameParag: string,
//     SubParag:string,
</style>
