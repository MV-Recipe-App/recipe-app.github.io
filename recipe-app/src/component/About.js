import React from "react";
import anapic from '../style/anapic.jpeg'
import mabepics from '../style/mabepics.jpeg'
import mabepic from '../style/mabepic.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function About() {
    return (
      <>
      <div className="split left">
        <div className="centered">
          <img className="profilePicAna" src={anapic} alt="Avatar"></img>
          <h2>Ana M. Gonzalez</h2>
          <p>I'm a very enthusiatic and empathetic individual who is passionate about Software Engineering and UX/UI Design. My passion for it came from my six years of experience working in customer service, where I was able to relate to customers, empathize with them and ultimately create amazing customer experiences. As a Software Engineer, I want to create inclusive and equitable applications that helps a multitude of users.
          </p>
          <p>
          Fun fact about me: I was part of Puerto Rico's national wrestling team for 10 years and I love to travel! 🤼🏾‍♀️🏖🌍✈</p>
          <a href="https://www.linkedin.com/in/amgh1/" target='blank'><FontAwesomeIcon icon={faLinkedin} className="link"/></a>
          <a href="https://github.com/gonzaana35" target='blank'><FontAwesomeIcon icon={faGithub} className="link"/></a>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <img className="profilePicMabe" src={mabepic} alt="Avatar"></img>
          <h2>Mamragbe Diaby</h2>
          <p>Software Engineering Intern at Cisco Systems. Creative and committed software engineer with a combined six years background in sales, customer service, and education. I am a natural and effective leader and team player. Book enthusiast with a passion for learning new things. I attest my success to my problem solving skills and hunger for greatness. I work best under pressure, I'm very optimistic, and I'm very adaptable. I am very research originated, loves organizing and I love having a hands-on approach when it comes to learning. Forward-thinking Software Engineer with background working productively in dynamic environments. Proud team player focused on achieving project objectives with speed and accuracy. Agile Software Engineer talented at contributing to multi-team development projects.</p>
          <a href="https://www.linkedin.com/in/mamragbediaby/" target='blank'><FontAwesomeIcon icon={faLinkedin} className="link"/></a>
          <a href="https://github.com/MabeDiaby" target='blank'><FontAwesomeIcon icon={faGithub} className="link"/></a>
        </div>
      </div>
      </>
    );
  }
  
  export default About;