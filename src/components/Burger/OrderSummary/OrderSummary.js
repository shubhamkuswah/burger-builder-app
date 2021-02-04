import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary =(props)=>{
    const ingredSummary = [];
    for (const key in props.ingredients) {
        ingredSummary.push(
        <li key={key}><span style={{textTransform:'capitalize'}}>{key}</span> : {props.ingredients[key]}</li>
        )
    }
    return (
        <Aux>
            <h3>Your order:</h3>
            <p>Delicious burger with following ingredients:</p>
            <ul>
                {ingredSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )

}

export default orderSummary;