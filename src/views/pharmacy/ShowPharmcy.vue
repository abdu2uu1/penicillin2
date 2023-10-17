<script lang="ts" setup>
import { useRoute } from 'vue-router';
import axios from '../../api/axios.ts'
import { global } from '../../store/global';
const { openLoading  } = global()
const data = ref<object>({})
const dataProducts = ref<object>({})
const route = useRoute()
const pharmacyIdd = ref<any>(null)
const  searchOrNot= ref<boolean>(false)
function getPharmcy(): void {
    openLoading(true)
    axios.get(`/Pharmacies/GetDetailsPharmacyById/${route.params.id}`).then((res) => {
        data.value = res.data.result
        pharmacyIdd.value = data.value.id
        getProductId()
    }).finally(() => {
        openLoading(false)
    })
}
function getProductId() {
    openLoading(true)
    axios.get(`/Products/Get?PharmacyId=${pharmacyIdd.value}`).then((res) => {
        dataProducts.value = res.data.result.data
        searchOrNot.value =dataProducts.value.length !== 0 ? true : false
    }).finally(() => {
        openLoading(false)
    })
}
const search = ref<string>()
function FiltergetProductId() {
    axios.get(`/Products/Get?PharmacyId=${pharmacyIdd.value}&Search=${search.value}`).then((res) => {
        dataProducts.value = res.data.result.data

    })
}

watch(() => search.value, () => {
    if (searchOrNot.value) {
        if (search.value.length !== 0) {
            FiltergetProductId()
        } else {
            getProductId()
        }
        
    }
})
onBeforeMount(() => {
    getPharmcy()
})
</script>
<template>
    <v-container>
    <div class="mb-10">
        <topUser :showSearchFilter="true" @V-Model="(e) => search = e" />
    </div>
        <div class="my-10 mx-2">
            <p>{{ $t('Title_Show_Single_pharmcy') }}</p>
        </div>
    <div>
        <CardShowPharmcy :item="data"  :Stoped="true" />
    </div>
    <div  class="bg-white mt-10 pa-5 rounded-xl   showOverflow">
        <AllPillTable   :item="dataProducts" />
    </div>
    </v-container>
</template>


<style lang="scss" scoped>
.showOverflow{
    // position: relative;
    // overflow-x: scroll
}
</style>