import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const Menu = () => {

    return(
        <div class="header " >
                <ul > 
                    <li><Link to="/" className="Link">Home</Link></li>
                    <li class="header_text"><Link to="about" className="Link">About</Link></li>
                    <li class="header_text"><Link to="contact" className="Link">Contact</Link></li>
                </ul>
       </div>
        
    );
}
export default Menu;