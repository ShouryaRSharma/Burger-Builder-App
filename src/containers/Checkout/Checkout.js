import React, { Component, Fragment } from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary'
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1
        }
    }

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({
            ingredients: ingredients
        })
    } 

    checkoutCancelledHandler = () => {
        this.props.history.push('/');
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return(
            <Fragment>
                <CheckoutSummary 
                onCancel={this.checkoutCancelledHandler} 
                onContinue={this.checkoutContinuedHandler} 
                test={this.state.test} 
                ingredients={this.state.ingredients}/>
                <Route path={this.props.match.url + '/contact-data'} component={ContactData}/>
            </Fragment>
        )
    }
}

export default Checkout;