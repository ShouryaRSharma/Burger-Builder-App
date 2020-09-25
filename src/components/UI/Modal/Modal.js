import React, { Component } from 'react'

import Aux from '../../../hoc/auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.scss';

class modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.show !== this.props.show) {
            return true;
        }
    }

    render() {
        return(
            <Aux>
                <Backdrop show={this.props.show}  hideDisplay={this.props.modalClosed}/>
                <div className={this.props.show ? "Modal modal-show" : 'Modal modal-hide'} >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default modal;