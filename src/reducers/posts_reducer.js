import { FETCH_POSTS } from '../actions/index'

const INITIAL_STATE = { all: [] }

const fetchPosts = (state, action) => {
  const posts = action.posts.map(item => {
    return item
  })
  return Object.assign({}, state, {
    all: posts
  })
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return fetchPosts(state, action)
    default:
      return state
  }
}
