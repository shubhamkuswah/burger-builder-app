import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItem/NavigationItem';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';

const toolbar =(props)=>(
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.showSideDrawer}></DrawerToggle>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;