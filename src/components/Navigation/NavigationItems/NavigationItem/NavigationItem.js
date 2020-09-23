import React from 'react'

import './NavigationItem.scss';

const navigationItem = (props) => {
    return(
        <li className="nav-item"><a classname={props.active ? "active" : null} href={props.link}>{props.children}</a></li>
    )
}

export default navigationItem;