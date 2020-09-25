import React from 'react'

import Logo from '../../Logo/Logo';
import Brand from '../../Logo/Brand';
import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return(
        <header className={classes.toolbar}>
            <Brand />
            <Logo />
            <nav className="main-navigation">
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar;