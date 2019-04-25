import React, { Component } from 'react';
// import SideDrawer from "./components/Sidebar/SideDrawer/SideDrawer"
import Toolbar from './components/Toolbar/Toolbar';
import BreweryMap from './components/BreweryMap/BreweryMap'
// import "../src/App.scss"


class App extends Component {
  // state ={
  //   SideDrawerOpen:true
  // }

  
  
  
  render() {

    
    return (
      
    <div className = "main" style ={{height:'100%'}}>
       <Toolbar />
       {/* <SideDrawer  show = {this.state.SideDrawerOpen }/> */}

      <main className = 'mainContain'style = {{marginTop:'56px'}}> 
      <div className = "mobile-only">
      <div className = "desktop-only">
        <p>content</p>
        < BreweryMap />
        </div>
        </div>
      </main>
    </div>
      );
    }
  }
      



export default App;
