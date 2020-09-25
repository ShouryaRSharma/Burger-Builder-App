import React from 'react';

import Aux from '../../../hoc/auxiliary';
import Button from '../../UI/Button/Button';
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
            <p>Total Price: £{props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <div className="row">
                <div className="col-md">
                    <Button btnType="btn-danger" clicked={props.declinePurchase}> &#x2715; </Button>
                </div>
                <div className="col-md">
                    <Button btnType="btn-success" clicked={props.acceptPurchase}> &#x2713; </Button>
                </div>
                
            </div>
            
        </Aux>
    )
}

export default orderSummary;