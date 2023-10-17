<script lang="ts" setup></script>
<template>
  <v-container>
    <div class="mb-10">
      <topUser />
    </div>
     <div class="my-10 mx-2">
        <p>{{ $t('Title_Show_Single_pharmcy') }}</p>
    </div>
    <div>
        <informationMedical :expier="true" />
    </div>
    <div class="ma-5">
        <h3>{{ $t('Information_Medical') }}</h3>
    </div>
    <div>
        <CardShowPharmcy :Stoped="false"  />
    </div>
  </v-container>
</template>

<style lang="scss" scoped></style>
