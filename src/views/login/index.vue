<script lang="ts" setup>
import axios from "../../api/axios.ts";
import { useRouter } from "vue-router";
import { rules } from "../../plugins/utils.ts";
import { global } from '../../store/global.ts'
const {openSnackbar}  = global()
const router = useRouter();
const data = ref<object>({
  userNameOrPhoneNumber: null,
  password: null,
  idToken: "string",
  clientId: "string",
  clientType: "string",
});
const valid = ref<boolean>(false);
const loadingB = ref<boolean>(false);

function LogIn() {
  console.log(valid.value);
  loadingB.value = true;

  axios
    .post("Auth/Login", data.value)
    .then((res) => {
      window.localStorage.setItem("accessToken", res.data.result.accessToken);

      router.push({ name: "home" });
    })
    .catch((err) => {
      loadingB.value = false;
    })
    .finally(() => {
      loadingB.value = false;
    });
}

function validation() {
  if (valid.value) {
    LogIn();
  }
}
onMounted(() => {
  let accessToken = window.localStorage.getItem("accessToken");
  if (accessToken !== null) {
    router.push({ name: "home" });
  }
});
</script>
<template>
  <div class="bg-   d-flex align-center justify-center login">
    <div class="bg-ColorGray pa-10 rounded-lg">
      <div class="d-flex align-center justify-center mb-5">
        <div class="logo">
          <img src="../../assets/image/LogoPencilin.png" />
        </div>
      </div>
      <v-form v-model="valid" @submit.prevent="validation()">
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="اسم المستخدم او رقم الهاتف"
              :rules="[rules.required]"
              v-model="data.userNameOrPhoneNumber"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              label="كلمة السر"
              :rules="[rules.required]"
              v-model="data.password"
              type="password"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn
              :loading="loadingB"
              block
              class="bg-ColorBlue"
              type="submit"
              >{{ $t("Log_in") }}</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.login {
  height: 100vh;
}
</style>
