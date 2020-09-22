import React from 'react'

import './Modal.scss';

const modal = (props) => {
    return(
        <div className="Modal">
            {props.children}
        </div>
    )
}

export default modal;