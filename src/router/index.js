import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import YoutubeComponent from '@/components/YoutubeComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/youtube',
      name: 'YoutubeComponent',
      component: YoutubeComponent
    }
  ]
})
