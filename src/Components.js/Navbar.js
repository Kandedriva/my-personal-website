import React from "react";
import { Link } from "react-router-dom";
function Navbar(){

    return(
        <>

 <h1 className="name">Drissa Kande</h1>
    <nav className="">
     
        <div className="nav">
        <img src="/images/huntr2.jpg" alt="profilepicture" className="profilepicture"/>
        <p className="profileHeader">I’m a Software Engineer specializing in <strong> Websites and web apps Development</strong>, dedicated to helping you bring your ideas to life through modern, responsive, and user-friendly websites and web apps. 
        I focus on delivering clean, scalable solutions that not only look great but perform seamlessly across devices. 
        With a strong eye for design and a deep understanding of web technologies, I’m committed to providing reliable, results-driven development that supports your business goals.
        </p>
        </div>
  {/* <div className="profileDescription">
 
  </div> */}
     <div className="SocialProfile">
     <a href="https://www.linkedin.com/in/drissa-kande-a65307207/">LinkedIn</a>
        <a href="https://github.com/Kandedriva?tab=repositories">GitHub</a>
        {/* <a href="https://dev.to/drivano_kande_dcede430b61">Blogs</a> */}
     </div>
     <div>
     <Link to="/">Home</Link>
     <Link to="/about">👤 About me</Link>
     <Link to="/experience">💼 Experience</Link>
     <Link to="/projects">🚀 Projects</Link>
       
        <a href="mailto:drissakande@gmail.com">📩 Email me</a>
     </div>
    </nav>

    

        </>
    )
}

    

export default Navbar;