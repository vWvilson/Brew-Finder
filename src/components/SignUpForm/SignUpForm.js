import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar';
// import BreweryMap from '../BreweryMap/BreweryMap'
import './SignUpForm.css';
import axios from 'axios';
import { Link } from 'react-router-dom';




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
        console.log(this.state)
        
    }


    handleSubmit = (event) => {
        event.preventDefault();



        const {username, password,email} = this.state;
        axios.post("http://localhost:3002/signup/create", { username, password, email }).then(result => {
            console.log(result);
          });

    }

        
    
    
    render () {
        const {username, password,email} = this.state;

    return (
    <React.Fragment>
     <Toolbar />
        <form method ="post" action = "/signup" onSubmit = {this.handleSubmit} className = 'sign-up-form'>
            <h3>Create your account</h3>
            <input 
              type="text" 
              name = "username" 
              value = {username}
              onChange = {this.handleChange}
            placeholder = "User Name"/>

            <input 
              type="text" 
              name = "email" 
              value= {email}
              onChange = {this.handleChange}
              placeholder = "Email"/>

             <input 
               type="text" 
               name = "password" 
               value = {password}
               onChange = {this.handleChange}
               placeholder = "Password"/>
            <button>Create Account</button>
           <Link to = "/signin"> <button>Sign In</button> </Link>

        </form>
    </React.Fragment>
        
       )}
         }




