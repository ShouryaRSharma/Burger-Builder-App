import React from 'react'

import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.scss';

const toolbar = (props) => {
    return(
        <header className={classes.toolbar}>
            <div>
                MENU
            </div>
            <Logo />
            <nav>
                ...
            </nav>
        </header>
    )
}

export default toolbar;