<script lang="ts" setup>
import emitter from "../../../plugins/emitter.ts";
function closedd():void {
  emitter.emit("closeUse");
}
</script>
<template>
  <div class="bg-white pa-5 rounded-xl addNewDeleg">
    <div class="mb-3">
      <Icon
        @click="closedd()"
        class="cursPointer"
        icon="ph:x-bold"
        width="22"
      />
    </div>
    <div  class="pa-10">
        <div class="d-flex align-center justify-center">
            <div class="ContainerImmggeAdd ">
                    <img src="../../../assets/image/UploadImage.png" class="rounded-xl"/>
                </div>
        </div>
        <v-row class="mt-5">
            <v-col cols="12">
                <v-text-field label="الاسم الكامل" ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field label="الدةر" ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field label="الصلاحيات" ></v-text-field>
            </v-col>
            <v-col cols="12">
                <div class="d-flex justify-center align-center">
                    <v-btn class="bg-ColorBlue rounded-lg px-7  " :elevation="0" >{{ $t('AddAll') }}</v-btn>
                </div>
            </v-col>
        </v-row>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.addNewDeleg{
    overflow-y:scroll;
    &::-webkit-scrollbar{
        display: none
    } 
}
.ContainerImmggeAdd{
    width: 150px;
    height: 150px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain 
    }
}

</style>
