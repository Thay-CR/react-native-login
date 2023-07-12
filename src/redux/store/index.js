import { configureStore } from '@reduxjs/toolkit'
import user from '../reducers/login.js'
import signup from '../reducers/register'

export const store = configureStore({
  reducer: {
    user: user,
    signup: signup
  }
})
