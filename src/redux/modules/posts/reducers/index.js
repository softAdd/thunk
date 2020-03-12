import {
    SET_POSTS
} from '../constants';

export default function (state = [], action) {
    switch (action.type) {
        case SET_POSTS:
            return action.posts;
        default:
            return state;
    }
}