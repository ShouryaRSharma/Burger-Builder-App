import React from 'react'

import Logo from "../../assets/images/burger.svg";

import './Brand.scss';

const brand = (props) => {
    return(
        <div className="inline">
            <img className="image" src={Logo} alt="navbar-brand"/>
            <span className="app-title">Burger Builder</span>
        </div>
    )
}

export default brand;