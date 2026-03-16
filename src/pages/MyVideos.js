import React, { useEffect, useState } from "react";

function MyVideos(){

const [videos,setVideos] = useState([]);

useEffect(()=>{

const savedVideos = JSON.parse(localStorage.getItem("videos")) || [];
setVideos(savedVideos);

},[]);

const deleteVideo = (index) => {

let updatedVideos = [...videos];

updatedVideos.splice(index,1);

setVideos(updatedVideos);

localStorage.setItem("videos", JSON.stringify(updatedVideos));

};

return(

<div className="main">

<h2>My Uploaded Videos</h2>

{videos.length === 0 ? (

<p>No videos uploaded</p>

) : (

videos.map((video,index)=>(
<div className="video-card" key={index}>

<h3>{video.title}</h3>

<video width="400" controls>
<source src={video.url} type="video/mp4"/>
</video>

<br/><br/>

<button onClick={()=>deleteVideo(index)}>Delete</button>

</div>
))

)}

</div>

)

}

export default MyVideos;