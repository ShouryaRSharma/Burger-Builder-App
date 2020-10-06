import React from 'react'

import './NavigationItems.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return(
        <ul className="nav-items"> 
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>
    )
}

export default navigationItems;