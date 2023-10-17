
<script lang="ts" setup>
import emitter from '../../plugins/emitter';
const openDelete = ref<boolean>(false)
const openEdit = ref<boolean>(false)
const openAdd = ref<boolean>(false)
emitter.on('openDelete', () => {
    openDelete.value = true
})
emitter.on('openEdit', () => {
    openEdit.value = true
})
emitter.on('closeUse', () => {
    openDelete.value = false;
    openEdit.value = false;
    openAdd.value = false;
})
</script>
<template>
    <v-container fluid>
    <div class="mb-10">
      <topUser :showSearchFilter="true" :showFilter="true" />
    </div>
    <div class="mb-5 mx-4">
      <p>{{ $t("Admin_Title") }}</p>
    </div>
      <div class="mt-5 mx-5">
          <v-btn class="bg-ColorBlue rounded-lg" :elevation="0" @click="openAdd = true" >{{ $t('AddAll') }}</v-btn>
      </div>
     <v-row class="mt-9">
        <v-col v-for="i in 10 " :key="i" cols="3">
            <cardAdmin/>
        </v-col>
     </v-row>
          <v-dialog v-model="openDelete" width="500" >
            <ConfDialog MainParag="Delete_Message"  NameParag="abdullah" SubParag="" />
        </v-dialog>
        <v-dialog v-model="openEdit" width="500">
            <editAdmin/>
        </v-dialog>
        <v-dialog v-model="openAdd" width="500">
            <addAdmin/>
        </v-dialog>
    </v-container>
</template>

<style lang="scss" scoped>

</style>