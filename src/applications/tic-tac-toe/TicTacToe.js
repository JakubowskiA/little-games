import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Board from "./Board";

class TicTacToe extends Component {
  render() {
    return (
      <Fragment>
       <Board
       currentBoard = {this.props.state.ticTacToe.board}
       selectSquare = {this.props.selectSquare}
       />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectSquare: (payload) => dispatch({ type: "SELECT_SQUARE", payload: payload }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
