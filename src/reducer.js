import { combineReducers } from "redux";

const defaultState = {
  pageToShow: 1,
  ticTacToe: {
    playerOneTurn: true,
    board: [
      { id: 0, value: null, position: { x: 0, y: 0 }, status: null },
      { id: 1, value: null, position: { x: 0, y: 1 }, status: null },
      { id: 2, value: null, position: { x: 0, y: 2 }, status: null },
      { id: 3, value: null, position: { x: 1, y: 0 }, status: null },
      { id: 4, value: null, position: { x: 1, y: 1 }, status: null },
      { id: 5, value: null, position: { x: 1, y: 2 }, status: null },
      { id: 6, value: null, position: { x: 2, y: 0 }, status: null },
      { id: 7, value: null, position: { x: 2, y: 1 }, status: null },
      { id: 8, value: null, position: { x: 2, y: 2 }, status: null },
    ],
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
  console.log('pl', action.payload, state)
  switch (action.type) {
    case "SELECT_SQUARE":
      if (state.playerOneTurn) {
        state.board.find(square => square.id === action.payload).value = 'X';
      }else{
        state.board.find(square => square.id === action.payload).value = 'O';
      }
      state.playerOneTurn = !state.playerOneTurn
      console.log('new', state)
      return state
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  pageToShow: routingReducer,
  ticTacToe: ticTacToeReducer,
});

export default rootReducer;
