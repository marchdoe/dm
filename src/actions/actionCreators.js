import { FETCH_POSTS, FETCH_POSITIONS } from './index'
import { getEntries } from '../utils/contentful'

// Posts
// Add all posts for the index view
export const setPosts = posts => {
  return {
    type: FETCH_POSTS,
    posts
  }
}

// Fetch all posts
export const fetchPosts = () => {
  return function(dispatch, getState) {
    getEntries({
      content_type: '2wKn6yEnZewu2SCCkus4as',
      order: '-sys.updatedAt'
    })
      .then(response => {
        dispatch(setPosts(response.items))
      })
      .catch(error => {
        console.error('An error occured')
        console.error(error)
      })
  }
}

// Positions
// Add all positions for the index view
export const setPositions = positions => {
  return {
    type: FETCH_POSITIONS,
    positions
  }
}

// Fetch all positions
export const fetchPositions = () => {
  return function(dispatch, getState) {
    getEntries({
      content_type: 'positions',
      order: 'fields.order'
    })
      .then(response => {
        dispatch(setPositions(response.items))
      })
      .catch(error => {
        console.error('An error occured')
        console.error(error)
      })
  }
}
