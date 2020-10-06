import React, { Fragment } from 'react';
import {withRouter} from 'react-router-dom';

import './Burger.scss';
import Logo from "../../assets/images/burger.svg";

const orderBurger = (props) => {

    return (
        <Fragment>
            <img className="order-image float-right " src={Logo} alt="navbar-brand"/>
        </Fragment>
    );
}

export default withRouter(orderBurger);