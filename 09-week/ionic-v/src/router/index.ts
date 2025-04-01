import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import PacientePage from '@/views/PacientePage.vue';
import MedicoPage from '@/views/MedicoPage.vue';
import RecepcionistaPage from '@/views/RecepcionistaPage.vue';
import EnfermeroPage from '@/views/EnfermeroPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/paciente',
    name: ' Paciente',
    component: PacientePage
  },
  {
    path: '/medico',
    name: 'Medico',
    component: MedicoPage
  },
  {
    path: '/recpcionista',
    name: 'Recepcionista',
    component: RecepcionistaPage
  },
  {
    path: '/enfermero',
    name: 'Enfermero',
    component: EnfermeroPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
