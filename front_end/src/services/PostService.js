import axios from 'axios';


// API Url post
const urlPost = 'http://localhost:5000/post/'

class PostService {
    // Get Posts 
    static getPosts() {

        return axios.get(urlPost).then((res) => {
            return res.data;
        }).catch(err => {
            return err;
        })
    }

    // Get post by id
    static getPostById(id) {
        return axios.get(urlPost + id)
            .then(res => {
                return res.data
            }).catch(err => {
                return err
            });
    }

    // Create a new Post
    static createPost(title, author, email, description) {

        return axios.post(urlPost, { title, author, email, description })
            .then((res) => {
                return res;
            }).catch(err => {
                return err;
            })
    }
    // Create a comment in a post
    static createNewComment(id, author, email, subject, commentary) {
        return axios.post(urlPost + id, {author, email, subject, commentary})
            .then(res => {
                return res.data
            }).catch(err => {
                return err
            });
    }
}

export default PostService;