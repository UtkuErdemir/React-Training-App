import { useDispatch } from 'react-redux'
import { changeCurrentRoute } from '../store/route/titleAction'

export function changeAppTitle (title) {
  const dispatch = useDispatch()
  dispatch(changeCurrentRoute(title))
}
