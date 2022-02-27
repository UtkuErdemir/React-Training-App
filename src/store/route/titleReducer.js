import { GET_TITLE, SET_TITLE } from './titleTypes'

export default (state = '', action) => {
  switch (action.type) {
    case GET_TITLE:
      return state
    case SET_TITLE:
      return action.title
    default: return state
  }
}
