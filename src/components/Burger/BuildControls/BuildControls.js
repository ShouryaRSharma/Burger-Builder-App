import React from 'react';
import './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Beef', type: 'meat'},
    
]

const buildControls = (props) => (
    <div className="BuildControls">
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
    </div>
);

export default buildControls;