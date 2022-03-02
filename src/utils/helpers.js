import { useDispatch } from 'react-redux'
import { changeCurrentRoute } from '../store/route/titleAction'

export function changeAppTitle (title) {
  const dispatch = useDispatch()
  dispatch(changeCurrentRoute(title))
}

export const costToString = (cost) => cost
  ? Object.entries(cost).map(element => `${element[0]}:${element[1]}`).join(',')
  : ''
