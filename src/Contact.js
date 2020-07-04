import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter , faFacebook , faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons' ;

const Contact = () => {

    return(
             <div>
                  <div className="about_head">
                      <h6>Feel free  </h6>
                      <p><span>Get in Touch</span> </p>
                  </div>
                  <div className="image">
                    <img src="images/karishmapr.jpg" alt="karishma" className="contact_image" /> 
                  </div>
                  <div className=" details">
                    <p>  Karishma Jain </p> 
                    <p>  Contact : +919587748107 </p>  
                    <p>  Email : kanu.karishma3199@gmail.com </p>
                    <div className="social_links">
                        <ul >
                            <li>
                                <Link to="https://github.com/karishma3199" className="Link"> <FontAwesomeIcon icon={faGithub}  size="md"/>
                                </Link>
                            </li>
                            <li   className="logo_link" >
                                <Link to="https://www.linkedin.com/in/karishma-jain-314590160/" className="Link"><FontAwesomeIcon icon={faLinkedin}  size="md"/>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.twitter.com/rockingkanu" className="Link"><FontAwesomeIcon icon={faTwitter}  size="md "/>
                                </Link>
                            </li>
                            <li   className="logo_link">
                                <Link to="https://www.facebook.com/karishma.jain.77312477/" className="Link"><FontAwesomeIcon icon={faFacebook}  size="md" />
                                </Link> 
                            </li>
                             
                        </ul>
                </div>
            </div> 
            </div>     
    );
}
export default Contact;