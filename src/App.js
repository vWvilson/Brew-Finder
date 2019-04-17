import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import BreweryMap from './components/BreweryMap/BreweryMap'


class App extends Component {
  
  render() {
  
    return (
      
    <div style ={{height:'100%'}}>
       <Toolbar />
       

      <main className = 'main'style = {{marginTop:'56px'}}> 
        <p>This is the page content</p>
        < BreweryMap />
        {/* < MapContainer /> */}
      </main>
    </div>
      );
    }
  }
      



export default App;
