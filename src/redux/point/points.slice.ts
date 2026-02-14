import { createSlice, type Slice } from '@reduxjs/toolkit'
import { ITEMS } from '../../db/items.data'
import type { TItem } from '../../types/item.type'

export interface IRedux {
  points: Omit<TItem[], 'type'>
  currentPoint: TItem | null
}

const initialState: IRedux = {
  points: ITEMS,
  currentPoint: null
}

export const counterSlice: Slice<IRedux> = createSlice({
  name: 'position',
  initialState,
  reducers: {
    changesPoint: (state, { payload: value }) => {
      const { type, ...rest } = value
      const index = state.points.findIndex(item => item.id === value.id)

      if (type === 'add') {
        if (!isDuplicatePoint(value, state.points)) {
          state.points.push({ ...rest })
        } else{ alert('Такая точка уже существует')}
      } else if (type === 'update' && index !== -1) {
        if (!isDuplicatePoint(value, state.points)) {
          state.points.splice(index, 1, { ...rest })
        } else{alert('Такая точка уже существует')}
      } else if (type === 'del' && index !== -1) {
        state.points.splice(index, 1)
      }
    },
    getPoint: (state, { payload: value }) => {
      state.currentPoint = { ...value }
    }
  }
})
export const { actions, reducer } = counterSlice

const isDuplicatePoint = (item: TItem, points: TItem[]) => {
  return points.some(
    point =>
      point.latitude === item.latitude &&
      point.longitude === item.longitude &&
      point.id !== item.id
  )
}
