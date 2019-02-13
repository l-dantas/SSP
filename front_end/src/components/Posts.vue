<template>
    <div>  

        <div v-bind:key="post.id" v-for="post in posts">
            <Post v-bind:post="post" />
        </div>

    </div>
</template>


<script>
import Post from './Post.vue';

export default {
    name:'Posts',
    components: {
        Post
    },
    props: ['posts'],
}
</script>


<style scoped>
    .ssp-list-posts {
        width: 100%;
        height: auto;
        padding: 0 8%;

        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
    }
</style>