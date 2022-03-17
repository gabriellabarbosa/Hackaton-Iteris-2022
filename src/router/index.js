import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/MeuInicio.vue'
import ClubeLista from '../views/ClubeLista.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: Inicio
  },
  {
    path: '/classificacao',
    name: 'Classificação',
    component: ClubeLista
  },
]

const router = new VueRouter({
  routes
})

export default router
