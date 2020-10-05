import React, { Component, Fragment } from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary'
import ContactData from './ContactData/ContactData';


class Checkout extends Component {
    state = {
        ingredients: {

        },
        totalPrice: 0
    }

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            
            if(param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
            
        }
        this.setState({
            ingredients: ingredients,
            totalPrice: price
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
                <Route path={this.props.match.url + '/contact-data'} render={() => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} />)}/>
            </Fragment>
        )
    }
}

export default Checkout;