import React from 'react';
import './Burger.scss';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        }); 
    });

    return (
            <div className="row">
                <div className="col-md">
                    <div className="container burger mx-0 text-center">
                        <BurgerIngredient type="bread-top"/>
                        {transformedIngredients}
                        <BurgerIngredient type="bread-bottom"/>
                    </div>
                </div>
            </div>
    )
}

export default burger;