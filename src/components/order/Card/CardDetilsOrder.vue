<script lang="ts" setup>
import moment from "moment";
import { global } from "../../../store/global.ts";

const { selectOrderState } = global();
interface prop {
  item: object;
}
const props = defineProps<prop>();
</script>
<template>
  <div class="bg-ColorGray pa-5 rounded-xl pb-10 px-8 contanerCard">
    <h4>{{ $t("Detils_Order") }}</h4>
    <div class="d-flex justify-space-between text-center mt-5 detils">
      <div>
        <p class="text-ColorTextGray mb-2">{{ $t("From") }}</p>
        <p class="text-black">نسيم الحياة</p>
      </div>
      <div>
        <p class="text-ColorTextGray mb-2">{{ $t("To") }}</p>
        <p class="text-black">نسيم الحياة</p>
      </div>
      <div>
        <p class="text-ColorTextGray mb-2">{{ $t("Navbar_Delegates") }}</p>
        <p class="text-black">نسيم الحياة</p>
      </div>
      <div>
        <p class="text-ColorTextGray mb-2">{{ $t("Country") }}</p>
        <p class="text-black">{{ props.item.pharmacy?.zoon.name }}</p>
      </div>
      <div>
        <p class="text-ColorTextGray mb-2">{{ $t("Date") }}</p>
        <p class="text-black">{{ moment(props.item.createdAt).format("L") }}</p>
      </div>
      <div>
        <p class="text-ColorTextGray mb-2">{{ $t("Total_Count") }}</p>
        <p class="text-black">{{ props.item.total }}</p>
      </div>
      <div>
        <p class="text-ColorTextGray mb-2">{{ $t("Status_Order") }}</p>
        <div class="  text-black w-100 text-start">
          <p class=" statusOrder">
            <icon class="icon" icon="ph:dot-outline-fill" :class="`text-${selectOrderState(item.orderStatus ,true)}`" width="30" />
            {{ selectOrderState(item.orderStatus , false) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.statusOrder {
  position: relative;
  .icon {
    position: absolute;
    top: -10px;

    left: -20px;
  }
}
.contanerCard {
  height: 250px;
}
.detils {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 20%;
    height: 2px;
    background-color: #8f8f8f;
    // background-color: red;
    bottom: -80%;
    left: 40%;
  }
}
</style>
