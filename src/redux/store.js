import { combineReducers } from 'redux';

import postsReducers from './modules/posts/reducers';

export default combineReducers({
    posts: postsReducers
});