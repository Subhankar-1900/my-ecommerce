import React, { useState } from "react";
import "../css/login.css"
function Login() {
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[usernameError,setUsernameError]=useState("*")
  const[emailError,setEmailError]=useState("*")
  const[passwordError,setPasswordError]=useState("*")
  

  function handleUsername(e){
    const value=e.target.value
    if(value.length<4){
      setUsernameError("invalid")
    }
    else{
      setUsernameError("")
    }
    setUsername(value)
  }
  function handleEmail(e){
    const value =e.target.value
    const isValidEmail=([])
    if(isValidEmail){
      setEmailError("Email is valid")
    } else{
      setEmailError("Email is invaild")
    }
      setEmail(value)
  }
  function handlePassword(e){
    const value=e.target.value
    if(value.length < 8){
      setPasswordError("Invalid password ")
    }
    else{
      setPasswordError("")
    }
    setPassword(e.target.value)
  }
  function Submit(e){
   e.preventDefault()
   if(username && email && password){
    alert("form submit successfully ..")
   }else
   {
    console.log(username,email,password);
    setUsername("")
    setPassword("")
   }
  }
  // function formSubmit(){
   
  //       alert("form submit successfully ..")
      
  // }
  return (
    <div className="loginfirst">
      <form onSubmit={Submit} >
      <div className="container">
           <h1>Sign Up</h1>
               <div className="loginsignup">
                  <input type="text"  placeholder="Enter your Name" onChange={handleUsername}/>
                  <span style={{color:"red"}}>{usernameError}</span> <br />
                  <input type="email" placeholder="Email address" onChange={handleEmail}  />
                  <span style={{color:"red"}}>{emailError}</span> <br />
                  <input type="password" placeholder="Password" onChange={handlePassword}/>
                  <span style={{color:"red"}}>{passwordError}</span> <br />
               </div>
               <button  >Continue</button>
               <p className="loginsignupone" > Already have an account ?<span> Sign in </span></p>
               <div className="agree">
               <input type="checkbox" />
               <p> By continuing , I Agree to the terms of use & privacy.</p>
               </div>
               </div>
      </form>
      {/* <h3>{username}</h3>
      <h2>{email}</h2>
      <h3>{password}</h3> */}
    </div>
  );
}

export default Login;
