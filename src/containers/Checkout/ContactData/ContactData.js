import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom';

import axios from '../../../axios-orders';
import './ContactData.scss';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Form/Input';
class ContactData extends Component {
    state = {
        name: null,
        email: null,
        address: {
            street: null,
            postCode: null
        }
    }
    
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const number = Number(this.props.price);
        const fixed = number.toFixed(2);
        const order = {
            ingredients: this.props.ingredients,
            price: fixed,
            customer: {
                name: 'Shourya Sharma',
                address:{
                    street: '10 Denton Way',
                    postcode: 'SL37DJ',
                    country: 'UK'
                },
                deliveryMethod: 'fastest'
            }
        }
        console.log(order);
        axios.post('/orders.json', order).then(
            response => {
                this.setState({
                    loading: false,
                    orderNow: false
                });
                this.props.history.push('/');
                console.log(response)
            }
        ).catch(err => 
            this.setState({
                loading: false,
                orderNow: false
            })
        );
    }

    render() {
        let form = (
                <Fragment>
                <h4>Enter your Contact Data</h4>
                <form>
                    <div className="mb-3">
                        <Input inputtype="input" type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <Input inputtype="input" type="text" id="inputPassword" placeholder="Name"/>
                    </div>
                    <div className="mb-3">
                        <Input inputtype="input" type="text" id="inputAddress" placeholder="Address"/>
                    </div>
                    <button type="submit" className="btn btn-dark" onClick={this.orderHandler}>Submit</button>
                </form>
                </Fragment>
            
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                {form}
            </div>
        );
    }
}

export default withRouter(ContactData);