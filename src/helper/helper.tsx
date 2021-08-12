export const setPage = (page: string, dispatch: Function) => {
  dispatch({type: 'SET_PAGE', payload: page})
}
