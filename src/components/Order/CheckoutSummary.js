import React from 'react';

import './CheckoutSummary.scss';
import Burger from '../Burger/CheckoutBurger';

const checkoutSummary = (props) => {
    return(
        <div className="container text-center">
            <h2>We hope it tastes great!</h2>
            <div className="burger-holder">
                <Burger ingredients={props.ingredients}/>
                <div className="btnGroup">
                    <button className="btn checkoutButton cancel" style={{margin: '5px'}} clicked> CANCEL </button>
                    <button className="btn checkoutButton success" style={{margin: '5px'}} clicked> CONTINUE </button>
                </div>
            </div>
        </div>
    )
}

export default checkoutSummary;