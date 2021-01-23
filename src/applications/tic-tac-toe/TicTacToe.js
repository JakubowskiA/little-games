import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Board from "./Board";
import Modal from "./Modal"

class TicTacToe extends Component {
  state={
    modalOpen:true
  }

  showModal = () => {
    this.setState({
      show: false
    });
  };

  render() {
    return (
      <Fragment>
       <Board
       currentBoard = {this.props.state.ticTacToe.board}
       selectSquare = {this.props.selectSquare}
       />
<Modal showModal={this.showModal}/>
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
