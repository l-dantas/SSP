<template>
    <div>
        <section class="form-new-post">
            <h2 v-if="error">{{ error }}</h2>
            <form action="/">
                <div>
                    <label for="author">Author</label>
                    <input type="text" name="author" placeholder="author" autocomplete="off" required v-model="author">
                </div>
                <div>
                    <label for="email">E-mail</label>
                    <input type="email" name="email" placeholder="E-mail" autocomplete="off" required v-model="email">
                </div>
                
                <label for="title">Title</label>
                <input type="text" name="title" placeholder="Title" autocomplete="off" required v-model="title">
                <label for="description">Description</label>
                <textarea name="description" placeholder="Description here..." required v-model="description"></textarea>
                <button v-on:click="createPost">Send</button>
            </form>
        </section>
    </div>
</template>

<script>
// Service of Get, Post
import PostService from '../services/PostService';

export default {
    name: 'NewPost',
    data() {
        return {
            author: '',
            email: '',
            title: '',
            description: '',
            error: '',
        }
    },
    methods: {
        createPost(e) {
            e.preventDefault();
            try {
                PostService.createPost(this.title, this.author, this.email, this.description);
            } catch(err) {
                this.error = err.message;
            }
            this.title = '';
            this.author = '';
            this.email = '';
            this.description = '';

        }
    },
    
}
</script>

<style scoped>
.form-new-post {
    width: 100%;
    margin: 20px 0;
}
.form-new-post > form label {
    display: block;
}
.form-new-post > form div:first-child { 
    float: left;
    width: 49%;
}
.form-new-post > form div:nth-child(2) { float: right; width: 49%;}
.form-new-post > form input {
    width: 100%;
    margin-right: 2%;
    padding: 3px 10px;
    border: 1px solid rgb(169, 169, 169);;
    border-radius: 5px;
}
.form-new-post > form textarea {
    resize: none;
    width: 100%;
    height: 90px;
    padding: 2px 9px;
    border-radius: 5px;
}
.form-new-post > form input[name="title"] { width: 100%; }

.form-new-post > form button {
    border: none;

    padding: 3px 30px;
    border-radius: 5px;

    background: green;
    color: white;
    font-weight: bold;
    float: right;

    transition: all .1s ease-in-out .1s;
}
.form-new-post > form button:hover {
    box-shadow: 2px 2px 5px #00000020;
    transform: scale(1.03);
}

</style>
