import React, { Component, Fragment } from "react";

const Square = ({squareInfo}) => {
    console.log('sq', squareInfo)
    return (
    <div className='tictactoe-square'>{squareInfo.value}</div>
    )
}

export default Square