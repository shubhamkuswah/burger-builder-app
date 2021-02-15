import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total price : {props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.cancelOrder}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseOrder}>CONTINUE</Button>
        </Aux>
    )

}

export default orderSummary;