import React, { Component, Fragment } from 'react';
import {withRouter} from 'react-router-dom';

import axios from '../../../axios-orders';
import './ContactData.scss';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Form/Input';
class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Address'
                },
                value: ''
            },
            postcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Postcode'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest (1 hour delivery)'},
                        {value: 'cheapest', displayValue: 'Cheapest (2-3 hours delivery time)'}
                    ]
                },
                value: ''
            } 
        },
    }
    
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const number = Number(this.props.price);
        const fixed = number.toFixed(2);
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: fixed,
            orderData: formData
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

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({
            orderForm: updatedOrderForm
        })
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
                <Fragment>
                <h4>Enter your Contact Data</h4>
                <form onSubmit={this.orderHandler}>
                    {formElementsArray.map(formElement => (
                        <Input
                        key={formElement.id} 
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                    ))}
                    <button type="submit" className="btn btn-dark" onClick={this.orderHandler}>Submit</button>
                </form>
                </Fragment>
            
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData mt-0">
                {form}
            </div>
        );
    }
}

export default withRouter(ContactData);