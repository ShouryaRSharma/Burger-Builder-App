import React from 'react';
import './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';
import Wave from '../../../assets/images/wave(7).svg';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Beef', type: 'meat'},
    
]

const buildControls = (props) => (
    <div className="BuildControls">
        <img src={Wave} alt="Wavetag" border="0"></img>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
            return(
                <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                type={ctrl.type} 
                more={() => props.ingredientAdded(ctrl.type)} 
                less={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />
            )
        })}
        <button className="btn OrderButton" disabled={!props.purchaseable} onClick={props.order}>Order Now</button>
    </div>
);

export default buildControls;