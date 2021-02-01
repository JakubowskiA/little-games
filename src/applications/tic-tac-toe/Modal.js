import React, { Component, Fragment, useState } from "react";
import { useSelector } from "react-redux";

const Modal = ({ modalContent, closeModal, setGameType }) => {
    const displayModalContent = () => {
        if (modalContent === 'start'){
            return (
                <div>
                    <p>Start new game</p>
                <button onClick={(e)=> {onClick(e)}} value='onePlayer'> Start One Player Game</button>
                <button onClick={(e)=> {onClick(e)}} value='twoPlayer'>Start Two Player Game</button>
                </div>
            )
        }
    }

    const onClick = (e) => {
        setGameType(e.target.value)
        closeModal()
console.log('EEEE', e.target.value)
    }

  return (
    <div className="modal">
      <div className="modal-main">
      <button onClick={closeModal}>X</button>
          {displayModalContent()}
          </div>
    </div>
  );
};

export default Modal;
