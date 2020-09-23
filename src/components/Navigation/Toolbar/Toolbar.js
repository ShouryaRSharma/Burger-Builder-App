import React from 'react'

import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return(
        <header className={classes.toolbar}>
            <div>
                MENU
            </div>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    )
}

export default toolbar;