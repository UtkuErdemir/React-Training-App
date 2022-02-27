import { GET_TITLE, SET_TITLE } from './titleTypes'

export const getCurrentRoute = () => ({
  type: GET_TITLE
})

export const changeCurrentRoute = (title) => ({
  type: SET_TITLE,
  title
})
