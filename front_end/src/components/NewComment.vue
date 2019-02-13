<template>
    <div>
        <section class="form-comment">
            <h2>Leave your comment</h2>
            <form>
                <div>
                    <label for="author">Name</label>
                    <input type="text" name="author" v-model="author" placeholder="Author" autocomplete="off" required>
                </div>
                <div>
                    <label for="email">E-mail</label>
                    <input type="email" name="email" v-model="email" placeholder="E-mail" autocomplete="off" required>
                </div>
                
                <label for="Subject">Subject</label>
                <input type="text" name="subject" v-model="subject" placeholder="Subject" autocomplete="off" required>
                
                <label for="comment">Comment</label>
                <textarea name="comment" v-model="comment" placeholder="Comment here..." required></textarea>
                <button v-on:click="createComment">Comment</button>
            </form>
        </section>        
    </div>
</template>

<script>
// Service of Get, Post
import PostService from '../services/PostService';

export default {
    name: 'NewComment',
    props: ['id'],
    data() {
        return {
            author: '',
            email: '',
            subject: '',
            comment: '',
            error: ''
        }
    },
    methods: {
        createComment(e) {
            e.preventDefault();
            try{
                PostService.createNewComment(this.id, this.author, this.email, this.subject, this.comment)
            }catch(err) {
                this.error = err.message;
            }
            this.author, this.email, this.subject, this.comment = '';
        }
    }

}
</script>

<style scoped>
.form-comment {
    margin-top: 30px;
}

.form-comment > form label {
    display: block;
}
.form-comment > form div:first-child { 
    float: left;
    width: 49%;
}
.form-comment > form div:nth-child(2) { float: right; width: 49%;}
.form-comment > form input {
    width: 100%;
    margin-right: 2%;
    padding: 3px 10px;
    border: 1px solid rgb(169, 169, 169);;
    border-radius: 5px;
}
.form-comment > form textarea {
    resize: none;
    width: 100%;
    height: 90px;
    padding: 2px 9px;
    border-radius: 5px;
}
.form-comment > form input[name="subject"] { width: 100%; }

.form-comment > form button {
    border: none;

    padding: 3px 30px;
    border-radius: 5px;
    position: relative;
    left: 100%;
    transform: translateX(-100%);

    background: green;
    color: white;
    font-weight: bold;

    transition: all .1s ease-in-out .1s;
}
.form-comment > form button:hover {
    box-shadow: 2px 2px 5px #00000020;
    transform: translateX(-100%) scale(1.03);
}

</style>
