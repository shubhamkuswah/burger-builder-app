import React from 'react';
import classes from './NavigationItem.module.css';
import NavigationItem from './NavItem/NavItem';

const navigationItems =(props)=>(
    <ul className={classes.NavigationItems}> 
        <NavigationItem link='/' active >Home</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
)

export default navigationItems;