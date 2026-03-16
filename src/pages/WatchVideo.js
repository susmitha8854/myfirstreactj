import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function WatchVideo(){

const location = useLocation();
const video = location.state;

const [views,setViews] = useState(video.views || 0);

useEffect(()=>{

const newViews = views + 1;
setViews(newViews);

},[]);

return(

<div className="main">

<h2>{video.title}</h2>

<img src={video.thumb} width="400" alt="video"/>

<p>👀 Views: {views}</p>

</div>

)

}

export default WatchVideo;