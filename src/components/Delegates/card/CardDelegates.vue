<script lang="ts" setup>
import emitter from '../../../plugins/emitter'
import { useRouter } from 'vue-router';
const router =useRouter()
interface prop{
    item: object;
    single:boolean
}
const props = defineProps<prop>()


function openDialog(type: string , items:object): void {
    if (type == 'delete') {
        emitter.emit('openDelete',items);
    } else {
        
        emitter.emit('openEdit',items);
        }
}
</script>
<template>
    <div class="bg-ColorGray pa-5 px-3 rounded-xl h-100 " :class="!props.single?'dd':''">
        <div class="d-flex flex-column align-center w-100">
            <div class="ContainerImmgge ">
                <img src="../../../assets/image/UploadImage.png" class="rounded-xl"/>
            </div>
            <div class="mt-4 text-center">
                <h4>{{props.item.fullName}}</h4>
                <p class="text-ColorTextGray text-12 mt-1">{{props.item.companyName}}</p>
            </div>
        </div>
        <div class="mt-3 d-flex align-center   " :class="!props.single?'justify-center':''">
            <div class="text-center" :class="!$props.single?'mx-2':''">
                <p class="text-ColorTextGray text-12 ">{{ $t('Order_Complate') }}</p>
                <p class="text-black">9</p>
            </div>
            <div class="text-center" :class="!$props.single?'mx-2':''">
                <p class="text-ColorTextGray text-12 ">{{ $t('Order_Cancele') }}</p>
                <p class="text-black">9</p>
            </div>
            <div class="text-center" :class="!$props.single?'mx-2':''">
                <p class="text-ColorTextGray text-12 ">{{ $t('Order_Now') }}</p>
                <p class="text-black">9</p>
            </div>
        </div>
        <div class="mt-3 d-flex align-center justify-center " v-if="props.single">
            <Icon icon="mingcute:delete-2-line" class="mx-3 text-red cursPointer" width="20"  @click="openDialog('delete',props.item)" />
            <Icon icon="carbon:view" class="text-green cursPointer" width="20"  @click="router.push({name:'showDelegates',params:{id:props.item.id}})" />
            <Icon icon="ep:edit" class="mx-3 text-blue cursPointer" width="20" @click="openDialog('edit',props.item)"  />
        </div>

    </div>
</template>


<style lang="scss" scoped>
.ContainerImmgge{
    width:100px;
    height: 100px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover
    }
}
p{
    font-size: 12px 
}
.dd{
    min-width:400px
}
</style>