import { createSlice } from '@reduxjs/toolkit'

const testSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    test() {
      console.log('redux working...');
    },
  }
})

export const { test } = testSlice.actions
export default testSlice.reducer