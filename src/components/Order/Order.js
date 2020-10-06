import React from 'react'
import classes from './Order.module.scss';

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
            <span className={classes.listText} key={ig.name}>{ig.name} ({ig.amount})</span>
        );
    });

    return(
        <div className={classes.order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>£ {props.price}</strong></p>
        </div>
    );
}

export default order;