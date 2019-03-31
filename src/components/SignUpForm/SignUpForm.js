import React from 'react';
import './SignUpForm.css'


const signUpForm = props => (
    <form className = 'sign-up-form'>
        <input type="text" name = "First Name" placeholder = "First Name"/>
        <input type="text" name = "Last Name" placeholder = "Last Name"/>
        <input type="text" name = "User Name" placeholder = "User Name"/>
        <input type="text" name = "Email" placeholder = "Email"/>
        <button>Submit</button>
    </form>



)


export default signUpForm
