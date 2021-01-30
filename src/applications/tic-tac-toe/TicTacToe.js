import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Board from "./Board";
import Modal from "./Modal";

class TicTacToe extends Component {
  state = {
    modalOpen: true,
    modalContent: 'start',
    gameType: null
  };

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  closeModal = () => {
    this.setState({
      show: false
    })
  }

  setGameType = (selectedType) => {
    this.setState({
      gameType: selectedType
    })
  }

  render() {
    return (
      <Fragment>
        <Board
          currentBoard={this.props.state.ticTacToe.board}
          selectSquare={this.props.selectSquare}
          gameType={this.state.gameType}
        />
        <Modal showModal={this.showModal} closeModal={this.closeModal} modalContent={this.state.modalContent} setGameType={this.setGameType}/>
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
    selectSquare: (payload) =>
      dispatch({ type: "SELECT_SQUARE", payload: payload }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
