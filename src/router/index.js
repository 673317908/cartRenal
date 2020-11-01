import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/user/index')
      },
      {
        path: '/security',
        name: 'Security',
        component: () => import('../views/security/index')
      },
      {
        path: '/password',
        name: 'Password',
        component: () => import('../views/security/password')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
