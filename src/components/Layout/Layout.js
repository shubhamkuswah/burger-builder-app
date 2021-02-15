import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer : false
    }

    sideDrawerCloseHandler =()=>{
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpenHandler = ()=> {
        this.setState((prevState)=> {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
        this.setState({showSideDrawer: true})
    }

    render() {
        return(
        <Aux>
        <Toolbar showSideDrawer={this.sideDrawerOpenHandler}/>
        <SideDrawer open= {this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>
    )
    }
}

export default Layout;