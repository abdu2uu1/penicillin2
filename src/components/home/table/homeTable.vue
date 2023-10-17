<script setup></script>
<template>
  <div class="tableAll ">
     <div class="rounded-lg pa-5 headData d-flex">
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Name_Pharmcy") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Name_subject") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Price") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Total") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Date_Order") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Date_Expier") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-100 text-start">
        {{ $t("Status_Order") }}
      </p>
      <p class="text-16 font-weight-regular text-ColorTextGray w-30 text-start"></p>
    </div>

    <div class="  rounded-lg   bodyData">
        <div v-for="i in 10 " :key="i"  class="bg-white mt-2 pa-5 rounded-xl d-flex align-center ">
                    <p class="text-16 font-weight-bold text-black  text-start w-100 ">
                        {{$t('Name_Pharmcy')}}
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  ">
                        {{$t('Name_subject')}}
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  ">
                        {{$t('Price')}}
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  ">
                        {{$t('Total')}}
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  ">
                        {{$t('Date_Order')}}
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  ">
                        {{$t('Date_Expier')}}
                    </p>
                    <p class="text-16 font-weight-bold text-black  text-start w-100  " >
                        {{$t('Status_Order')}}
                    </p>
                    <p class="text-16 font-weight-regular text-black    w-30 " >
                       <Icon icon="ph:dots-three-outline-duotone"/>
                    </p>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
.tableAll{
    overflow-x:scroll;
    // width: 500px
}
</style>
