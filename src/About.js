import React from 'react';
//import {Link} from 'react-router-dom';
import './style.css';
const About= () => {

    return(
        <div className="main_img">
            <div class="about_head">
                <h6>Get to know </h6>
                <p><span>About Me</span> </p>
            </div> 
            <div class="clear"></div>
            <div class="row">
                <div class="col-md-3 sidenav">
                     <div class="image">
                         <img src="images/kj.jpg" alt="karishma" class="contact_image" />
                     </div>
                </div>
                 <div class="col-md-9 about_text">
                     <h2> Who am i?</h2>
                     <h4>Karishma Jain , a software engineer. </h4>
                     <h6>I am pursuing B.E. from MBM Engineering College , in INFORMATION TECHNOLOGY branch. I am an ambitious student who loves to learn new technologies and impliment them in real life.                   </h6>
                </div>         
            </div>
    </div>  
    );
}
export default About;