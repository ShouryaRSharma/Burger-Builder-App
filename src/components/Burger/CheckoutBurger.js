import React from 'react';
import './Burger.scss';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import BurgerImage from '../../assets/images/logo2.png';

const burgerCheckout = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        }); 
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <div className="Logo2"><img src={BurgerImage} alt=""/></div>
    }

    return (
            <div className="Burger">
                <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom"/>
            </div>
    )
}

export default burgerCheckout;