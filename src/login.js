import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

function handleLogin(e){
e.preventDefault();

if(username === "admin" && password === "1234"){
navigate("/dashboard");
}
else{
alert("Invalid username or password");
}
}

// register button
function goRegister(){
alert("Register Page Coming Soon");
}

// forgot password
function forgotPassword(){
alert("Please contact admin to reset password");
}

return(

<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
height:"100vh",
background:"linear-gradient(135deg,#4facfe,#00f2fe)"
}}>

<form onSubmit={handleLogin} style={{
background:"white",
padding:"40px",
borderRadius:"12px",
boxShadow:"0 0 15px rgba(0,0,0,0.2)",
textAlign:"center"
}}>

<h2 style={{marginBottom:"20px",color:"#2d5ea8"}}>Skill Exchange Login</h2>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
style={{
display:"block",
width:"250px",
margin:"10px auto",
padding:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={{
display:"block",
width:"250px",
margin:"10px auto",
padding:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<button type="submit" style={{
width:"100%",
padding:"10px",
background:"#2d5ea8",
color:"white",
border:"none",
borderRadius:"6px",
cursor:"pointer",
fontWeight:"bold",
marginTop:"10px"
}}>
Login
</button>

<p 
onClick={forgotPassword}
style={{
marginTop:"10px",
color:"#2d5ea8",
cursor:"pointer",
fontSize:"14px"
}}
>
Forgot Password?
</p>

<p style={{marginTop:"10px"}}>
Don't have an account? 
<span 
onClick={goRegister}
style={{
color:"#ff5722",
cursor:"pointer",
marginLeft:"5px",
fontWeight:"bold"
}}
>
Register
</span>
</p>

</form>

</div>

);

}

export default Login;