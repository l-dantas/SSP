<template>
    <div>
        <router-link to="/">
            <button>
                <img src="../assets/icon_arrow.png" alt="Icon back">
            </button>
        </router-link>
        <section class="post-detail">
            <h2>{{ pDetail.post.title | firstLetterUpper }}</h2>
            <p>Author: {{ pDetail.post.author }} / E-mail: {{ pDetail.post.email }}</p>
            <main>
                <p>{{ pDetail.post.description | firstLetterUpper }}</p>
                <p>{{ pDetail.post.createdAt | datePost }}</p>
            </main>
        </section>
    </div>
</template>

<script>
export default {
    name: 'CompPostDetail',
    props: ['pDetail'],
}
</script>


<style scoped>
.post button:first-child {
    border: none;

    background: #1565C0;
    box-shadow: 2px 2px 5px #00000020;

    width: 40px;
    height: 40px;
    border-radius: 50%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    position: relative;
    left: 105.5%;

}
.post button:first-child:hover { background-color: #135BAD; }
.post button:first-child:active { box-shadow: none; }
.post button:first-child img {
    width: 25px;
    height: 25px;
}
.post-detail h2 {
    line-height: 1.5em;
}
.post-detail > p { font-style: italic; }
.post-detail > main { 
    border: 1px dashed darkgray; 
    border-radius: 5px;
    padding: 20px; 
}
.post-detail > main p { text-indent: 2em; text-align: justify; }
.post-detail > main p:last-child { text-align: right;  font-style: italic;}

</style>