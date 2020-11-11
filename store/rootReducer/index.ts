import { combineReducers } from '@reduxjs/toolkit'

import catFacts from './catFactsReducer'

export type DefaultRootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  catFacts
})

export default rootReducer
