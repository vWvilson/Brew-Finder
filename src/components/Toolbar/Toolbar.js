import React from 'react';
import './Toolbar.css'
import {Link} from 'react-router-dom';



const toolbar = props => (
    <header className = 'toolbar'>
        <nav className = 'toolbar_navigation'>
            <div className="toolbar_toggle-button">
            </div>
            <div className ='toolbar_logo'><a href= '/'>BREWFINDER</a></div>
            <div className = 'spacer' />
            <div className = 'toolbar_navigation_items'>
                <ul>
                    <li><Link to = '/'>Home</Link></li>
                    <li><Link to = '/brews'>Your Brews</Link></li>
                    <li><Link to  = '/signup'>Sign Up</Link></li>
                    <li><Link to = '/contact'>Contact</Link></li>


                </ul>
            </div>
        </nav>
    </header>
)


export default toolbar
