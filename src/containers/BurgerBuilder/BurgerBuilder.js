import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Aux';


class BurgerBuilder extends Component{
    render(){
        return (
            <Aux>
                <Burger></Burger>
                <div>Burger ingredients mange module</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;