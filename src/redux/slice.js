import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Value: 0,
  Size: "13 X 18"
}

export const counterSlice = createSlice({
  name: 'd_count',
  initialState,
  reducers: {

    incrementByAmount: (state, action) => {
      state.Value += action.payload

      if (state.Value === 4) {
        state.Size = "6 X 6"
      };
      if (state.Value === 6) {
        state.Size = "12 X 12"
      }
  
    },

    resetCount: (state) => {
      state.Value = 0
      state.Size = "13 X 18"
    }
  },
})