import { createRouter, createWebHistory } from 'vue-router'
import UserPage from '@/views/UserPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import Bt3 from '@/components/Bt3.vue'
import Bt5Page from '@/components/bt5/Bt5Page.vue'
import Login from '@/components/bt5/Login.vue'
import Bt6 from '@/components/Bt6/Bt6.vue'
import User from '@/components/Bt6/User.vue'
import ListPost from '@/components/Bt7/ListPost.vue'
import PostDetail from '@/components/Bt7/PostDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: ['/home', '/home-page',],
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
      path: '/user/:id',
      name: 'userPage',
      redirect: to => `/profile/${to.params.id}`,
      component: () => import(/* webpackChunkName: "userPage" */ '../views/UserPage.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ '../views/ProfilePage.vue')
    },
    {
      path: '/listProduct',
      name: 'listProduct',
      component: () => import(/* webpackChunkName: "listProduct" */ '../views/ListProduct.vue')
    },
    {
      path: '/dashBoard',
      name: 'dashBoard',
      component: () => import(/* webpackChunkName: "dashBoard" */ '../views/DashBorad.vue')
    },
    {
      path: "/bt3",
      name: "bt3",
      component: Bt3,
    },
    {
      path: "/bt5",
      name: "bt5",
      component: Bt5Page,
    },
    {
      path: "/bt5",
      name: "bt5",
      component: Bt5Page,
    },
    {
      path: "/bt6",
      component: Bt6,
      children: [
        { path: "user", component: User }]
    },
    {
      path: "/posts",
      component: ListPost,
    },
    {
      path: "/postDetail",
      name: "postDetail",
      component: () =>
        import(
          /** webpackChunkName:"postDetail" */ "../components/Bt7/PostDetail.vue"
        ),
    },
    {
      path: "/listProduct",
      name: "listProduct",
      component: () =>
        import(
          /** webpackChunkName:"listProduct" */ "../components/Bt8/ListProduct.vue"
        ),
    },
    {
      path: "/product-detail/:id",
      component: () =>
        import(
          /** webpackChunkName:"listProduct" */ "../components/Bt8/ProductDetail.vue"
        ),
    },
    {
      path: "/Bt9",
      name: "bt9",
      component: () =>
        import(/** webpackChunkName:"bt9" */ "../components/Bt9.vue"),
    },
    {
      path: "/Bt10",
      name: "bt10",
      component: () =>
        import(/** webpackChunkName:"bt10" */ "../components/Bt10.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import(/* webpackChunkName: "notFound" */ '../components/Bt4.vue')
    }
  ]
})

// tạo cơ chế bảo vệ route 
router.beforeEach((to, from, next) => {
  // const company = prompt("nhâp địa chỉ mạng ")
  // const password = prompt("nhâp mật khẩu  ")
  const isLogin = false
  if (to.name === "/dashBoard" && !isLogin) {
    //điều hướng về trang chủ nếu ch đăng nhập
    next("/")
  } else {
    //cho phép truy cập vào dash bord 
    next()
  }

})

export default router
