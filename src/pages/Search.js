import React, { useState } from "react";

function Search(){

const [query,setQuery] = useState("");
const [results,setResults] = useState([]);

const searchSkill = () => {

let videos = JSON.parse(localStorage.getItem("videos")) || [];

let filtered = videos.filter((video)=>
video.title.toLowerCase().includes(query.toLowerCase())
);

setResults(filtered);

};

return(

<div className="main">

<h2>Search Skills</h2>

<input
type="text"
placeholder="Search skill..."
onChange={(e)=>setQuery(e.target.value)}
/>

<button onClick={searchSkill}>Search</button>

<br/><br/>

{results.map((video,index)=>(
<div key={index}>

<h3>{video.title}</h3>

<video width="400" controls>
<source src={video.url} type="video/mp4"/>
</video>

</div>
))}

</div>

)

}

export default Search;