import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
}
const users = [
  {email:"a", password:"a"}
]
export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const userFouded = action.payload.users.find(item=> item.email === action.payload.email && item.password === action.payload.password )
      if(userFouded){
        state.user = { auth: 'success'}
      }else{
        state.user = { message: 'Invalid Credencials'}
      }
    }
  },
})

export const { login } = counterSlice.actions
export default counterSlice.reducer
