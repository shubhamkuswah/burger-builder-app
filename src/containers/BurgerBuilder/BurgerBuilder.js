import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux';

class BurgerBuilder extends Component{
    state = {
        ingredients :{
            salad : 0,
            cheese : 0,
            bacon : 0,
            meat : 0
        }
    }
    render(){
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}></Burger>
                <div>Burger ingredients mange module</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;