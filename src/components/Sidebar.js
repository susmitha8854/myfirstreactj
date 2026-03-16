import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar(){
return(

<div className="sidebar">

<h2 className="logo">SkillExchange</h2>

<ul>

<li>
<Link to="/">
🏠 <span>Dashboard</span>
</Link>
</li>

<li>
<Link to="/upload">
⬆ <span>Upload Skill</span>
</Link>
</li>

<li>
<Link to="/browse">
📚 <span>Browse Skills</span>
</Link>
</li>

<li>
<Link to="/requests">
📩 <span>Skill Requests</span>
</Link>
</li>

<li>
<Link to="/search">
🔎 <span>Search Skills</span>
</Link>
</li>

<li>
<Link to="/videos">
🎥 <span>My Videos</span>
</Link>
</li>

<li>
<Link to="/profile">
👤 <span>Profile</span>
</Link>
</li>

</ul>

</div>

);
}

export default Sidebar;