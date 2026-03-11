import React, { useState } from "react";
import "./style.css";

function Dashboard() {

const [showProfile,setShowProfile] = useState(false);

return (

<div className="container">

<div className="sidebar">

<h2 className="logo">SkillExchange</h2>

<ul>
<li onClick={()=>setShowProfile(false)}>🏠 Dashboard</li>
<li>⬆ Upload Skill Video</li>
<li>📚 Browse Skills</li>
<li>🔎 Search Skills</li>
<li>🎥 My Uploaded Videos</li>
<li onClick={()=>setShowProfile(true)} style={{cursor:"pointer"}}>👤 Profile</li>
</ul>

</div>


<div className="main">

{showProfile ? (

/* Profile Page */

<div>

<h2>My Profile</h2>

<div className="card-info">

<h3>Name: Susmitha</h3>
<p>Email: susmitha@gmail.com</p>
<p>Skills Uploaded: 5</p>
<p>Videos Watched: 12</p>
<p>Project Progress: 60%</p>

</div>

</div>

) : (

/* Dashboard Videos */

<div>

<div className="topbar">
<input type="text" placeholder="Search skills..." />
<button>Search</button>
</div>

<h2>Skill Videos</h2>


<div className="card">
<img src="react1.jpg" alt="video"/>
<div className="card-info">
<h3>React Basics</h3>
<p>by Sharadha</p>
<p>React introduction and components.</p>
<button>Watch Video</button>
</div>
</div>


<div className="card">
<img src="react2.jpg" alt="video"/>
<div className="card-info">
<h3>JavaScript Fundamentals</h3>
<p>by Suresh</p>
<p>Learn variables, loops, and functions.</p>
<button>Watch Video</button>
</div>
</div>


<div className="card">
<img src="react3.jpg" alt="video"/>
<div className="card-info">
<h3>HTML & CSS Design</h3>
<p>by Anitha</p>
<p>Create beautiful web pages using HTML & CSS.</p>
<button>Watch Video</button>
</div>
</div>


<div className="card">
<img src="react4.jpg" alt="video"/>
<div className="card-info">
<h3>Python Basics</h3>
<p>by Rahul</p>
<p>Introduction to Python programming.</p>
<button>Watch Video</button>
</div>
</div>


<div className="card">
<img src="react5.jpg" alt="video"/>
<div className="card-info">
<h3>Java Programming</h3>
<p>by Priya</p>
<p>Learn Java programming fundamentals.</p>
<button>Watch Video</button>
</div>
</div>

</div>

)}

</div>

</div>

);

}

export default Dashboard;