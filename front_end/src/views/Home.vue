<template>
  <div id="app">
    
    <h3 v-if="error.show">{{ error.message }}</h3>

    <Posts v-bind:posts="posts"  class="ssp-list-posts" />

  </div>
</template>

<script>
import Posts from '../components/Posts.vue';

// Service of Get, Post
import PostService from '../services/PostService';

export default {
  name: 'viewHome',
  components: {
    Posts,
  },
  data() {
    return {
      posts: [], //aqui vai um array de posts
      error: {
        show:false,
        message: '',
      },
    }
  },

  methods: { },

  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      if(err) {
        this.error.show = true;
        this.error.message = err.message;
      } else {
        this.error.show = false;
        this.error.message = '';
      }
    }
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Offside|Open+Sans');

html, body,
nav, main, section, article, div,
h1, h2, h3, h4, p, 
form, label, input, textarea, button, a,
ul, li {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    line-height: 2.3em;
    font-family: 'Open Sans', sans-serif;
}
html, body, #app{ width: 100%; height: 100%; }
button { cursor: pointer;}
.ssp-list-posts {
    width: 100%;
    height: auto;
    padding: 0 8%;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
</style>
