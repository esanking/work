import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeNavbar.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/CompoundInterest',
        name: 'CompoundInterest',
        component: () => import('../views/CompoundInterest.vue'),
      },
      {
        path: '/TodoList',
        name: 'TodoList',
        component: () => import('../views/TodoList.vue'),
      },
      {
        path: '/Login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
      },
      {
        path: '/ClockIn/:UserName',
        name: 'ClockIn',
        component: () => import('../views/ClockIn.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/Login',
  },
];
export default createRouter({
  history: createWebHistory(),
  routes,
});
