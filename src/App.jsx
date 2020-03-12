import React from 'react';
import { connect } from 'react-redux';
import { getPosts, setPosts } from './redux/modules/posts/actions';

const App = (props) => {
    const cleanPosts = () => {
        props.onSetPosts([])
    }

    return (
        <div className="list">
            {props.posts &&
                <ul className="list__items">
                    {props.posts.map(post => {
                        return (
                            <li className="list__item" key={`${post.userId}-${post.id}`}>{post.title}</li>
                        )
                    })}
                </ul>
            }
            <div className="list__controls">
                <button className="common-button" onClick={props.onGetPosts}>get posts</button>
                <button className="common-button" onClick={cleanPosts}>clean</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetPosts: () => dispatch(getPosts()),
        onSetPosts: (posts) => dispatch(setPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);