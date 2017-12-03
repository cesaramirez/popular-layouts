import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import YoutubeComponent from '@/components/Layouts/YoutubeComponent'
import FacebookComponent from '@/components/Layouts/FacebookComponent'
import NetflixComponent from '@/components/Layouts/NetflixComponent'

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
    },
    {
      path: '/facebook',
      name: 'FacebookComponent',
      component: FacebookComponent
    },
    {
      path: '/netflix',
      name: 'NetflixComponent',
      component: NetflixComponent
    }
  ]
})
