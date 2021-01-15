import React, { Component, Fragment, useState } from "react";
import {useSelector} from 'react-redux'

const Square = ({selectSquare, squareId}) => {
    const [squareInfo, setSquareInfo] = useState(useSelector(state => state.ticTacToe.board[squareId]))
    const playerOneTurn = useSelector(state => state.ticTacToe.playerOneTurn)
    console.log('sqi', squareInfo)
    console.log(squareInfo.value)
    const onClick = () => {
        selectSquare(squareId)
        // squareInfo.value 
        console.log('a', squareInfo)
    }
    return (
    <div className='tictactoe-square' onClick={() => {onClick()}}>{squareInfo.value}</div>
    )
}

export default Square