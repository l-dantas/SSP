<template>
    <div>
        <section class="comments">
            <article class="comment">
                <h3>{{ comment.subject | firstLetterUpper}}</h3>
                <p>Author: {{ comment.author }} / E-mail: {{ comment.email }}</p>
                <main>
                    <p>{{ comment.commentary | firstLetterUpper }}</p>
                </main>
                <p>{{ comment.createdAt | datePost }}</p>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Comment',
    props: ['comment'],
}
</script>

<style scoped>
.comment {
    padding: 20px 30px;
    border-radius: 10px;
    margin: 30px 0;

    background: #F3F3F3;
}
.comment h3 { margin-bottom: -15px;}
.comment > p { font-style: italic; }
.comment > p:last-child { text-align: right; }
.comment > main p { text-indent: 1.5em; } 
    
</style>