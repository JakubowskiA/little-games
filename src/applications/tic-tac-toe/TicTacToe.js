import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Board from "./Board";

class TicTacToe extends Component {
  render() {
    console.log('a', this.props);
    return (
      <Fragment>
       <Board
       currentBoard = {this.props.state.ticTacToe.board}
       onClick={() => {this.props.selectSquare(payload)}}
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
