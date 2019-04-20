import React, {Component} from 'react';
import Toolbar from '../Toolbar/Toolbar';
import './SignUpForm.css';
import axios from 'axios';



export default class SignIn extends Component {
    state = {
        username : "",
        password : "",

    }
    handleChange = (event) => {
        this.setState({
           [event.target.name]:event.target.value
        })
        console.log(this.state)
        
    }


    handleSubmit = (event) => {
        event.preventDefault();



        const {username, password} = this.state;
        axios.post("http://localhost:3002/signup/login", { username, password, }).then(result => {
            console.log("im in");
          });

    }

        
    
    
    render () {
        const {username, password} = this.state;

    return (
    <React.Fragment>
     <Toolbar />
        <form method ="post" action = "/signup" onSubmit = {this.handleSubmit} className = 'sign-up-form'>
            <h3>Sign in to your account</h3>
            <input 
              type="text" 
              name = "username" 
              value = {username}
              onChange = {this.handleChange}
            placeholder = "User Name"/>


             <input 
               type="text" 
               name = "password" 
               value = {password}
               onChange = {this.handleChange}
               placeholder = "Password"/>
            <button>Sign In</button>
        </form>
    </React.Fragment>
        
       )}
         }




