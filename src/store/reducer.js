const Reducer = (state, action) => {
  switch (action.type) {
    case "STORE_DATA":
      return {
        ...state,
        data: action.payload
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

export default Reducer;
