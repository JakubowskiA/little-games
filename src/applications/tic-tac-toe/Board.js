import React, { Component, Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Square from "./Square";

const Board = ({currentBoard,
  selectSquare,
  gameType,
  openModal}) => {
  const [boardInfo, setBoardInfo] = useState(
    useSelector((state) => state.ticTacToe.board)
  );
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState("In progress");
  const [win, setWin] = useState(false);

  const onClick = (squareId) => {
    const tempBoard = boardInfo;
    if (tempBoard[squareId].value === null && gameStatus === 'In progress') {
      tempBoard[squareId].value = playerOneTurn ? "X" : "O";
      setBoardInfo(tempBoard);
      setPlayerOneTurn(!playerOneTurn);
      selectSquare(squareId);
      if (!checkWin() && gameType === 'twoPlayer') {
        autoMove();
      }
    }
  };

  const checkWin = () => {
    const tempBoard = boardInfo.map((square) => ({
      squareId: square.id,
      value: square.value,
    }));
    for (let i = 0; i < tempBoard.length; i = i + 3) {
      if (
        tempBoard[i].value === tempBoard[i + 1].value &&
        tempBoard[i + 1].value === tempBoard[i + 2].value &&
        tempBoard[i].value !== null
      ) {
        setWin(true);
        endGame("Win")
        return true;
      }
    }
    if (gameStatus === "In progress") {
      for (let i = 0; i < 2; i++) {
        if (
          tempBoard[i].value === tempBoard[i + 3].value &&
          tempBoard[i + 3].value === tempBoard[i + 6].value &&
          tempBoard[i].value !== null
        ) {
          setWin(true);
          endGame("Win")
          return true;
        }
      }
      if (
        tempBoard[0].value === tempBoard[4].value &&
        tempBoard[4].value === tempBoard[8].value &&
        tempBoard[0].value !== null
      ) {
        setWin(true);
        endGame("Win")
        return true;
      }
      if (
        tempBoard[2].value === tempBoard[4].value &&
        tempBoard[4].value === tempBoard[6].value &&
        tempBoard[2].value !== null
      ) {
        setWin(true);
        endGame("Win")
        return true;
      }
      const availableSquares = tempBoard.filter(
        (square) => square.value === null
      );
      if(!availableSquares.length){
        endGame("Draw")
        return true;
      }
    }
  };

  const autoMove = () => {
    const tempBoard = boardInfo;
    const availableSquares = tempBoard.filter(
      (square) => square.value === null
    );

    if (gameStatus === "In progress" && availableSquares.length) {
      var chosenSquare =
        availableSquares[Math.floor(Math.random() * availableSquares.length)];

      tempBoard[chosenSquare.id].value = playerOneTurn ? "X" : "O";
      setBoardInfo(tempBoard);
      setPlayerOneTurn(!playerOneTurn);
      selectSquare(chosenSquare.id);
      checkWin();
    }
  };

  const endGame = (status) => {
    setGameStatus(status);
    openModal(status)
  }

  return (
    <div className="tictactoe-board">
      {currentBoard.map((square) => (
        <div
          className="tictactoe-square"
          key={square.id}
          squareId={square.id}
          selectSquare={selectSquare}
          onClick={() => {
            onClick(square.id);
          }}
        >
          {square.value}
        </div>
      ))}
    </div>
  );
};

export default Board;
