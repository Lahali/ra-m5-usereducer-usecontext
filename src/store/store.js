import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user.slice'
import housesReducer from './houses.slice'

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    user: userReducer,
    houses: housesReducer,
  },
})
