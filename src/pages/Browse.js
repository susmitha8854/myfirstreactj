import React from "react";
import "./Browse.css";

function Browse(){

const skills = [
  {
    title: "React Basics",
    creator: "Susmitha",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Java HashMap Tutorial",
    creator: "John",
    video: "https://www.w3schools.com/html/movie.mp4"
  }
];

return(
<div className="browse-container">

<h2>Browse Skills</h2>

<div className="skills-grid">

{skills.map((skill,index)=>(
<div className="skill-card" key={index}>

<video width="100%" controls>
<source src={skill.video} type="video/mp4"/>
</video>

<h3>{skill.title}</h3>
<p>By {skill.creator}</p>

<button className="watch-btn">Watch</button>

</div>
))}

</div>

</div>
)

}

export default Browse;