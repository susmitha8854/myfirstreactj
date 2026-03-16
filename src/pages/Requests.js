import React, { useState } from "react";

function Requests(){

const [skill,setSkill] = useState("");

const [requests,setRequests] = useState(
JSON.parse(localStorage.getItem("requests")) || []
);

const addRequest = () => {

if(skill==="") return;

let updatedRequests = [...requests, skill];

setRequests(updatedRequests);

localStorage.setItem("requests", JSON.stringify(updatedRequests));

setSkill("");

};

return(

<div className="main">

<h2>Request a Skill</h2>

<input
type="text"
placeholder="Enter skill you want"
value={skill}
onChange={(e)=>setSkill(e.target.value)}
/>

<button onClick={addRequest}>Submit Request</button>

<h3>Requested Skills</h3>

{requests.length === 0 ? (
<p>No skill requests yet</p>
) : (

requests.map((r,index)=>(
<p key={index}>📩 {r}</p>
))

)}

</div>

);

}

export default Requests;