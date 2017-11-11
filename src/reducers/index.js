import { combineReducers } from 'redux'
import PostsReducer from './posts_reducer'
import PositionsReducer from './positions_reducer'

const rootReducer = combineReducers({
  posts: PostsReducer,
  positions: PositionsReducer
})

export default rootReducer
