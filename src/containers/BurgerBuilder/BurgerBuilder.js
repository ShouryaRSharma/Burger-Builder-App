import React, { Component, Fragment } from 'react';
import Aux from '../../hoc/auxiliary';
import axios from '../../axios-orders';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            totalPrice: 4,
            purchaseable: false,
            orderNow: false,
            loading: false,
            error: false
        }
        
    }

    componentDidMount() {
        axios.get('https://burger-builder-7e939.firebaseio.com/ingredients.json').then(response => {
            this.setState({
                ingredients: response.data
            });
        }).catch(error => {
            this.setState({
                error: true
            })
        })
    }

    updatedPurchaseState(ingredients) {

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({
            purchaseable: sum > 0
        });
    }

    purchaseHandler = () => {
        this.setState({
            orderNow: true
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {

            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice, 
            ingredients: updatedIngredients
        });
        this.updatedPurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {

            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCounted;
        const priceSubtraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;
        this.setState({
            totalPrice: newPrice, 
            ingredients: updatedIngredients
        });
        this.updatedPurchaseState(updatedIngredients);
    }

    purchaseCancelHandler = () => {
        this.setState({
            orderNow: false
        })
    }

    purchaseContinueHandler = () => {
        this.setState({
            loading: true
        })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
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
        axios.post('/orders.json', order).then(
            response => {
                this.setState({
                    loading: false,
                    orderNow: false
                })
            }
        ).catch(err => 
            this.setState({
                loading: false,
                orderNow: false
            })
        );
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null; 

        let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
        
        if (this.state.ingredients) {
            burger = (
                <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler} 
                disabled={disabledInfo} 
                price={this.state.totalPrice}
                purchaseable={this.state.purchaseable} 
                order={this.purchaseHandler}/>
                </Fragment>
            );
            orderSummary = (
                <OrderSummary 
                price={this.state.totalPrice} 
                acceptPurchase={this.purchaseContinueHandler} 
                declinePurchase={this.purchaseCancelHandler} 
                ingredients={this.state.ingredients}/>
            );
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        
        return(
            <Aux>
                <Modal modalClosed={this.purchaseCancelHandler} show={this.state.orderNow}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default errorHandler(BurgerBuilder, axios);