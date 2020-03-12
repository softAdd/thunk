import {
    SET_POSTS
} from './constants'

export const setPosts = (posts) => { return { type: SET_POSTS, posts } }

export const getPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(response => {
            dispatch({ type: SET_POSTS, posts: response })
        })
        .catch(() => console.error('Error while fetching posts.'))
}