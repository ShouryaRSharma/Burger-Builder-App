import React, {Fragment} from 'react';

const input = props => {
    let inputElement = null;

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className="form-control" {...props}/>;
            break;
        case ('textarea'):
            inputElement = <textarea className="form-control" {...props}/>;
            break;
        default:
            inputElement = <input className="form-control" {...props}/>;
    }
    
    return (
        <Fragment>
            <div>
                {inputElement}
            </div>
        </Fragment>
    )
}

export default input;