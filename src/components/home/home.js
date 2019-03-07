import React, { Component } from 'react';
import './home.css';
import linkedin from './linkedin.png';
import github from './github-logo.png';

class Home extends Component{
    render() {
        return(
            <div className="home">
                <div className="header">
                    <div className="logo">   
                        <h1>Eduardo Franco</h1>
                        <h2>Web Developer</h2>
                    </div>   

                    <div className="social-media">
                        <img alt="" className="linkedin" src={linkedin}></img>
                        <img alt="" className="github" src={github}></img>
                    </div>  
                </div>

                <div className="nav">
                    <ul>
                        <li>Home</li>
                        <li>Resume</li>
                        <li>Work</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact Me</li>
                    </ul>
                </div>

                <div className="contents">
                    <div className="cover-letter">
                        <p><strong>To whom it may concern,</strong><br>
                        </br>
                        <br></br>
                           I am interested in becoming 
                           a front-end developer for a 
                           company in need of such services.
                        <br></br>
                        <br></br>    
                           Although I have not had a job 
                           in this field, what I do have 
                           is 6 years of amatuer front-end 
                           development experience and 
                           self-taught training. Along 
                           with that I have extensive 
                           experience of leading teams 
                           as an intern with the 
                           Exploratorium's historic 
                           explainer program whilst also 
                           being a proficient guest services 
                           associate since I can offer the 
                           versatility of being able to speak 
                           to people of different cultures whom 
                           have different language groups. I pride myself in being 
                           responsible, diligent, and creating a 
                           positive work environment.
                           <br></br>
                           <br></br>
                           I want to be a part of your front-end 
                           development team so I can help with 
                           the mission while finding a great 
                           professional outlet for my creative 
                           work. You will find out more about me 
                           through this website. 
                           Thank you for your time</p>
                    </div>
                </div>

                <div className="footer">

                </div>
            </div>
        )
    }
}

export default Home;
