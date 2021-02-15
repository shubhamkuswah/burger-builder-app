import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer : true
    }

    sideDrawerCloseHandler =()=>{
        this.setState({showSideDrawer: false})
    }

    render() {
        return(
        <Aux>
        <Toolbar/>
        <SideDrawer open= {this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </Aux>
    )
    }
}

export default Layout;