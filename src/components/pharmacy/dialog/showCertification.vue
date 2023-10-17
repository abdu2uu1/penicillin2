<script lang="ts" setup>
import emitter from "../../../plugins/emitter";
interface prop{
  linkUrl:string
}
const props = defineProps<prop>()
function closedd():void{
    emitter.emit('closeUse')
}
</script>
<template>
  <div class="bg-white pa-5 px-8 rounded-xl">
    <div class="mb-3">
      <Icon
        @click="closedd()"
        class="cursPointer"
        icon="ph:x-bold"
        width="22"
      />
    </div>
    <div class="text-center">
      <img
        :src="props.linkUrl"
        class="ContainerImageCertification"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
