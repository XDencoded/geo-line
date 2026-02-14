import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { actions as Point } from '../redux/point/points.slice'

const rootActions = {
  ...Point
}
export const useActions = () => {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
