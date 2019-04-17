import React from 'react'
import './SideDrawer.css'

const sideDrawer =props => {
    let drawerClasses = 'side-drawer';
    if(props.show) {
        drawerClasses ='side-drawer open'
    }
    return(
    <nav className ={drawerClasses}>
        <ul>
            <li><a href ='/'>Breweries</a></li>
            <li><a href ='/'>Your Beers</a></li>
            <li><a a href  = '/'>Log In</a></li>
            <li><a a href  = '/'>Log In</a></li>
            <li><a a href  = '/'>Contact Us</a></li>



        </ul>
    </nav>
    )
}

export default sideDrawer