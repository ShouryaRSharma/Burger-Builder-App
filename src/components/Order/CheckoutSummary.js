import React from 'react';

import './CheckoutSummary.scss';
import Burger from '../Burger/CheckoutBurger';

const checkoutSummary = (props) => {
    return(
        <div className="container text-center">
            <div className="burger-holder">
                <Burger ingredients={props.ingredients}/>
                <div className="btnGroup hover-in">
                    <button className="btn btn-lg checkoutButton cancel" style={{margin: '5px'}} onClick={props.onCancel}> CANCEL </button>
                    <button className="btn btn-lg checkoutButton success" style={{margin: '5px'}} onClick={props.onContinue}> CONTINUE </button>
                </div>
            </div>
        </div>
    )
}

export default checkoutSummary;