import React from 'react'
import "../css/home.css"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="first">
      <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
        }} >
    
        <h3>Trade-in-offer</h3> <br />
    
        <h1><span style={{color:"red",fontSize:"40px"}}>S</span>uper value deals</h1> <br />
        <h1>On all products</h1> <br />

        <p>Save more with coupons & up to <span style={{color:"brown",fontSize:"30px"}}>70%</span> off !</p> <br /> <br />
        <Link to='/Product'><button className='button' style={{padding:"15px", color:"white",backgroundColor:"blue",border:"none"}}>SHOP NOW</button></Link>
     
      </div>
      
      <img src="img5.png" alt="img"  width={"800px"} height={"500px"}/>
   
    </div>
  )
}

export default Home