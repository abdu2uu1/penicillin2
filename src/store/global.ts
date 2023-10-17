import { defineStore } from 'pinia'
import axios from '../api/axios.ts'
export const global = defineStore('', () => {
    const snackbar = ref<object>({
        text: '',
        value: false,
        color:''
    })
    const loading = ref(false)
    const baseUrl ='http://67.217.62.164:6018/'

    // functions 
    function openSnackbar(text:string ='' , value:boolean =false, color:string =''):void{
        snackbar.value.text = text;
        snackbar.value.value = value;
        snackbar.value.color = color;
    }
    function openLoading(loadingT: boolean): void{
        
        loading.value = loadingT
    }
    // pharmacy type 
    const pharmacyType = ref<Array<object>>([])
    function getPharmcyType() {
        axios.get('General/GetEnumValues?enumName=pharmacyType').then((res) => {
            pharmacyType.value = res.data.result
        })
    }
    getPharmcyType()
    function selectPharmcyType(number:number) {
        for (let i = 0; i < pharmacyType.value.length; i++){
            if (number === pharmacyType.value[i].value){
                return pharmacyType.value[i].descAr
            }
        }
    }
    // dosage Form  
    const dosageFormAll = ref<Array<object>>([])
    function dosageForm():void {
        axios.get('General/GetEnumValues?enumName=dosageForm').then((res) => {
            dosageFormAll.value = res.data.result
        })
    }
    dosageForm()
    function selectdosageForm(number:number):string {
        for (let i = 0; i < dosageFormAll.value.length; i++){
            if (number === dosageFormAll.value[i].value){
                return dosageFormAll.value[i].descAr
            }
        }
    }
    //  order State  
    const OrderState = ref<Array<object>>([])
    function getOrderState():void {
        axios.get('General/GetEnumValues?enumName=orderStatus').then((res) => {
            OrderState.value = res.data.result
        })
    }
    getOrderState()
    function selectOrderState(number:number , icon:boolean):string {
        for (let i = 0; i < OrderState.value.length; i++){
            if (number === OrderState.value[i].value) {
                if (icon) {
                    return OrderState.value[i].name
                }
                return OrderState.value[i].descAr
            }
        }
    }
    //  specil type  
    const specialType = ref<Array<object>>([])
    function getSpecial():void {
        axios.get('General/GetEnumValues?enumName=specialtyType').then((res) => {
            specialType.value = res.data.result
        })
    }
    getSpecial()
    function selectSpecial(number:number):string {
        for (let i = 0; i < specialType.value.length; i++){
            if (number === specialType.value[i].value){
                return specialType.value[i].descAr
            }
        }
    }
    //  Gove
    const AllGove = ref<Array<object>>([])
    function getGove():void {
        axios.get('Governorates/GetGovernorates').then((res) => {
            AllGove.value = res.data.result
        })
    }
    getGove()
    //  class
    const AllClass = ref<Array<object>>([])
    function getClasse():void {
        axios.get('General/GetEnumValues?enumName=Class').then((res) => {
            AllClass.value = res.data.result
        })
    }
    getClasse()
   
  
    return {
        snackbar,
        baseUrl,
        AllClass,
        OrderState,
        dosageFormAll,
        loading,
        specialType,
        AllGove,
        pharmacyType,
        openSnackbar,
        openLoading,
        selectPharmcyType,
        selectdosageForm,
        selectOrderState,
        selectSpecial
    }
})