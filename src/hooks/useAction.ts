import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { actions as position } from '../redux/position/position.slice'

const rootActions = {
  ...position
}
export const useActions = () => {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
