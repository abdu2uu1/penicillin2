<script lang="ts" setup >
import { useRoute } from 'vue-router';
import { global } from './store/global.ts'
import {storeToRefs} from 'pinia'
const {snackbar , loading} = storeToRefs(global())
const route = useRoute()
</script>
<template>
<div>
  <v-locale-provider rtl >
    <allLoading v-if="loading" />
     <v-snackbar
      :timeout="2000"
      :color="snackbar.color"
      elevation="24"
      v-model="snackbar.value"
    >
    {{ snackbar.text }}
    </v-snackbar>
    <v-row>
      <v-col v-if="route.name !=='login'" cols="2">
        <navbar/>
      </v-col>
      <v-col :cols="route.name ==='login'?12:10">
        <router-view></router-view>
      </v-col>
    </v-row>

  </v-locale-provider>
</div>
</template>

