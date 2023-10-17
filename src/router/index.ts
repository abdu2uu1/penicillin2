import { createRouter, createWebHistory } from "vue-router";
import home from '../views/home/index.vue'
import pharmacy from '../views/pharmacy/index.vue'
import AllParmacy from '../views/pharmacy/AllPharmcy.vue'
import AllOrder from '../views/pharmacy/AllOrder.vue'
import AllStoped from '../views/pharmacy/AllStoped.vue'
import ShowPharmcy from '../views/pharmacy/ShowPharmcy.vue'
import ShowPharmcyPill from '../views/pharmacy/showPharmcyPill.vue'
import product from '../views/product/index.vue'
import expired from '../views/expired/index.vue'
import showExpired from '../views/expired/showSingleExpired.vue'
import order from '../views/order/index.vue'
import showOrder from '../views/order/ShowOrder.vue'
import delegates from '../views/delegates/index.vue'
import showDelegates from '../views/delegates/showDelegates.vue'
import country from '../views/country/index.vue'
import Showountry from '../views/country/showCountry.vue'
import specialities from '../views/specialties/index.vue'
import admins from '../views/admins/index.vue'
import editUser from '../views/admins/editUser.vue'
import login from '../views/login/index.vue'
import NotFound from '../views/notFound/notFound.vue'
const routes:Array<Object> = [
    {
        path: '/',
        name: 'home',
        component:home,
        meta:{
            Auth:true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: login,     
    },
    {
        path: '/editUser',
        name: 'editUser',
        component:editUser,
        meta:{
            Auth:true
        }
    },
    {
        path: '/pharmacy',
        name: 'pharmacy',
        component: pharmacy,
        meta:{
            Auth:true
        },
        children: [
            {
                path: '',
                name: 'AllPharmacy',
                component:AllParmacy,
                meta:{
                    Auth:true
                }
            },
            {
                path: 'AllOrder',
                name: 'AllOrder',
                component:AllOrder,
                meta:{
                    Auth:true
                }
            },
            {
                path: 'AllStoped',
                name: 'AllStoped',
                component:AllStoped,
                meta:{
                    Auth:true
                }
            },
            
        ],
    },
    {
        path: '/ShowPharmcy/:id',
        name: 'ShowPharmcy', 
        component:ShowPharmcy,
        meta:{
            Auth:true
        }
    },
    {
        path: '/ShowPill/:idTwo',
        name: 'ShowPharmcyPill',
        component:ShowPharmcyPill,
        meta:{
            Auth:true
        }
    },
    {
        path: '/product',
        name: 'product',
        component:product,
        meta:{
            Auth:true
        }
    },
    {
        path: '/expired',
        name: 'expired',
        component:expired,
        meta:{
            Auth:true
        }
    },
    {
        path: '/showExpired/:id',
        name: 'showExpired',
        component:showExpired,
        meta:{
            Auth:true
        }
    },
    {
        path: '/order',
        name: 'order',
        component:order,
        meta:{
            Auth:true
        }
    },
    {
        path: '/showOrder/:id',
        name: 'showOrder',
        component:showOrder,
        meta:{
            Auth:true
        }
    },
    {
        path: '/delegates',
        name: 'delegates',
        component:delegates,
        meta:{
            Auth:true
        }
    },
    {
        path: '/delegates/:id',
        name: 'showDelegates',
        component:showDelegates,
        meta:{
            Auth:true
        }
    },
    {
        path: '/country',
        name: 'country',
        component:country,
        meta:{
            Auth:true
        }
    },
    {
        path: '/country/:id',
        name: 'Showountry',
        component:Showountry,
        meta:{
            Auth:true
        }
    },
    {
        path: '/specialities',
        name: 'specialities',
        component:specialities,
        meta:{
            Auth:true
        }
    },
    {
        path: '/admins',
        name: 'admins',
        component:admins,
        meta:{
            Auth:true
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component:NotFound,
        
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
     scrollBehavior(to, from, savedPosition) {
        return {top:0}
    }
})
router.beforeEach((to, from, next) => {
    let loading = document.getElementById('ContanierLoading')
    loading.style.display = 'none'
    let token = window.localStorage.getItem('accessToken')
    
    if (to.name !=='login' && token  === null) {
        next({name:'login'})
    } else {
       next()
    }
})
export default router;