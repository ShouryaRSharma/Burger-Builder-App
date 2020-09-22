import React from 'react'

import './Modal.scss';

const modal = (props) => {
    return(
        <div className={props.show ? "Modal modal-show" : 'Modal modal-hide'} >
            {props.children}
        </div>
    )
}

export default modal;