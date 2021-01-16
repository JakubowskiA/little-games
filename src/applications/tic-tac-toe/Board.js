import React, { Component, Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Square from "./Square";

const Board = (props) => {
  const [boardInfo, setBoardInfo] = useState(
    useSelector((state) => state.ticTacToe.board)
  );
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  console.log("board props", props);
  console.log("board i", boardInfo);

  const onClick = (squareId) => {
    console.log("bi", boardInfo[squareId].value);
    const tempBoard = boardInfo;
    if (tempBoard[squareId].value === null) {
      tempBoard[squareId].value = playerOneTurn ? "X" : "O";
      setBoardInfo(tempBoard);
      setPlayerOneTurn(!playerOneTurn);
      props.selectSquare(squareId);
    }
  };
  
  return (
    <div className="tictactoe-board">
      {props.currentBoard.map((square) => (
        <div
          className="tictactoe-square"
          key={square.id}
          squareId={square.id}
          selectSquare={props.selectSquare}
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
