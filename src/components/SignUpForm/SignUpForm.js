import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar';
// import BreweryMap from '../BreweryMap/BreweryMap'
import './SignUpForm.css';
import axios from 'axios';



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
        event.preventDefault();

        const {username, password,email} = this.state;
        axios.post("/signup", { username, password, email }).then(result => {
            console.log(this.username);
            console.log(username);
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
            <button>Submit</button>
        </form>
    </React.Fragment>
        
       )}
         }




