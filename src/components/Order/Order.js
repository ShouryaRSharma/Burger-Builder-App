import React from 'react'
import classes from './Order.module.scss';

import Burger from '../Burger/OrderBurger';

const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName, 
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput= ingredients.map(ig => {
        return (
            <li className={classes.listText} key={ig.name}>{ig.name}: {ig.amount} &nbsp;</li>
        );
    });

    return(
        <div className={classes.order + " row"}>
            <div className={classes.textFocusIn + " col-md"}>
                <p>Ingredients: </p> 
                    <ul className="">    
                    {ingredientOutput}
                    </ul>
                
                <p>Price: <strong>£ {props.price}</strong></p>
            </div>
            <div className={classes.textFocusIn + " col-md d-none d-xl-block d-lg-block d-md-block"}>
                <Burger ingredients={props.ingredients} />
            </div>
        </div>
    );
}

export default order;