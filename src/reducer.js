import { combineReducers } from "redux";

const defaultState = {
  pageToShow: 1,
  ticTacToe: {
    board: [{0: { id: 0, value: null }}],
  },
};

function routingReducer(state = defaultState.pageToShow, action) {
  switch (action.type) {
    case "UPDATE_PAGE_TO_SHOW":
      return action.payload;
    default:
      return state;
  }
}

function ticTacToeReducer(state = defaultState.ticTacToe, action) {
  switch (action.type) {
    case "SELECT_SQUARE":
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  pageToShow: routingReducer,
  ticTacToe: ticTacToeReducer
});

export default rootReducer;
