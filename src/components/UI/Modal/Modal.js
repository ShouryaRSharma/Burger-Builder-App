import React from 'react'

import Aux from '../../../hoc/auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.scss';

const modal = (props) => {
    return(
        <Aux>
            <Backdrop show={props.show}  hideDisplay={props.modalClosed}/>
            <div className={props.show ? "Modal modal-show" : 'Modal modal-hide'} >
                {props.children}
            </div>
        </Aux>
    )
}

export default modal;