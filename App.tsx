import React from 'react'
import { Provider } from 'react-redux'

import CatFatsScreen from './screens/CatFactsScreen'
import store from './store'

const App = () => (
  <Provider store={store}>
    <CatFatsScreen />
  </Provider>
)

export default App
