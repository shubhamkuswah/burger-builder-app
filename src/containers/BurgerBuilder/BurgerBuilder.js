import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
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
        totalPrice: 4
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
        // const ingredCount = 
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (const key in disabledInfo) {
            disabledInfo[key]= this.state.ingredients[key] <=0
        }
        console.log(disabledInfo,'ids');
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}></Burger>
                <BuildControls 
                addIngredient={this.addIngredient} 
                removeIngredient={this.removeIngredient}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;