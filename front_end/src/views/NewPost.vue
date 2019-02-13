<template>
  <div class="new-post">
    
    <h2>New Post</h2>
    <p>Write a new post, with your opnion</p>
    
    <NewPost />

  </div>
</template>

<script>
import NewPost from '../components/NewPost.vue';

export default {
  name: 'viewNewPost',
  components: {
    NewPost,
  }
}
</script>

<style scoped>
.new-post {
  padding: 0 8%;
}
  
</style>
