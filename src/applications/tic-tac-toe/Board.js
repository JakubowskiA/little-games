import React, { Component, Fragment } from "react";
import Square from './Square'

const Board = (props) => {
    console.log('board props', props)
    return(
    <div className='tictactoe-board'>
        {props.currentBoard.map(square => (
           <Square
           key={square.id}
           squareInfo={square}
           /> 
        ))}
    </div>)
}

export default Board