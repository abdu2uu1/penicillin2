<script lang="ts" setup>
import { LinksNavbar } from "../../types/components";
import { useRoute } from "vue-router";
const showLinkk = ref<boolean>(false);
const route = useRoute();
// morLinks

const AllLinks = ref<LinksNavbar[]>([
  {
    name: "Navbar_Home",
    route: "home",
    logo: "ph:house-bold",
    path:'home'
  },
  {
    name: "Navbar_Pharmacy",
    route: "AllPharmacy",
    logo: "healthicons:pharmacy-outline",
    morLinks: [
      {
        name: "Navbar__All",
        route: "AllPharmacy",
        path:'pharmacy'
      },
      // {
      //   name: "Navbar__Order",
      //   route: "AllOrder",
      //   path:'AllOrder'
      // },
      {
        name: "Navbar_Stopped",
        route: "AllStoped",
        path:'AllStoped'
      },
      ],
      path:'pharmacy'
  },
  {
    name: "Navbar_Product",
    route: "product",
      logo: "ph:pill",
    path:'product',
    
  },
  {
    name: "Navbar_Expired",
    route: "expired",
      logo: "material-symbols:pill-off-outline",
    path:'expired'
  },
  {
    name: "Navbar__Order",
    route: "order",
      logo: "uil:cart",
    path:'order'
  },
  {
    name: "Navbar_Delegates",
    route: "delegates",
      logo: "ph:user-bold",
    path:'delegates'
  },
  {
    name: "Navbar_Country",
    route: "country",
      logo: "ic:outline-place",
    path:'country'
  },
  {
    name: "Navbar_Specialties",
    route: "specialities",
      logo: "iconamoon:category-light",
    path:'specialities'
  },
  {
    name: "Navbar_Admins",
    route: "admins",
      logo: "eos-icons:admin-outlined",
    path:'admin'
  },
]);
</script>
<template>
  <div class="mt-6 d-flex flex-column">
    <div v-for="(item, index) in AllLinks" :key="index">
      <router-link
        @click="showLinkk = false"
        v-if="index !== 1"
        class="px-1 py-3 mt-1 link rounded-lg d-flex align-center"
        :class="
        index  === 0 ?
            route.name ==='home'?
            ['bg-black', 'text-white']
            : ['text-ColorTextGray']:
          route.path.includes(item.path)
            ? ['bg-black', 'text-white']
            : ['text-ColorTextGray']
        "
        :to="{ name: item.route }"
      >
        <Icon
          :icon="item.logo"
          class="me-2"
          :class="
          index === 0 ?
          
            route.name ==='home'? ['text-blue']
              : ['text-ColorTextGray']:
            route.path.includes(item.path)
              ? ['text-blue']
              : ['text-ColorTextGray']
          "
          width="20"
        />
        <span>
          {{ $t(item.name) }}
        </span>
      </router-link>
      <div v-else @click="showLinkk = true" class="cursPointer">
        <div
          class="px-1 py-3 mt-1 link rounded-lg d-flex align-center justify-space-between"
          :class="
            route.path.includes(item.path)
              ? ['bg-black', 'text-white']
              : ['text-ColorTextGray']
          "
        >
        <div class="d-flex">
          <Icon
            :icon="item.logo"
            class="me-2"
            :class="
              route.path.includes(item.path)
                ? ['text-blue']
                : ['text-ColorTextGray']
            "
            width="20"
          />
          <p>{{ $t(item.name) }}</p>

        </div>
            <icon icon="formkit:down" width="30" :class=" showLinkk ?'down':'up'" />
        </div>
        <v-expand-transition>
          <div v-show="showLinkk"  class="w-100">
            <router-link :to="{name:NestedItem.route}" v-for="(NestedItem,indexTwo) in item.morLinks" :key="indexTwo" class="px-4 py-1 mt-1 link rounded-lg d-flex align-center  justify-space-bewteen" >
            <div class="d-flex align-center justify-space-bewteen">
            <icon icon="ph:dot-outline-fill" width="30" :class="route.name === NestedItem.route?'text-ColorBlue':'text-ColorTextGray'" />
            <span class="text-ColorTextGray">
              {{ $t(NestedItem.name) }}
            </span>
            </div>
            <div v-if="indexTwo === 1"  class="bg-ColorBlue notfi d-flex align-center justify-center rounded-xl ms-auto ">
                <p>6</p>
            </div>

            </router-link>
          </div>
        </v-expand-transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link {
  text-decoration: none;
  transition: all 0.6s ease-in-out;
}
.notfi{
    width: 20px;
    height: 20px;
}
.down{
    transform: rotate(180deg);
    transition: all .5s
}
.up{
transform: rotate(360deg);
    transition: all .5s
}
</style>
