const initialState = {
  forecast: {}
}

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_FORECAST') {
    return {
      ...state,
      forecast: action.payload
    };
  }

  return state
}

export default reducer;
