import React from 'react'
import classes from './Order.module.scss';

const order = (props) => {
    return(
        <div className={classes.order}>
            <p>Ingredients: Salad (1)</p>
            <p>Price: <strong>£ 5.45</strong></p>
        </div>
    )
}

export default order;