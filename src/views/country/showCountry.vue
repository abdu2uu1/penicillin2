<script lang="ts" setup>
import axios from '../../api/axios';
import { global } from '../../store/global';
import { useRoute } from 'vue-router';
const data = ref<object>()
const route = useRoute()
function getsingle() {
  axios.get(`Cities/GetAll?Id=${route.params.id}`).then((res) => {
    data.value = res.data.result.data[0]
    console.log(data.value)
  }).finally(() => {
    
  })
}
onMounted(() => {
  getsingle()
})
</script>
<template>
  <v-container>
    <div class="mb-10">
      <topUser />
    </div>
    <div class="mb-5 mx-4">
      <p>{{ $t("Country_Title") }}</p>
    </div>
    <div class="mt-5">
        <showMap :item="data"/>
    </div>
    <div  class="my-5 mx-4">
        <h3>الصيدليات  ضمن المنطقة</h3>
    </div>
    <v-row class="mt-5">
        <v-col cols="3" v-for="i in 10 " :key="i">
            <cardPharmcy/>
        </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
