import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../auxiliary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './withErrorHandler.scss';

const errorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor() {
            super();
            this.state = ({
                error: null
            });
            axios.interceptors.request.use(req => {
                
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.state({
                    error: error
                });
            });
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            })
        }

        render() {
            const danger = <div className="Error"><FontAwesomeIcon  className="heartbeat" icon={faExclamationTriangle} />
            <p className="danger-text mt-1">Something went wrong!</p></div>
    
            return(
                <Aux>
                    <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
                        {this.state.error ? danger : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default errorHandler;