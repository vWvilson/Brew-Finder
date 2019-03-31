import React from 'react';
import './Toolbar.css'
import '../SideDrawer/DrawerToggleButton'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const toolbar = props => (
    <header className = 'toolbar'>
        <nav className = 'toolbar_navigation'>
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click = {props.drawerClickHandler}/>
            </div>
            <div className ='toolbar_logo'><a href= '/'>BREWFINDER</a></div>
            <div className = 'spacer' />
            <div className = 'toolbar_navigation_items'>
                <ul>
                    <li><a a href  = '/'>Breweries</a></li>
                    <li><a a href  = '/'>Your Brews</a></li>
                    <li><a a href  = '/'>Log In</a></li>
                    <li><a a href  = '/'>Contact</a></li>


                </ul>
            </div>
        </nav>
    </header>
)


export default toolbar
