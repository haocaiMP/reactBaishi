const defaultState = {
  routes: {}
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  newState.routes = action.value
  return newState;
  // switch (action.type) {
  //   case 'HOME':
  //     newState.routes = action.value
  //     return newState;
  //   case 'JIJIAN':
  //     newState.routes = action.value
  //     return newState;
  //   case 'CHAJIAN':
  //     newState.routes = action.value
  //     return newState;
  //   default:
  //     return state;
  // }
  
}