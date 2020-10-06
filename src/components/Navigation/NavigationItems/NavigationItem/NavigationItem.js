import React from 'react'
import { NavLink } from 'react-router-dom';

import './NavigationItem.scss';

const navigationItem = (props) => {
    return(
        <li className="nav-item"><NavLink to={props.link} exact activeClassName="a-active">{props.children}</NavLink></li>
    )
}

export default navigationItem;