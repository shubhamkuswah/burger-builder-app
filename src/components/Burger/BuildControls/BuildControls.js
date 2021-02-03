import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props)=>{
 return(
    <div className={classes.BuildControls}>
    <p>Price : <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control=>(
            <BuildControl key={control.label} label={control.type} 
            addIngredient={()=>props.addIngredient(control.type)}
            removeIngredient={()=>props.removeIngredient(control.type)}
            disabled={props.disabled[control.type]}>
            </BuildControl>
        ))}
    <button className={classes.OrderButton} disabled={props.purchasable}>Order Now</button>
    </div>
    )
}

export default buildControls;