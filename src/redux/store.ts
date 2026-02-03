import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as positionReducer } from './position/position.slice'

const reducers = combineReducers({
  position: positionReducer
})
export const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
