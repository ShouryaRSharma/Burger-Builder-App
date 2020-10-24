import React, {Fragment} from 'react';

const input = props => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className="form-control" {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea className="form-control" {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select className="form-select" aria-label="select delivery type" value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(options => (
                        <option key={options.value} value={options.value}>{options.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input className="form-control" {...props.elementConfig} value={props.value} onChange={props.changed}/>;
    }
    
    return (
        <Fragment>
            <div className="mb-3">
                {inputElement}
            </div>
        </Fragment>
    )
}

export default input;