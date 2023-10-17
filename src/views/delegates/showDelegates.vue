<script lang="ts" setup>
import { useRoute } from 'vue-router';
import axios from '../../api/axios.ts'
import { global } from '../../store/global';
const { openLoading } = global()
const route = useRoute()
const tab = ref<string>("one");
const data = ref<object>({})
function getsingle() {
  openLoading(true)
  axios.get(`Representatives/Get?id=${route.params.id}`).then((res) => {
    data.value = res.data.result.data[0]
  }).finally(() => {
    openLoading(false)
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
    <div class="mt-5">
      <p>{{ $t("delegates_Title") }}</p>
    </div>
    <div class="mt-10 d-flex justify-center">
      <CardDelegates :item="data" :single="false" />
    </div>
    <div class="mt-8 d-flex justify-center">
        <div class="bg-ColorGray pa-2 rounded-xl">
        <v-btn :class="tab==='one'?'bg-ColorBlue':''" class="rounded-lg " variant="text" @click="tab = 'one'">{{ $t('Order_Cancele') }}</v-btn>
        <v-btn :class="tab==='two'?'bg-ColorBlue':''" class="rounded-lg " variant="text" @click="tab = 'two'">{{ $t('Order_Complate') }}</v-btn>
        <v-btn :class="tab==='three'?'bg-ColorBlue':''" class="rounded-lg " variant="text" @click="tab = 'three'">{{ $t('Order_Now') }}</v-btn>

        </div>
    </div>
    <div class="mt-5">
      <v-window v-model="tab">
        <v-window-item value="one"> 
            <!-- <AllOrderTable/> -->
        </v-window-item>

        <v-window-item value="two">
            <!-- <AllOrderTable/>     -->
        </v-window-item>

        <v-window-item value="three"> 
            <!-- <AllOrderTable/> -->
        
        </v-window-item>
      </v-window>
    </div>
  </v-container>
</template>

<style lang="scss" scoped></style>
