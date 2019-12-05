// single pages
import HomePage from '../pages/Home.vue'
import NotFoundPage from '../pages/NotFound.vue'

import UserPage from '../pages/User'
import UserInfor from '../components/user/Infor'
import UserAddress from '../components/user/Address'
import UserPassword from '../components/user/Password'
import UserProdcuts from '../components/user/Products'
import UserFavoriteProducts from '../components/user/FavoriteProducts'

import AdminPage from '../pages/Admin'
import AdminProducts from '../components/admin/Products'
import AdminCategories from '../components/admin/Categories'
import AdminDashboard from '../components/admin/Dashboard'
import AdminEditors from '../components/admin/Editors'
import AdminOrders from '../components/admin/Orders'


import ProductDetailPage from '../pages/ProductDetail'
import ProductByCategory from '../pages/ProductByCategory'
import SearchProduct from '../pages/SearchProduct'


import { DOMAIN_TITLE } from '../.env'
import CartDetail from "../components/cart/CartDetail";

import $store from'../store'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: HomePage,
    meta: { title: `${DOMAIN_TITLE} | home` }
  },
  {
    path: '/user',
    component: UserPage,
    meta: { title: `${DOMAIN_TITLE} | Thông tin cá nhân`, isAuth: true },
    children: [
      {
        path: 'information',
        name: 'user-infor',
        component: UserInfor
      },
      {
        path: 'address',
        name: 'user-address',
        component: UserAddress
      },
      {
        path: 'password',
        name: 'user-password',
        component: UserPassword
      },
      {
        path: 'products',
        name: 'user-products',
        component: UserProdcuts
      },
      {
        path: 'favorite-products',
        name: 'user-favorite-products',
        component: UserFavoriteProducts
      },
    ],
  },
  {
    path: '/product/:id',
    name: 'product-detail-page',
    props: true,
    component: ProductDetailPage,
  },
  {
    path: '/carts',
    name: 'carts-detail',
    component: CartDetail,
    meta: { title: `${DOMAIN_TITLE} | carts`, isAuth: true }
  },
  {
    path: '/product-by-category/:categoryId',
    name: 'product-by-category',
    props: true,
    component: ProductByCategory,
  },
  {
    path: '/product-search/:keyword',
    name: 'product-search',
    props: true,
    component: SearchProduct,
  },
  {
    path: '/admin',
    name: 'admin-page',
    component: AdminPage,
    meta: { title: `${DOMAIN_TITLE} | Quản lý `, isAuth: true },
    beforeEnter: (to, from , next) => {
      const userRole = $store.state.user.currentUser.role;
      if (userRole !== 3) {
        next();
      } else {
        next({name : 'index'})
      }
    },
    redirect: { name: 'admin-dashboard'},
    children: [
      {
        path: 'dashboard',
        name: 'admin-dashboard',
          component: AdminDashboard
      },
      {
        path: 'products',
        name: 'admin-products',
        component: AdminProducts
      },
      {
        path: 'categories',
        name: 'admin-categories',
        component: AdminCategories
      },
      {
        path: 'editors',
        name: 'admin-editors',
        component: AdminEditors
      },
      {
        path: 'orders',
        name: 'admin-orders',
        component: AdminOrders
      }
    ]
  },
  {
    path: '*',
    component: NotFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  }
]
