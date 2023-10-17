
<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
<template>
   <!-- <v-container> -->
      <div>
         <div class="mb-10">
            <topUser/>
        </div>
      <div class="mb-5 mx-4">
         <p>{{ $t("Title_Order_pharmcy") }}</p>
      </div>
        <div  class=" mt-6 pa-3 rounded-xl bg-ColorGray">
         <AllPharmacyTable  :edite="false" />
        </div>
      </div>
   <!-- </v-container> -->
</template>

<style lang="scss" scoped>

</style>