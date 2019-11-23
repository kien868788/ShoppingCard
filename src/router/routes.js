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
import ProductDetailPage from '../pages/ProductDetail'


import { DOMAIN_TITLE } from '../.env'

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
    path: '/admin',
    component: AdminPage,
    meta: { title: `${DOMAIN_TITLE} | Quản lý `, isAuth: true },
  },
  {
    path: '*',
    component: NotFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  }
]
