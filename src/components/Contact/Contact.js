import React from 'react';
import '../SignUpForm/SignUpForm.css'


const contact = props => (
    <form className = 'sign-up-form'>
        <input type="text" name = "Name" placeholder = "Name (optional)"/>
        <input type="text" name = "Email" placeholder = "Email (optional)"/>
        <input type="text" name = "Subject" placeholder = "Subject"/>
        <textarea type="text" name = "message" placeholder = "Message"/>
        <button>Submit</button>
    </form>


)

export default contact