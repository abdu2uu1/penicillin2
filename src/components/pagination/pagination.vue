<script setup>
import { ref, reactive } from "vue";
const props = defineProps({
  page: Number,
  sizePage: Number,
  totalPages: Number,
});
let filters = reactive({
  page: 1,
  sizePage: 1,
});
function neP(n) {
  filters.page += n;
}
function PreP(n) {
  filters.page -= n;
}
</script>
<template>
  <div>
    <button
      :disabled="!(props.page > 1)"
      @click="$emit('pre', 1)"
      class="action-button"
    >
      <v-icon class="text-mainColor" icon="mdi-chevron-right"></v-icon>
    </button>
    <button
      class="text-mainColor pa-2"
      v-if="props.page > 2"
      @click="$emit('preTwo')"
    >
      {{ props.page - 2 }}
    </button>
    <!-- prev one  -->
    <button
      class="text-mainColor pa-1 px-3"
      v-if="props.page > 1"
      @click="$emit('preOne')"
    >
      {{ props.page - 1 }}
    </button>
    <!-- active -->
    <button class="bg-mainColor text-white pa-1 px-3">
      {{ props.page }}
    </button>
    <!-- next one -->
    <button
      class="text-mainColor pa-1 px-3"
      v-if="props.page < props.totalPages"
      @click="$emit('incOne')"
    >
      {{ props.page + 1 }}
    </button>
    <button
      class="text-mainColor pa-1 px-3"
      v-if="props.page < props.totalPages - 1"
      @click="$emit('incTwo')"
    >
      {{ props.page + 2 }}
    </button>
    <button
      class="action-button"
      :disabled="!(props.page < props.totalPages)"
      @click="$emit('inc', 1)"
    >
      <v-icon class="text-mainColor" icon="mdi-chevron-left"></v-icon>
    </button>
  </div>
</template>

<style lang="scss" scoped>
button {
  // background-color: white;
  border-radius: 5px;
  margin: 5px;
  color: black;
//   background-color: #3284BB;
}
.action-button:disabled {
  opacity: 0.4;
}
</style>
