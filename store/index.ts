import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'

import reducer, { DefaultRootState } from './rootReducer'

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<
  void,
  DefaultRootState,
  unknown,
  Action<string>
>

const store = configureStore({
  reducer
})

export default store
