import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        component: () => import('../views/Main.vue'),
      },
      {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/Detail.vue'),
      },
      {
        path: '/testResult/:tableId/:type/:resultIndex',
        name: 'testResult',
        component: () => import('../views/TestResult.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { y: 0 };
  },
});

export default router;
