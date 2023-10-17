<script lang="ts" setup>
import emitter from '../../../plugins/emitter';
interface prop {
    item: object,
}
const props = defineProps<prop>()
console.log(props.item)
const data = ref<object>({
    "name": props.item.name,
  "description": props.item.description,
  "phoneNumber": props.item.phoneNumber,
  "licensePhotoUrl": props.item.licensePhotoUrl,
  "purchaseLimit": props.item.purchaseLimit,
  "lat": props.item.lat,
  "long": props.item.log,
  "zoonId": props.item.zoon.id,
  "class": props.item.class,
  "pharmacyType": props.item.pharmacyType,
  "notes": props.item.notes,
  "specialties": props.item.specialties
})
function CloseDialog(): void{
    emitter.emit('closeUse')
}
</script>
<template>
    <div class="bg-white rounded-xl pa-5  editPharmcy">
        <Icon  icon="ph:x-bold"   width="20" class="cursPointer" @click="CloseDialog()" />
        <div class="     mt-5 ">
            <v-form>
                <v-row>
                    <v-col cols="12" md="6" >
                        <v-text-field label="الاسم"  v-model="data.name" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" >
                        <v-text-field label="عدد المواد" v-model="data.no" ></v-text-field>
                        
                    </v-col>
                    <v-col cols="12" md="6" >
                        <v-text-field label="مدير الصيدلية" ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" >
                        <v-text-field label="رقم الهاتف" v-model="data.phoneNumber"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-select label="نوع الصيدلية" v-model="data.pharmacyType" ></v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="العنوان" v-model="data.address"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea class="textAreaSize" label="شيْ اخر " v-model="data.description" ></v-textarea>
                    </v-col>
                    <v-col cols="12">
                        <v-checkbox label="نشط" v-model="data" ></v-checkbox>
                    </v-col>
                    <v-col  cols="12" class="d-flex justify-end">
                        <v-btn class="bg-ColorBlue" elevation="0">
                            تعديل
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.editPharmcy{
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none
    }
}
</style>