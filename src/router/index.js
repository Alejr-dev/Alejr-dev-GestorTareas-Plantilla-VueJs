import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AddTask from '../views/AddTask.vue';
import FetchTasks from '../views/FetchTasks.vue';
import CombinedView from '../views/CombinedView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addtask',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/fetch-tasks',
    name: 'FetchTasks',
    component: FetchTasks
  },
  {
    path: '/combined-view',
    name: 'CombinedView',
    component: CombinedView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
