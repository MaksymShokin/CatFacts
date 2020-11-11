import { createSlice } from '@reduxjs/toolkit'

const initialState: InitialStateTypes = {
  isLoading: false,
  error: null,
  facts: []
}

interface InitialStateTypes {
  isLoading: Boolean
  error: null | object
  facts: Array<CatsRequest>
}

export interface CatsRequest {
  _id: string
  text: string
}

const factsSlice = createSlice({
  name: 'catFacts',
  initialState,
  reducers: {
    startLoading: state => {
      state.isLoading = true
    },
    factsError: (state, { payload }) => {
      state.error = payload
      state.isLoading = false
    },
    saveFacts: (state, { payload }) => {
      state.isLoading = false
      state.facts = [...payload, ...state.facts]
    }
  }
})

export const { startLoading, saveFacts, factsError } = factsSlice.actions

export const saveCatFacts = data => async dispatch => {
  dispatch(startLoading())
  try {
    dispatch(saveFacts(data))
  } catch (err) {
    dispatch(factsError(err))
  }
}

export default factsSlice.reducer
