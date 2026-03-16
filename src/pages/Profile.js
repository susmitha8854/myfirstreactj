import React, { useState, useEffect } from "react";

function Profile(){

const [user,setUser] = useState({
name:"",
email:"",
skills:""
});

const [edit,setEdit] = useState(false);

useEffect(()=>{

const savedUser = JSON.parse(localStorage.getItem("user"));

if(savedUser){
setUser(savedUser);
}

},[]);

const saveProfile = () => {

localStorage.setItem("user", JSON.stringify(user));
setEdit(false);

};

return(

<div className="main">

<h2>My Profile</h2>

{edit ? (

<div>

<input
type="text"
value={user.name}
placeholder="Name"
onChange={(e)=>setUser({...user,name:e.target.value})}
/>

<br/><br/>

<input
type="email"
value={user.email}
placeholder="Email"
onChange={(e)=>setUser({...user,email:e.target.value})}
/>

<br/><br/>

<input
type="text"
value={user.skills}
placeholder="Skills"
onChange={(e)=>setUser({...user,skills:e.target.value})}
/>

<br/><br/>

<button onClick={saveProfile}>Save</button>

</div>

) : (

<div>

<p><b>Name:</b> {user.name}</p>
<p><b>Email:</b> {user.email}</p>
<p><b>Skills:</b> {user.skills}</p>

<button onClick={()=>setEdit(true)}>Edit Profile</button>

</div>

)}

</div>

)

}

export default Profile;