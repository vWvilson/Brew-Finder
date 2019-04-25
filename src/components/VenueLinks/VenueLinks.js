import React,{Componenet} from "react";
import axios from "axios"







export default class  VenueLinks extends Componenet {
    state = {
        venues : [],
    }
    componentDidMount() {
        this.getVenues()
    }

    



    getVenues=() => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?";
        const parameters = {
            client_id:"5ELCQIWOQFDSFHTV5R0YOHE3ZTLY3Z3MZPYZBMJ0QZBJ0TLD",
            client_secret:"G2PI00PVIA3KONNFCFF50MCYY2L0ROUBGPV1AWV4NKEEMOB2",
            query:'brewery',
            near:"Austin",
            radius: 10000,
            v:20181107
           


        }

        
        axios.get(endPoint + new URLSearchParams(parameters))
        .then(response =>{
            this.setState({
                venues: response.data.response.groups[0].items
            } 
            )
            console.log(this.state.venues)

        })
        .catch(error => {
            console.log("ERROR" + error)
        })
    }




render(){
    return (
        <div>
            <ul>
                {this.state.venues.map(venues =>{
                    return <li>{venues.venues.name} Location:{venues.venues.location.address}</li>
                })}
            </ul>
        </div>
    )
}
}
