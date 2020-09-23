import React from 'react'

import './NavigationItems.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return(
        <ul className="nav-items"> 
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>
        </ul>
    )
}

export default navigationItems;