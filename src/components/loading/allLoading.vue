<script setup>

</script>
<template>
    <div class="allLoading">
        <v-progress-circular
        class="cirecu"
        :size="70"
      indeterminate
      color="ColorBlue"
    ></v-progress-circular>
    </div>
</template>


<style lang="scss" scoped>
.allLoading{
    background-color: rgba(0, 0, 0, 0.083);
    position: fixed;
    z-index: 777;
    width:100vw;
    min-height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .cirecu{
        z-index: 888;
    }
}
</style>