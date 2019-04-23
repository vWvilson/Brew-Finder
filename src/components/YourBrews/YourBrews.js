import React, {Component} from 'react';
import Select from 'react-select'
import Toolbar  from '../Toolbar/Toolbar'
import "../YourBrews/YourBrews.css"
import { Link } from 'react-router-dom';



const brewery = [
  { value: 'zilker', label: 'Zilker Brewing Co.' },
  { value: 'lazarus', label: 'Lazarus Brewing Company' },
  { value: 'blueOwl', label: 'Blue Owl Brewing' },
  { value: 'brewersTable', label: "The Brewer's Table" }, 
  { value: 'abgb', label: "The ABGB" },
  { value: 'oddwood', label: 'Oddwood Ales' },
  { value: 'draughtHouse', label: 'Draught House Pub & Brewery' },
  { value: 'southernHeights', label: 'Southern Heights Brewery' },
  { value: 'eastciders', label: 'Austin Eastciders' },
  { value: 'uncleBillys', label: "Uncle Billy's Brew & Que" },
  { value: 'pinyhouse', label: 'Pinthouse Pizza' },
  { value: 'stElmo', label: 'St. Elmo Brewing Company' },
  { value: 'independence', label: 'Independence Brewing Co.' },
  { value: 'friends', label: 'Friends and Allies Brewing' },
  { value: '512', label: '(512) Brewing Company' },
  { value: 'pinthouse', label: 'Pinthouse Pizza' },
  { value: 'brewtorium', label: 'The Brewtorium' },
  { value: 'blackStar', label: 'Black Star Co-op Pub & Brewery' },
  { value: 'adelberts', label: "Adelbert's Brewery" },
  { value: 'billysBurnet', label: "Billy's On Burnet" },
  { value: 'bangers', label: "Banger's Sausage House & Beer Garden" },
  { value: 'austinBeerworks', label: 'Austin Beerworks' },
  { value: 'bjsBrew', label: "BJ's Restaurant & Brewhouse" },
  { value: 'meridian', label: 'Meridian Hive Meadery' },
  { value: 'mort', label: 'Mort Subite' },
  { value: 'whipInn', label: 'Whip In Convenience Store & Pub' },
  { value: 'craftPride', label: 'Craft Pride' },
  { value: 'skull', label: 'Skull Mechanix Brewery' },
]
  


export default class YourBrews  extends Component {
  state = {
    selectedOption: null,
    favoriteBeer: ""
  }
   
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  handleOnclick = () => {

  }


  render() {
    const { selectedOption } = this.state;

    return (
  <React.Fragment>  
    <Toolbar />
      <form>
          <h3>Select a brewery and enter a favorite beer</h3>
        <Select value={selectedOption}
        onChange={this.handleChange} options={brewery} />
         <input type="text" placeholder="favorite beer"></input>
         <Link to = "/list"><button>add to favorites</button></Link>
      </form>
</React.Fragment>  
    

    )}
}







