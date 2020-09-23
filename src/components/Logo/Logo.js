import React from 'react'

import burgerLogo from '../../assets/images/burger.svg';
import classes from './Logo.module.scss';

const logo = (props) => {
    return(
        <div className={classes.logo}>
            <img src={burgerLogo} alt="MyBurger" />
        </div>
    )
}

export default logo;