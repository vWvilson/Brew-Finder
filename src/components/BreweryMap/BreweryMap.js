import React, {Component}from 'react';
import  '../BreweryMap/BreweryMap.css';
import axios from 'axios';




class BreweryMap extends Component {
    state = {
        venues : []
    }
    componentDidMount() {
        this.getVenues()
        this.renderMap()
    }

    renderMap =()=> {
        loadScript( "https://maps.googleapis.com/maps/api/js? key=AIzaSyCfD5CdTO_-teb1j8dvEhBdvTTykcSGRNA&callback=initMap")
        window.initMap = this.initMap;
    }
    
    getVenues=() => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?";
        const parameters = {
            client_id:"5ELCQIWOQFDSFHTV5R0YOHE3ZTLY3Z3MZPYZBMJ0QZBJ0TLD",
            client_secret:"G2PI00PVIA3KONNFCFF50MCYY2L0ROUBGPV1AWV4NKEEMOB2",
            query:'brewery',
            near:"Austin",
            v:20181107


        }

        axios.get(endPoint + new URLSearchParams(parameters))
        .then(response =>{
            this.setState({
                venues: response.data.response.groups[0].items
            })
           
        })
        .catch(error => {
            console.log("ERROR" + error)
        })
    }

     initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 30.307182, lng: -97.755996},
          zoom: 8
        });
      }



    render() {
        return (
            <main>
           <div id='map'>
           
           </div> 
           </main>
        )
    }
}


 
function loadScript(url) {
    const index = window.document.getElementsByTagName('script')[0]
    // creates a script tag <script>
    const script = window.document.createElement('script')

    script.src = url
    script.async = true
    script.defer = true
    //  
    index.parentNode.insertBefore(script, index)

}

export default BreweryMap