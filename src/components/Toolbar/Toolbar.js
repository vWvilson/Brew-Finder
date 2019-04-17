import React from 'react';
import './Toolbar.css'
import '../Sidebar/SideDrawer/DrawerToggleButton'
import DrawerToggleButton from '../Sidebar/SideDrawer/DrawerToggleButton';
import {Link} from 'react-router-dom';



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
                    <li><Link to = '/'>Home</Link></li>
                    <li><Link to = '/'>Your Brews</Link></li>
                    <li><Link to  = '/signup'>Sign Up</Link></li>
                    <li><Link to = '/contact'>Contact</Link></li>


                </ul>
            </div>
        </nav>
    </header>
)


export default toolbar
