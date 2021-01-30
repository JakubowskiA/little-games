import React, { Component, Fragment, useState } from "react";
import { useSelector } from "react-redux";

const Modal = ({ modalContent, closeModal }) => {
    const displayModalContent = () => {
        if (modalContent === 'start'){
            return (
                <div>
                    <p>Start new game</p>
                <button>One Player</button>
                <button>Two Players</button>
                </div>
            )
        }

    }

  return (
    <div className="modal">
      <div className="modal-main">
          {displayModalContent()}
          </div>
    </div>
  );
};

export default Modal;
