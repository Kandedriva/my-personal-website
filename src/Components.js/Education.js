import React from "react";

function Education(){


    return(
    <>
    <h1 className="skillsTitle">EDUCATION</h1>
    <div className="EducationContainer">
    <div className="education">
       <div className="schoolContainer">
       <h2>Borough of Manhattan Community College</h2>
       <img src="/images/bmcc-logo-two-line-BLUE-final400.jpg" alt="Schoollogo" className="schoollogo"></img>

<p><h3 className="schoolYear">New York, NY | August 2024 – Present</h3></p>
<b>Associate Degree in Computer Science.</b>
<p className="schooldetails">Currently pursuing coursework focused on algorithms, data structures, software engineering, and programming.
</p>
       </div>
  
    </div>
    </div>
   <div className="EducationContainer">
   <div className="education">
       <div className="schoolContainer">
       <h2>Flatiron School</h2>
       <img src="/images/Flatiron_School_logo.jpg" alt="Schoollogo" className="schoollogo"></img>

<p><h3 className="schoolYear">Remote | February 2023 – October 2023</h3></p>
<b>Certificate in Web Development</b>
<p className="schooldetails">Completed an intensive, project-based coding bootcamp focused on HTML, CSS, JavaScript, and React.
</p>
       </div>
    </div>
   </div>

    <div className="education">
       <div className="schoolContainer">
       <h2>Université Félix Houphouët-Boigny</h2>
       <img src="/images/UFHB.png" alt="Schoollogo" className="schoollogo"></img>

<p><h3 className="schoolYear">Abidjan, Côte d’Ivoire | 2016 – 2019</h3></p>
<b>Bachelor’s Coursework in Economics</b>
<p className="schooldetails">Completed foundational studies in economics including microeconomics, macroeconomics, and quantitative analysis.
</p>
       </div>
    </div>
   

    </>
    )

}
export default Education;