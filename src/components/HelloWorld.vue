<template>
  <div class="text-center mt-10">
    <img src="~@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2 class="my-3">Essential Links</h2>
    <ul class="list-reset flex justify-center mb-4">
      <li><a class="text-green no-underline mx-3" href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a class="text-green no-underline mx-3" href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a class="text-green no-underline mx-3" href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a class="text-green no-underline mx-3" href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a class="text-green no-underline mx-3" href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2 class="my-3">Ecosystem</h2>
    <ul class="list-reset flex justify-center mb-4">
      <li><a class="text-green no-underline mx-3" href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a class="text-green no-underline mx-3" href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a class="text-green no-underline mx-3" href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a class="text-green no-underline mx-3" href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h2 class="my-3">Popular Layouts</h2>
    <ul class="list-reset flex justify-center">
      <li><router-link class="text-green no-underline mx-3" to="/youtube">Youtube</router-link></li>
      <li><a class="text-green no-underline mx-3" href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a class="text-green no-underline mx-3" href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a class="text-green no-underline mx-3" href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>