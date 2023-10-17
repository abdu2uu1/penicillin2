<script lang="ts" setup>
import axios from '../../api/axios.ts';
import { global } from '../../store/global';
import emitter from '../../plugins/emitter';
import { useRoute } from 'vue-router';
const { openLoading } = global()
const route = useRoute()
const data = ref<Array<object>>({
    pharmacy: {
        name:''
    },
    tradeName:''
})
const comeDat  = ref<boolean>() 
function getPharmcy(): void {
    openLoading(true)
    axios.get(`Products/Get?Id=${route.params.idTwo}`).then((res) => {
        data.value = res.data.result.data[0]
        
        comeDat.value =true
    }).finally(() => {
        openLoading(false)
    })
}

onBeforeMount(() => {
    getPharmcy()
})
</script>
<template>
  <v-container>
    <div class="mb-10">
      <topUser />
    </div>
     <div v-if="comeDat" class="my-10 mx-2">
        <p>{{ `عرض المنتج /  ${data.tradeName}` }}</p>
    </div>
    <div>
        <informationMedical   @reload="getPharmcy()" :item="data"  :expier="false" />
    </div>
    <div class="ma-5" v-if="data.pharmacy !==null">
        <h3>{{ $t('Information_Medical') }}</h3>
    </div>
    <div v-if="data.pharmacy !==null" >
        <CardShowPharmcy :item="data.pharmacy" :Stoped="false"  />
    </div>
  </v-container>
</template>

<style lang="scss" scoped></style>
