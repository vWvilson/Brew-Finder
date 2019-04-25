import React from 'react';
import "../BrewList/BrewList.css"
import axios from 'axios';
import ToolBar from "../Toolbar/Toolbar"
import Beermap from "../Images/beermap.PNG"
import BreweryMap from "../BreweryMap/BreweryMap"


const styles = {
  main: {
    'backgroundImage': `url(${Beermap})`,
    'max-width': '100%',
    'max-height': '100%',
  }
}

export default class BrewList extends React.Component {
  state = {
    beers: []
  }

  componentDidMount() {
    axios.get("http://localhost:3002/brews/list",{crossdomain:true})
      .then(res => {
        const beers = res.data;
        this.setState({ beers });
        console.log(beers)
      })
  }

  render() {
    return (

    <React.Fragment>
      <ToolBar />
      <main style ={styles.main}>      
{/* < BreweryMap /> */}
      <div className = "application">
      <div className="picContainer">
      </div>
      <div className = "container">
      <div className = "beerlist">
      <div className = "beerlist-header">Your Favorites</div>
      <div className = "breweryBeers">
        { this.state.beers.map(beers =>
        <React.Fragment>
        <h4><li>{beers.brewery}</li></h4>
        <p><li>{beers.beer}</li></p>
      </React.Fragment>
          )}
         
      </div>
      </div>
      </div>
          
      </div>

      </main>
      </React.Fragment>

    )
  }
}