import { FETCH_POSITIONS } from '../actions/index'

const INITIAL_STATE = { all: [], positions: null }

const fetchPositions = (state, action) => {
  const positions = action.positions.map(item => {
    return item
  })
  return Object.assign({}, state, {
    all: positions
  })
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSITIONS:
      return fetchPositions(state, action)
    default:
      return state
  }
}
