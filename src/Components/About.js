import React from 'react'
import { Link } from 'react-router-dom';
import '../about.css'; 
const About = () => {
  return (
    <main className="About">
       <div className="DeveloperInfo">

          <p className='aboutme'>
              An elegant social media app developed by{' '}
              <Link to={`https://www.linkedin.com/in/murugeshwari-m`} target="_blank">
                <span className='namespan'>Murugeshwari M</span>
              </Link>
          </p>

      </div>
        <h2>About our app</h2>

        <p style={{marginTop:"1rem"}}>Hello! Welcome to Social Media App, where creativity finds its voice and communities come together! We believe in the power of self-expression, connecting with others, and sharing moments that matter. Your story is unique, and this is the canvas to paint it on. &#x1F60A;</p>
        
        <h3 style={{marginTop:"1rem"}}>Our Mission</h3>

        <p style={{marginTop:"1rem"}}>We're on a mission to empower individuals to express themselves freely, foster meaningful connections, and build communities around shared interests. We believe in the strength of diverse perspectives and the magic that happens when people connect authentically.</p>
        <h3 style={{marginTop:"1rem"}}>Features We Love</h3>
        <p style={{marginTop:"1rem"}}></p>

        
        <ul>
          <li>
            <h5>Post Creation Tools:</h5>
            <p style={{marginTop:"1rem"}}>Express yourself with a wide array of creative tools. From text and images to videos and more, the possibilities are endless.</p>
          </li>
          <li>
            <h5 style={{marginTop:"1rem"}}>Collaborative Spaces:</h5>
            <p style={{marginTop:"1rem"}}>Create and join collaborative spaces where you can work on projects, share ideas, and build connections.</p>
          </li>
        </ul>
    </main>
  )
}
export default About