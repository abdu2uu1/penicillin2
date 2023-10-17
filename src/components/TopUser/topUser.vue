<script lang="ts" setup>
import { useRouter } from 'vue-router';
interface prop {
  clseFlter: boolean;
  showFilter: boolean;
  showSearchFilter:boolean
}
const props = defineProps<prop>()
const router = useRouter()

function logOut(): void{
  window.localStorage.clear()
  router.push({name:"login"})
}
const search = ref<any>()
</script>
<template>
  <div class="d-flex justify-space-between">
    <div class="pa-4 bg w-100 d-flex align-center" v-if="showSearchFilter">
      <v-text-field label="البحث" class="search" @keyup="$emit('VModel',search)" v-model="search"  ></v-text-field>
      <!-- <span class="pa-5 d-flex align-center justify-center bg-ColorBlue rounded-lg  IconDiv"> -->

      <icon
      v-if="props.showFilter"
      @click="$emit('OpenFilter')"
        width="40"
        icon="streamline:interface-setting-slider-vertical-adjustment-adjust-controls-fader-vertical-settings-slider"
        class="bg-ColorBlue pa-2 mx-3 cursPointer rounded-lg"
      />
        <icon v-if="props.clseFlter"  width="30" 
      @click="$emit('ClsFilter')" icon="ph:x-circle-light" class="text-red cursPointer "/>
    
      <!-- </span> -->
    </div>
    <div class="d-flex w-100 justify-end  align-center">
      <v-menu 
      transition="slide-y-transition" >
        <template v-slot:activator="{ props }">
      <div >
        
      <div v-bind="props" class="    d-flex align-center mx-3  px-2 py-5  rounded-xl bg-ColorGray cursPointer">
            <Icon
              icon="ion:notifcations"
              class=" text-ColorTextGray mx-3"
              width="20"
            />
          </div>

      </div>

        </template>
        <div class="pa-5 UserInter2 mt-2  bg-white rounded-lg ">
          <h4>الاشعارات</h4>
          <cardNotifcation v-for="i in 10 " :key="i" />
        </div>
      </v-menu>
      <v-menu >
        <template v-slot:activator="{ props }">
          <div v-bind="props" class="pa-4  d-flex justify-end">
        <div class="d-flex align-center">
          
          <div class="d-flex align-center cursPointer bg-ColorGray pa-2 rounded-xl ">
            <div class="d-flex align-center mx-3">
              <Icon
                icon="formkit:down"
                class=" text-ColorTextGray mx-3"
                width="20"
              />
              <p>Abdullah Razzaq</p>
            </div>
            <div class="ContainerImageUserTop">
              <img src="../../assets/image/LogoPencilin.png" />
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
        </template>
        <div class="pa-5 px-10 bg-white UserInter  d-flex align-center justify-center flex-column  rounded-xl">
            <div @click="router.push({name:'editUser'})" class="cursPointer  borderGraykk   d-flex align-center justify-space-between pa-5  w-100">
              <p class="text-ColorTextGray">الملف الشخصي</p>
              <Icon class="text-ColorTextGray" icon="ph:user" />
            </div>
            <div class="mt-1 cursPointer     d-flex align-center justify-space-between pa-5  w-100 " @click="logOut()" >
                <p class="text-ColorTextGray">تسجيل خروج</p>
              <Icon class="text-ColorTextGray" icon="ant-design:logout-outlined" />
            </div>  
            <!-- <div>
              <Icon icon="ph:user" />
              <p>الملف الشخصي</p>
            </div> -->
        </div>
      </v-menu>

    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.UserInter{
    box-shadow: 0px 0px 10px #00000037;
}
.UserInter2{
    box-shadow: 0px 0px 10px #00000037;
    width: 350px;
    height: 300px;
    overflow-x: scroll;
    &::-webkit-scrollbar{
      display: none;
    }
}
.ContainerImageUserTop {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.borderGraykk{
  border-bottom: 1px solid #EBEBEB
}
</style>
