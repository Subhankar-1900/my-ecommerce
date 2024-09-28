import React from "react";
import "../css/footer.css"
function Footer() {
  return (
    
      <nav className="footer" style={{ height: "180px"  }}>
      <div style={{display:"inline-block"}}>
      <div style={{display:"flex"}}>
        <div style={{}}>
          
          <h1>About</h1><br />
          <a href="">Contact</a> <br />
          <a href="">About us</a><br />
          <a href="">Cart</a>
          
        </div>
        <div style={{marginLeft:"250PX"}}>
          
          <h1>Payment</h1><br />
          <ul>Shipping</ul>
          <ul>FAQ</ul>
          <ul>Return</ul>
          
        </div>
        <div style={{marginLeft:"300PX"}}>
          
          <h1>Contact</h1><br />
         <ul>ecom@gmail.com</ul>
         <ul>+91-8260593687</ul> 
         <ul>www.ecom.com</ul>
        </div>
        <div style={{marginLeft:"300PX"}}>
          
          <h1>Social</h1><br />
           <div>
           <img src="facebook.png" alt="" style={{height:"30px",width:"30px", backgroundColor:"white",borderRadius:"50%"}}/>
           <img src="insta.png" alt=""style={{height:"30px",width:"30px",marginLeft:"3px",backgroundColor:"white",borderRadius:"50%"}} />
           <img src="twitt.png" alt=""style={{height:"30px",width:"30px",marginLeft:"3px",backgroundColor:"white",borderRadius:"50%"}} />
           </div>
        </div>
        </div>
        <div style={{textAlign:"center"}}><h2>@2024Cara.com</h2></div> 
        </div>   
      </nav>
      
    
  );
}

export default Footer;
