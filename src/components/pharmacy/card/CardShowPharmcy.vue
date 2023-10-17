<script lang="ts" setup>
import { useRouter } from 'vue-router';
import emitter from '../../../plugins/emitter.ts';
import { global } from '../../../store/global';
const {selectPharmcyType , baseUrl}  = global()
const router = useRouter()
interface prop {
    Stoped: boolean,
    item:object
}
const props = defineProps<prop>()
const openCertif = ref<boolean>(false)
const openStope = ref<boolean>(false)
emitter.on("closeUse", () => {
    openCertif.value = false
    openStope.value = false
})
const linkUrl = ref<string>('')
function openCertifY(linkUrlt: string) {
    openCertif.value = true 
    linkUrl.value = baseUrl + linkUrlt
}
</script>
<template>
    <div class="bg-ColorGray pa-5 rounded-xl d-flex ">
        <div class="one  ">
            <div >
                    <div class="d-flex align-center">
                    <h3>{{props.item.name}}</h3>
                        <div class="d-flex align-center">
                             <Icon  class="mx-3 pa-1  bg-ColorBlue rounded-lg  cursPointer" width="25" icon="carbon:license" @click="openCertifY(props.item.licensePhotoUrl)" />
                            <p class="mx-3 pa-1 rounded-lg  bg-ColorBlue  " v-if="props.item.activated"  >تم القبول</p>
                            <p class="mx-3 pa-1 rounded-lg  bg-red  " v-else  >تم الرفض</p>
                        </div>
                    </div>
                    <p class="text-ColorTextGray">{{ selectPharmcyType(props.item.pharmacyType) }}</p>
                </div>
               
            <div class="mt-4">
                <p  class="text-ColorTextGray">
                    {{ props.item.description  === null?'لا يوجد وصف':props.item.description }}
                </p>
            </div>
            <div class="mt-10 ">
                <div class="d-flex  ">
                    <div class="mx-4 text-center"> 
                        <p  class="text-ColorTextGray"> المواد الاكسباير</p>
                        <p  class="text-ColorTextGray">0</p>
                    </div>
                    <div  class="mx-4 text-center">
                        <p  class="text-ColorTextGray">عدد الاشخاص</p>
                        <p  class="text-ColorTextGray">0</p>
                    </div>
                    <div  class="mx-4 text-center">
                        <p  class="text-ColorTextGray">عدد المواد </p>
                        <p  class="text-ColorTextGray">0</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="two  d-flex flex-column  align-center  ">
            <div class="containerImageShow">
                <img  :src="baseUrl + props.item.licensePhotoUrl"/>
            </div>
            <div v-if="props.Stoped" class="mt-5">
                <v-btn variant="outlined" class="text-ColorBlue rounded-lg px-8"  @click="openStope = true" > {{ $t('Stoped') }}</v-btn>
            </div>
            <div v-else class="mt-5">
                <v-btn variant="outlined" class="text-ColorBlue rounded-lg px-8" @click="router.push({name:'ShowPharmcy',params:{id:$props.item.id}})"  > {{ $t('watch') }}</v-btn>
            </div>
        </div>
        <v-dialog v-model="openCertif" width="500" >
            <showCertification :linkUrl="linkUrl" />
        </v-dialog>
        <v-dialog v-model="openStope" width="500" >
            <ConfDialog MainParag="Stoped_Pharmncy"  NameParag="abdullah" SubParag="SubStoped_Pharmancy" />
        </v-dialog>
    </div>
</template>


<style lang="scss" scoped>
.containerImageShow{
    width: 150px;
    height: 150px;
    img{
        width: 100%;
        height:100%;
        object-fit: contain
    }
}
.one{
    width: 80%;
}
.two{
    width: 20%;
}
</style>