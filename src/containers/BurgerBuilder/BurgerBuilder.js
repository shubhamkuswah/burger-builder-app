import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../hoc/Aux';

const INGREDIENT_PRICES = {
    salad : 0.4,
    cheese : 0.6,
    meat : 1.3,
    bacon : 1.1
}

class BurgerBuilder extends Component{
    state = {
        ingredients :{
            salad : 0,
            cheese : 0,
            bacon : 0,
            meat : 0
        },
        totalPrice: 4,
        purchasing: false
    }

    addIngredient = (type)=>{
        const ingredCount = this.state.ingredients[type] + 1;
        const newIngredients = {
            ...this.state.ingredients
        }
        newIngredients[type] = ingredCount;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
        this.setState({ingredients: newIngredients, totalPrice: newPrice})
    }

    removeIngredient = (type)=> {
        if(this.state.ingredients[type] > 0){
            const ingredCount = this.state.ingredients[type] - 1;
            const newIngredients = {
                ...this.state.ingredients
            }
            newIngredients[type] = ingredCount;
            const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
            this.setState({ingredients: newIngredients, totalPrice: newPrice})
        }
    }

    purchaseHandler =()=>{
        this.setState({purchasing: true})
    }

    purchaseCancelHandler =()=>{
        this.setState({purchasing: false})
    }

    purchaseContinueHandler =()=>{
        alert('Continue!')
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (const key in disabledInfo) {
            disabledInfo[key]= this.state.ingredients[key] <=0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                <OrderSummary ingredients={this.state.ingredients}
                    cancelOrder={this.purchaseCancelHandler}
                    purchaseOrder={this.purchaseContinueHandler}
                    price={this.state.totalPrice.toFixed(2)}
                />
                </Modal>
                <Burger ingredients = {this.state.ingredients}></Burger>
                <BuildControls 
                ordered={this.purchaseHandler}
                addIngredient={this.addIngredient} 
                removeIngredient={this.removeIngredient}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.totalPrice > 4 ? false : true}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;