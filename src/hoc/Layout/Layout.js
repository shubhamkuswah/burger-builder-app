import React, { Component } from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../Aux/Aux';
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