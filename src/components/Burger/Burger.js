import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props)=> {
    let allIngred = []  
    for (let key in props.ingredients)    
        for (let i = 0; i < props.ingredients[key]; i++)      
            allIngred.push(<BurgerIngredient key={key + i} type={key} />) 
    if(allIngred.length === 0) {
        allIngred = <p>Please add ingredients to make your burger!</p>
    }
    return (
        <div className= {classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {allIngred}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    )
}

export default burger;
