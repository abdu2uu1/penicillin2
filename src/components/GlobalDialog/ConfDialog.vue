<script lang="ts" setup>
import emitter from '../../plugins/emitter'
interface prop {

    MainParag: string,
    NameParag: string,
    SubParag: string,
}
const props = defineProps<prop>()
function closedd():void{
    emitter.emit('closeUse')
}
</script>
<template>
    <div class="bg-white pa-5 px-8 rounded-xl">
        <div class="mb-3">
            <Icon @click="closedd()" class="cursPointer" icon="ph:x-bold" width="22"/>
        </div>
        <div class="px-4">
            <p>{{ `${$t(props.MainParag)} - ${props.NameParag} ؟ ` }}</p>
            <p class="mt-2">{{ $t(props.SubParag) }}</p>
        </div>
        <div class="mt-6 d-flex align-center justify-end" >
            <v-btn  class=" mx-3  text-ColorBlue px-6 rounded-lg  borderBlue" @click="closedd()" variant="text">{{ $t('No') }}</v-btn>
            <v-btn class="bg-ColorBlue px-6 rounded-lg " @click="$emit('yes')" variant="text">{{ $t('Yes') }}</v-btn>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>