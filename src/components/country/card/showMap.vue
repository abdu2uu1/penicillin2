<script lang="ts" setup>


interface prop {
    item:object
}
const props = defineProps<prop>()
</script>
<template>
    <div class="bg-ColorGray pa-5 rounded-xl d-flex  contan">
        {{ $props.item }}
        <div class="one  ">
                    <div class="d-flex align-center">
                    <h3>معلومات المنطقة</h3>
                    </div>
            <div class="mt-8 ">
                <div class="d-flex justify-space-between  ">
                    <div class="mx-4 text-center"> 
                        <p  class="text-ColorTextGray"> {{$t('Gov')}}</p>
                        <p  class="text-black">0</p>
                    </div>
                    <div  class="mx-4 text-center">
                        <p  class="text-ColorTextGray">{{$t('City')}}</p>
                        <p  class="text-black">0</p>
                    </div>
                    <div  class="mx-4 text-center">
                        <p  class="text-ColorTextGray">{{$t('Count_Of_Pharmcy')}}</p>
                        <p  class="text-black">2000</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="two">
            here Map 
        </div>
    </div>
</template>


<style lang="scss" scoped>
.containerImageShow{
    width: 200px;
    height: 200px;
    img{
        width: 100%;
        height:100%;
        object-fit: contain
    }
}
.one{
    width: 50%;
}
.two{
    width: 50%;
}
.contan{
    height: 200px;
}
</style>