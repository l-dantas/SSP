import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import NewPost from './views/NewPost.vue';
import PostDetail from './views/PostDetail.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new-post',
      name: 'new-post',
      component: NewPost,
    },
    {
      path: '/post-detail/:id',
      name: 'post-detail',
      props: true,
      component: PostDetail,
    }
  ]
})
