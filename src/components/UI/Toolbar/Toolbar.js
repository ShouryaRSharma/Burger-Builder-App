import React from 'react'

import classes from './Toolbar.module.scss';

const toolbar = (props) => {
    return(
        <header className={classes.toolbar}>
            <div>
                MENU
            </div>
            <div>
                LOGO
            </div>
            <nav>
                ...
            </nav>
        </header>
    )
}

export default toolbar;