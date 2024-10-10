import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Contact from "@/views/Contact.vue";
import Bt1 from "../components/Bt1.vue";
import Bt2 from "../components/Bt2.vue";
import Bt3 from "@/components/Bt3.vue";
import Bt4 from "@/components/Bt4.vue";
import Bt5 from "@/components/Bt5.vue";
import Bt7 from "@/components/bt7-8/Bt7.vue";
import Bt8 from "@/components/bt7-8/Bt8.vue";
import UserDetail from "@/components/bt9/UserDetail.vue";
import UserList from "@/components/bt9/UserList.vue";
import Bt10 from "@/components/bt10/Bt10.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/contact", component: Contact },
  { path: "/bt1", component: Bt1 },
  { path: "/bt2", component: Bt2 },
  { path: "/bt3", component: Bt3 },
  { path: "/bt4", component: Bt4 },
  { path: "/bt5", component: Bt5 },
  ,
  {
    path: "/userList",
    component: UserList,
    children: [{ path: "userDetail", component: UserDetail }],
  },
  {
    path: "/bt8",
    component: Bt8,
    children: [{ path: "bt7", component: Bt7 }],
  },
  {
    path: "/bt10", component: Bt10, children: [
      { path: "profile", component: Profile },
      { path: "projects", component: Project },
      { path: "contact", component: Contact1 },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
