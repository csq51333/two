import Vue from 'vue'
import Router from 'vue-router'
import seller from '../components/seller/seller.vue'
import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld'
    },
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/goods',
      component: goods
    }
  ],
  mode: 'history'
})
