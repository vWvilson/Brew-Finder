import React from 'react';
import '../SignUpForm/SignUpForm.css'
import Toolbar from '../Toolbar/Toolbar';


const contact = props => (
<React.Fragment>        
    <Toolbar />
    <form className = 'sign-up-form'>
        <h3>Contact us</h3>
        <input type="text" name = "Name" placeholder = "Name (optional)"/>
        <input type="text" name = "Email" placeholder = "Email (optional)"/>
        <input type="text" name = "Subject" placeholder = "Subject"/>
        <textarea type="text" name = "message" placeholder = "Message"/>
        <button>Submit</button>
    </form>
    </React.Fragment>


)

export default contact