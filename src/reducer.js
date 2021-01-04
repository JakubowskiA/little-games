import { combineReducers } from "redux";

const defaultState = {
    pageToShow: 'home'
  };
  
  function routingReducer(state = defaultState.pageToShow, action) {
    switch (action.type) {
      case "UPDATE_PAGE_TO_SHOW":
        return action.payload
      default:
        return state;
    }
  }
  
  const rootReducer = combineReducers({
    pageToShow: routingReducer,
  });
  
  export default rootReducer;
