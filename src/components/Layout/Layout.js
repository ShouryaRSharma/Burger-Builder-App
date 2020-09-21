import React from 'react';
import Aux from '../../hoc/auxiliary';
// import classes from './Layout.module.scss';

const layout = (props) => {
    return(
        <Aux>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className="mt-2">
                {props.children}
            </main>
        </Aux>
    )  
}

export default layout;