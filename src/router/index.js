import Vue from 'vue'
import VueRouter from 'vue-router'

import facWei from '../components/FuzzyComprEval/facWei.vue'
import satisPie from '../components/FuzzyComprEval/satisPie.vue'

import descStatistics from '../components/Oprobit/descStatistics.vue'
import descAdmin from '../components/Oprobit/descStatistics/admin.vue'
import descTea from '../components/Oprobit/descStatistics/teacher.vue'
import descStu from '../components/Oprobit/descStatistics/student.vue'

import oprobitRes from '../components/Oprobit/oprobitRes.vue'

import learnCurve from '../components/RandomForest/learnCurve.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: facWei
  },
  {
    path: '/facWei',
    name: 'facWei',
    component: facWei
  },
  {
    path: '/satisPie',
    name: 'satisPie',
    component: satisPie
  },
  {
    path: '/descStatistics',
    name: 'descStatistics',
    component: descStatistics,
    children: [
      {
        path: '/',
        component: descAdmin
      },
      {
        path: '/descStatistics/admin',
        name: 'descAdmin',
        component: descAdmin
      },
      {
        path: '/descStatistics/teacher',
        name: 'descTea',
        component: descTea
      },
      {
        path: '/descStatistics/student',
        name: 'descStu',
        component: descStu
      },
    ]
  },
  {
    path: '/oprobitRes',
    name: 'oprobitRes',
    component: oprobitRes,

  },
  {
    path: '/learnCurve',
    name: 'learnCurve',
    component: learnCurve
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
