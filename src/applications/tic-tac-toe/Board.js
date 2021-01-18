import React, { Component, Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Square from "./Square";

const Board = (props) => {
  const [boardInfo, setBoardInfo] = useState(
    useSelector((state) => state.ticTacToe.board)
  );
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState("In progress");
  const [win, setWin] = useState(false);
  console.log("board props", props);
  console.log("board i", boardInfo);

  const onClick = (squareId) => {
    const tempBoard = boardInfo;
    if (tempBoard[squareId].value === null) {
      tempBoard[squareId].value = playerOneTurn ? "X" : "O";
      setBoardInfo(tempBoard);
      setPlayerOneTurn(!playerOneTurn);
      props.selectSquare(squareId);
      if (!checkWin()){
        autoMove()
      }  
    } 
  };

  const checkWin = () => {
    console.log('cw start')
    const tempBoard = boardInfo.map((square) => ({
      squareId: square.id,
      value: square.value,
    }));
    console.log("aaaa", tempBoard);
    for (let i = 0; i < tempBoard.length; i = i + 3) {
      console.log(
        "check1",
        tempBoard[i].value === tempBoard[i + 1].value &&
          tempBoard[i + 1].value === tempBoard[i + 2].value &&
          tempBoard[i].value !== null
      );
      if (
        tempBoard[i].value === tempBoard[i + 1].value &&
        tempBoard[i + 1].value === tempBoard[i + 2].value &&
        tempBoard[i].value !== null
      ) {
        setWin(true);
        setGameStatus("Win");
        console.log('STATUS', gameStatus)
        return true
    
      }
    }
    if (gameStatus === "In progress") {
      for (let i = 0; i < 2; i++) {
        console.log(
          "check2",
          tempBoard[i].value === tempBoard[i + 3].value &&
            tempBoard[i + 3].value === tempBoard[i + 6].value &&
            tempBoard[i].value !== null
        );
        if (
          tempBoard[i].value === tempBoard[i + 3].value &&
          tempBoard[i + 3].value === tempBoard[i + 6].value &&
          tempBoard[i].value !== null
        ) {
          setWin(true);
          setGameStatus("Win");
          console.log('STATUS', gameStatus)
          return true
        }
      }
      if (tempBoard[0].value === tempBoard[4].value &&
        tempBoard[4].value === tempBoard[8].value &&
        tempBoard[0].value !== null) {
          setWin(true);
          setGameStatus("Win");
          console.log('STATUS', gameStatus)
          return true
        }
        if (tempBoard[2].value === tempBoard[4].value &&
          tempBoard[4].value === tempBoard[6].value &&
          tempBoard[2].value !== null) {
            setWin(true);
            setGameStatus("Win");
            console.log('STATUS', gameStatus)
            return true
          }
    }
    console.log("status", gameStatus);
    console.log('cw end')
  };

  const autoMove = () => {
    console.log('auto start')
    const tempBoard = boardInfo;
    console.log("auto", tempBoard);
    const availableSquares = tempBoard.filter(
      (square) => square.value === null
    );
    console.log("available", availableSquares);
    console.log('STATUS', gameStatus)
    console.log(gameStatus === "In progress")
    if (gameStatus === "In progress" && availableSquares.length) {
      var chosenSquare = availableSquares[Math.floor(Math.random() * availableSquares.length)];
      console.group("item", chosenSquare);
      tempBoard[chosenSquare.id].value = playerOneTurn ? "X" : "O";
      setBoardInfo(tempBoard);
      setPlayerOneTurn(!playerOneTurn);
      props.selectSquare(chosenSquare.id);
      checkWin();
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
