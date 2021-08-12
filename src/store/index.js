import {createContext, useReducer} from 'react'

const initialState = {
  data: {}
}

const reducer = (state = initialState, action) => {
  if (action.type === 'ACTION') {
    return {
      ...state,
      data: action.payload
    };
  }

  return state
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialState)
export default Store
