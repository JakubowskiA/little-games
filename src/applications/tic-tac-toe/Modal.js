import React, { Component, Fragment, useState } from "react";
import {useSelector} from 'react-redux'

const Modal = ({content}) => {
    return (
    <div className='modal'><div className='modal-main'>{content}</div></div>
    )
}

export default Modal