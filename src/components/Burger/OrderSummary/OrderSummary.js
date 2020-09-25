import React, {Component} from 'react';

import Aux from '../../../hoc/auxiliary';
import Button from '../../UI/Button/Button';
import './OrderSummary.scss';

class orderSummary extends Component {

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey} className="text-capitalize list">{igKey}: {this.props.ingredients[igKey]}</li>
        });
        return(
            <Aux>
                <h3>Your Order:</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul className="centre">
                    {ingredientSummary}
                </ul>
                <p>Total Price: £{this.props.price.toFixed(2)}</p>
                <p>Continue to checkout?</p>
                <div className="row">
                    <div className="col-md">
                        <Button btnType="btn-danger" clicked={this.props.declinePurchase}> &#x2715; </Button>
                    </div>
                    <div className="col-md">
                        <Button btnType="btn-success" clicked={this.props.acceptPurchase}> &#x2713; </Button>
                    </div>
                    
                </div>
                
            </Aux>
        )
    }
}

export default orderSummary;