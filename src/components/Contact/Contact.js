import React from 'react';
import './Contact.css'
const Contact = ()=> {
    return (
        <div className="Contact">
            <h1>Contact</h1>
            <ul className="unorderlist">
                <li>
                <p><i class="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/yonatan-goel-b84bb1141" > Linkdin Profile</a></p>

                </li>
                <li>
                <p><i class="fab fa-facebook-square"></i><a href="https://www.facebook.com/yonatan.goel"> Facebook</a></p>

                </li>
                <li>
                <p><i class="fab fa-github"></i><a href="https://github.com/johnnyBolony"> gitHub</a></p>

                </li>
            </ul>
        </div>
    )
}

export default Contact;