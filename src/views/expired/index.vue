<script setup></script>
<template>
  <v-container fluid>
    <div class="mb-10">
      <topUser :showSearchFilter="true" />
    </div>
    <div class="mb-5 mx-4">
      <p>{{ $t("Expired_Title") }}</p>
    </div>
    <div class="mt-4">
        <AllPillTableExpired/>
    </div>
  </v-container>
</template>

<style lang="scss" scoped></style>
