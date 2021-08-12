import {createContext, ReactElement, Reducer, useReducer, VFC} from 'react'

const initialState = {}

const reducer: Reducer<{}, {type: string, payload: any}> = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHORDS':
      return {
        ...state,
        chords: action.payload
      };
    case 'SET_PAGE':
      return {
        ...state,
        page: action.payload
      }
    }

  return state
}

const Store:VFC<{ children: ReactElement }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialState)
export default Store
