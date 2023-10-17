<script lang="ts" setup>
import { useRoute } from 'vue-router';
import axios from '../../api/axios.ts'
import { global } from '../../store/global'; 
const {openLoading} = global()
const route = useRoute()
const data=ref<object>({})
function getSingleOrder() {
  openLoading(true)
  axios.get(`Orders/Get?id=${route.params.id}`).then((res) => {
    data.value = res.data.result.data[0]
    console.log(data.value.items)
  }).finally(() => {
    openLoading(false)
  })
}
onMounted(() => {
  getSingleOrder()
})
</script>
<template>
  <v-container>
    <div class="mb-10">
        <topUser :showSearchFilter="false"  />
    </div>
    <div class="mb-5 mx-4">
      <p>{{ $t("Show_Order_Title") }}</p>
    </div>
    <div class="mt-5">
        <CardDetilsOrder :item="data" />
    </div>
    <h3 class="my-4 mx-5">{{ $t("al_Proudct") }}</h3>
    <v-row>
        <v-col  cols="3" v-for="item in data.items " :key="item.id" >
            <cardOrder :item="item" />
        </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
