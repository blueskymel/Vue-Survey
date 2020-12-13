import Vue from 'vue'
import VueRouter from 'vue-router'
import Surveys from '../views/Surveys.vue'
import SurveyQuestions from '../views/SurveyQuestions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Surveys',
    name: 'Surveys',
    component: Surveys,
  }
  ,
  {
    path: '/SurveyQuestions/:id',
    name: 'SurveyQuestions',
    component: SurveyQuestions,
  }
  ,
  {
    path: '/',
    redirect: '/Surveys',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
