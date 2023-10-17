<script lang="ts" setup></script>
<template>
  <v-container fluid>
    <div class="mb-10">
      <topUser />
    </div>
    <div class="my-5 mx-5">
        <p>تعديل الحساب</p>
    </div>
    <div class="EditUser pa-5 rounded-xl bg-ColorGray">
    
        <v-form>
            <v-row>
                <v-col cols="9">
                    <v-row>
                        <v-col cols="6">
                    <v-text-field label="الاسم الكامل" ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                    <v-text-field label="اسم المستخدم" ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                    <v-text-field label="البريد الاكتروني" ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                    <v-text-field type="number" label="رقم الهاتف" ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-btn class="bg-ColorBlue rounded-lg" elevation=0 >{{$t('Edit_All')}}</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col  cols="3">
                    <div class="ContainerImageUload">
                    <img src="../../assets/image/UploadImage.png" class="ImageConfig" />

                    </div>
                </v-col>
            </v-row>
        </v-form>
    </div>
    
    <div class="my-10 mx-5">
        <p>تعديل كلمة السر</p>
    </div>
    <div class="EditPassword   pa-5 rounded-xl bg-ColorGray">
      
        <v-form>
            <v-row>
                <v-col cols="9">
                    <v-row>
                        <v-col cols="6">
                    <v-text-field label="كلمة السر القديمة " ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                    <v-text-field label="كلمة السر الجديدة" ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                    <v-text-field label="اعد كتابة كلمة السر الجديدة" ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-btn class="bg-ColorBlue rounded-lg" elevation=0 >{{$t('Edit_All')}}</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
           
            </v-row>
        </v-form>
    </div>
  </v-container>
</template>

<style lang="scss" >
.ContainerImageUload{
    width: 200px;
    height: 200px;
    .ImageConfig{
          width: 100%;
        height: 100%;
        object-fit:cover;
    }
}

</style>
