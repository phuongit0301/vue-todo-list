import { createRouter, createWebHistory } from 'vue-router'
import AllTasks from '@/views/AllTasks'
import CompletedTasks from '@/views/CompletedTasks'
import InProgressTasks from '@/views/InProgressTasks'

const routes = [
  { path: '/', component: AllTasks, alias: '/all' },
  { path: '/completed', component: CompletedTasks },
  { path: '/in-progress', component: InProgressTasks }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
