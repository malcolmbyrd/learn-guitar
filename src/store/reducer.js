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

export default reducer;
