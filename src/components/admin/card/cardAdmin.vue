<script lang="ts" setup>
import emitter from '../../../plugins/emitter'
function openDialog(type:string):void {
    if (type == 'delete') {
        emitter.emit('openDelete');
    } else {
        
        emitter.emit('openEdit');
        }
}
</script>
<template>
    <div class="bg-ColorGray pa-5 px-3 rounded-xl">
        <div class="d-flex flex-column align-center w-100">
            <div class="ContainerImmgge ">
                <img src="../../../assets/image/UploadImage.png" class="rounded-xl"/>
            </div>
            <div class="mt-4 text-center">
                <h4>عبدالله رزاق رهيف</h4>
                <p class="text-ColorTextGray text-12 mt-2">مسؤؤل نظام</p>
                <p class="text-ColorTextGray text-15 mt-3">الصلاحيات </p>
                <p class="text-black font-weight-bold  text-15  my-2">الجميع</p>
            </div>
        </div>
        <!-- <div class="mt-3 d-flex justify-space-between">
            <div class="text-center">
                <p class="text-ColorTextGray text-12 ">{{ $t('Order_Complate') }}</p>
                <p class="text-black">9</p>
            </div>
            <div class="text-center">
                <p class="text-ColorTextGray text-12 ">{{ $t('Order_Cancele') }}</p>
                <p class="text-black">9</p>
            </div>
            <div class="text-center">
                <p class="text-ColorTextGray text-12 ">{{ $t('Order_Now') }}</p>
                <p class="text-black">9</p>
            </div>
        </div> -->
        <div class="mt-3 d-flex align-center justify-center ">
            <Icon icon="mingcute:delete-2-line" class="mx-3 text-red cursPointer" width="20"  @click="openDialog('delete')" />
            <Icon icon="ep:edit" class="mx-3 text-blue cursPointer" width="20" @click="openDialog('edit')"  />
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
</style>