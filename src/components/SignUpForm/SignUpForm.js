import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar';
// import BreweryMap from '../BreweryMap/BreweryMap'
import './SignUpForm.css';


export default class SignUpForm extends Component {
    state = {
        username : "",
        password : "",
        email : ""

    }
    handleChange = (event) => {
        this.setState({
           [event.target.name]:event.target.value
        })
        console.log(this.state.username)
        
    }


    handleSubmit = (event) => {
        event.preventDefault()
        alert("handle submit" + this.state.value)
       

    }

        
    
    render () {
    return (
        <div>
        <Toolbar />

    <form onSubmit = {this.handleSubmit} className = 'sign-up-form'>
        
        <input 
        type="text" 
        name = "username" 
        value = {this.state.username}
        onChange = {this.handleChange}
        placeholder = "User Name"/>

        <input 
        type="text" 
        name = "email" 
        value = {this.state.email}
        onChange = {this.handleChange}
        placeholder = "Email"/>

        <input 
        type="text" 
        name = "password" 
        value = {this.state.password}
        onChange = {this.handleChange}
        placeholder = "Password"/>
        <button>Submit</button>
    </form>

    </div>
    )
}
}

