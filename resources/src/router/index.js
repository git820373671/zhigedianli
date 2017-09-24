import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import Resources from 'vue-resource'
import 'iview/dist/styles/iview.css'
import '../assets/css/style.css'
import '../assets/script/layout'
import Index from '../components/index/index.vue'

Vue.use(Resources)
Vue.use(Router)
Vue.use(iView)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
