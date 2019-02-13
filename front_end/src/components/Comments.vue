<template>
    <div>

        <section v-bind:key="comment.id" v-for="comment in comments">
            <Comment v-bind:comment="comment" />
        </section>

    </div>    
</template>


<script>
import Comment from './Comment.vue';

export default {
    name: 'Comments', 
    components: {
        Comment,
    },
    props: ['comments']
}
</script>

<style scoped>

</style>
