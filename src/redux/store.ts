import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as PointReducer } from './point/points.slice'

const reducers = combineReducers({
  point: PointReducer
})
export const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
