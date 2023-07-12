import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signup: (state, action) => {
      console.log(action.payload)
      state.users.push(action.payload)
    }
  },
})

export const { signup } = counterSlice.actions
export default counterSlice.reducer
