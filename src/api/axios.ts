import axios from 'axios'
import { global } from '../store/global'

const axiosInstance = axios.create()

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (e) => {
        const { openSnackbar } = global()
        if (e.response.status === 500) {
            openSnackbar("هنالك مشكلة في الخادم يرجى المحاولة لاحقا",true , 'red')
        }
        if (e.response.status === 404) {
            openSnackbar("غير موجود",true , 'red')
            
        }
        return Promise.reject(e)
    }
)

axiosInstance.interceptors.request.use(
    (config) => {
        let token = window.localStorage.getItem("accessToken")
        config.baseURL= 'http://67.217.62.164:6018/api/'
        config.headers['Authorization'] = `Bearer ${token} `
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
export default axiosInstance;