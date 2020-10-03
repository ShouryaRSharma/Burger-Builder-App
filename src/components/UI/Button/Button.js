import React from 'react';

const button = (props) => {
    return(
        <button className="btn mx-2" onClick={props.clicked}>{props.children}</button>
    )
}

export default button;