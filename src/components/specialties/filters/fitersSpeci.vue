<script lang="ts" setup>
import { global } from '../../../store/global.ts'
import { storeToRefs } from 'pinia';
const {specialType} = storeToRefs(global())
const data = ref<object>({})


</script>
<template>
    <div class="bg-white rounded-xl pa-5 filters">

         <div class="bg-white rounded-xl pa-5  editPharmcy">
        <Icon  icon="ph:x-bold"   width="20" class="cursPointer" @click="$emit('CloseD')" />
        <div class="     mt-5 ">
            <v-form>
                <v-row>
                    <v-col cols="12" >
                        <v-select label=" نوع التخصص" :items="specialType"  item-value="value" item-title="descAr"  v-model="data.SpecialtyType" ></v-select>
                    </v-col>
                    <v-col  cols="12" class="d-flex justify-end">
                        <v-btn @click="$emit('Filters',data)" class="bg-ColorBlue" elevation="0">
                            فلتر
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </div>
    </div>
    </div>
</template>


<style lang="scss" scoped>

</style>