<template>
    <div>

        <article class="posts">
            <h2>{{ post.title | limitCharTitle | firstLetterUpper }}</h2>
            <p>{{ post.description | limitCharDesc | firstLetterUpper }}</p>
            <router-link :to="`/post-detail/${post.id}`">
                <button>
                    <img src="../assets/icon_view.png" alt="Icon view post detail">
                </button>
            </router-link>
        </article>

    </div>
</template>

<script>

export default {
    name: 'Post',
    props: ['post'],
}
</script>

<style scoped>
    .posts {
        width: 470px;
        height: 160px;
        padding: 10px 20px;
        margin: 15px;
        border-radius: 10px;

        box-shadow: 2px 2px 10px #00000020;
    }
    .posts h2 {
        width: 300px;
        line-height: 1.2em;
    }
    .posts p {
        width: 100%;
        height: 105px;
        text-align: justify;
        font-size: 14px;
    }

    .posts button {
        border: none;
        background: none;

        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-bottom: 10px;

        background-color: #1565C0;
        box-shadow: 3px 2px 10px #00000020;

        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;

        position: relative;
        /* top: -3px;
        left: 295px; */
        float: right;

        cursor: pointer;
    }
    .posts button:hover { background-color: #135BAD; }
    .posts button:active { box-shadow: none; }


    .posts button img {
        width: 20px;
        height: 20px;
    }
</style>