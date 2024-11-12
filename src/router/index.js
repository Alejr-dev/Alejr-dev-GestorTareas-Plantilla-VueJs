import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TodoList from '../views/TodoList.vue';
import IssueList from '../views/IssueList.vue';
import TodosIssue from '../views/TodosIssue.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'), // Lazy-loaded
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList,
  },
  {
    path: '/issue-list',
    name: 'IssueList',
    component: IssueList,
  },
  {
    path: '/todos-issue',
    name: 'TodosIssue',
    component: TodosIssue,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
