import React from 'react';
import './BuildControl.scss';

const buildControl = props => {
    return(
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <div className="btn-group ">
                <button className="btn btn-light" onClick={props.less} disabled={props.disabled}>Less</button>
                <button className="btn btn-dark" onClick={props.more} >More</button>
            </div>    
        </div>
    )
};

export default buildControl;