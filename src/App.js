import React, { Component } from 'react';
// import SideDrawer from "./components/Sidebar/SideDrawer/SideDrawer"
import Toolbar from './components/Toolbar/Toolbar';
import BreweryMap from './components/BreweryMap/BreweryMap'


class App extends Component {
  // state ={
  //   SideDrawerOpen:true
  // }

  
  
  
  render() {

    
    return (
      
    <div style ={{height:'100%'}}>
       <Toolbar />
       {/* <SideDrawer  show = {this.state.SideDrawerOpen }/> */}

      <main className = 'main'style = {{marginTop:'56px'}}> 
        <p>content</p>
        < BreweryMap />
      </main>
    </div>
      );
    }
  }
      



export default App;
