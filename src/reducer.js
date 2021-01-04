import { combineReducers } from "redux";

const defaultState = {
    pageToShow: 'home'
  };
  
  function routingReducer(state = defaultState.pageToShow, action) {
    switch (action.type) {
      case "UPDATE_PAGE_TO_SHOW":
        if (state < 5) {
          return state + 1;
        } else {
          return 0;
        }
      default:
        return state;
    }
  }
  
  const rootReducer = combineReducers({
    pageToShow: routingReducer,
  });
  
  export default rootReducer;
