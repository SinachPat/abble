import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '@/views/SignInView.vue'
import CreateWorkspaceView from '@/views/CreateWorkspaceView.vue'
import TimelineView from '@/views/TimelineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin-home',
      component: SignInView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView,
    },
    {
      path: '/create-workspace',
      name: 'createWorkspace',
      component: CreateWorkspaceView,
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: TimelineView,
    }

  ],
})

export default router
