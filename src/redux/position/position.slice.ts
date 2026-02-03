import { createSlice, type Slice } from '@reduxjs/toolkit'
import { ITEMS } from '../../db/items.data'
import type { TItem } from '../../types/item.type'

export interface IPosition {
  position: TItem[]
  idnexId: number
}

const initialState: IPosition = {
  position: ITEMS,
  idnexId: 0
}

export const counterSlice: Slice<IPosition> = createSlice({
  name: 'position',
  initialState,
  reducers: {
    createPosition: (state, { payload: value }) => {
      const index = state.position.findIndex(
        item =>
          item.latitude === value.latitude && item.longitude === value.longitude
      )

      if (index === -1) {
        state.position.push({ id: state.idnexId + 5, ...value })
        state.idnexId += 5
      }
    },
    deletePosition: (state, { payload: id }) => {
      const index = state.position.findIndex(item => item.id === id)
      if (index !== -1) {
        state.position.splice(index, 1)
      }
    },
		updatePosition: (state, { payload: value }) => {
			console.log(value)
			const index = state.position.findIndex(item => item.id === value.id)
      if (index !== -1) {
        state.position.splice(index, 1, value)
      }
		}
  }
})
export const { actions, reducer } = counterSlice
