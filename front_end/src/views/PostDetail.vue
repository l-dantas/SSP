<template>
    <div class="post">
        
        <CompPostDetail v-bind:pDetail="pDetail" />
        
        <NewComment v-bind:id="id" />

        <Seperator />

        <Comments v-bind:comments="pDetail.comments" />

    </div>
</template>

<script>
import CompPostDetail from '../components/CompPostDetail.vue';
import NewComment from '../components/NewComment.vue';
import Seperator from '../components/Seperator.vue';
import Comments from '../components/Comments.vue';

// Service of Get, Post
import PostService from '../services/PostService';

export default {
    name: 'PostDetail',
    components: {
        CompPostDetail,
        NewComment,
        Seperator,
        Comments,
    },
    props: ['id'],
    data() {
        return {
            pDetail: null,
            error: '',
        }
    },
    
    async created() {
        try {
            this.pDetail = await PostService.getPostById(this.id);
        } catch(err) {
            this.error = err;
        }
    }

}
</script>

<style scoped>
.post {
    width: 1024px;
    min-height: 100%;
    position: absolute;
    top: 11.96%;
    left: 50%;
    transform: translateX(-50%);
    padding: 2% 5%;

    box-shadow: 0 0 10px #00000030;
}

</style>
