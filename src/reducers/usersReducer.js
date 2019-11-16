const defaultState = {
  currentUser: {}
}

const reducer = (state = defaultState, { type, payload }) => {  
  switch (type) {
    case "LOGIN_USER":
      return { ...state, currentUser: payload }
      break;
    default:
      return state;
  }
}

export default reducer;
