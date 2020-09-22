import React from 'react';

import Aux from '../../../hoc/auxiliary';
import './OrderSummary.scss';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey} className="text-capitalize list">{igKey}: {props.ingredients[igKey]}</li>
    });
    return(
        <Aux>
            <h3>Your Order:</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul className="centre">
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            
        </Aux>
    )
}

export default orderSummary;