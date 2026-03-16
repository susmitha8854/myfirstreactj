import React, { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard(){

const [videos, setVideos] = useState([]);
const [requests, setRequests] = useState([]);

useEffect(() => {

const savedVideos = JSON.parse(localStorage.getItem("videos")) || [];
const savedRequests = JSON.parse(localStorage.getItem("requests")) || [];

setVideos(savedVideos);
setRequests(savedRequests);

}, []);

return(

<div className="dashboard-main">

<h2>Dashboard</h2>

<div className="cards">

<div className="card-box users">
<h3>Total Users</h3>
<p>1</p>
</div>

<div className="card-box skills">
<h3>Skills Shared</h3>
<p>{videos.length}</p>
</div>

<div className="card-box requests">
<h3>Skill Requests</h3>
<p>{requests.length}</p>
</div>

</div>

</div>

);

}

export default Dashboard;