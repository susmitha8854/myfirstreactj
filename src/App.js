import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Search from "./pages/Search";
import Browse from "./pages/Browse";
import MyVideos from "./pages/MyVideos";
import Profile from "./pages/Profile";
import WatchVideo from "./pages/WatchVideo";
import Requests from "./pages/Requests";

function App(){

return(

<Router>

<div className="container">

<Sidebar/>

<Routes>

<Route path="/" element={<Dashboard/>}/>
<Route path="/upload" element={<Upload/>}/>
<Route path="/search" element={<Search/>}/>
<Route path="/browse" element={<Browse/>}/>
<Route path="/videos" element={<MyVideos/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/requests" element={<Requests/>}/>
<Route path="/watch" element={<WatchVideo/>}/>



</Routes>

</div>

</Router>

)

}

export default App;