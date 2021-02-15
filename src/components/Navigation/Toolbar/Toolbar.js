import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItem/NavigationItem';
import classes from './Toolbar.module.css';

const toolbar =(props)=>(
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <NavigationItems/>
    </header>
)

export default toolbar;