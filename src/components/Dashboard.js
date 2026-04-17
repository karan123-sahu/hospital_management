import React,{useEffect} from 'react'
import {FaTrash} from "react-icons/fa"
export default function Dashboard(props) {

       let style={
        width:"40px",fontSize:"20px",background:"violet",padding:"2px 4px",borderRadius:"10px"
    }
    let mystyle={
        position:"relative",left:"20px",top:"-290px",background:"pink",
        padding:"5px",
        width:"160px",
        borderRadius:"30px"
    }
  return (
   <>
   <div className="container " style={{  marginLeft:"300px",
  width:"80vw",
  marginTop:"30px"}}>
 {/* https://wallpaperaccess.com/full/1336181.jpg */}
         <img style={{zIndex:"-1",height:"300px", width:"75vw",borderRadius:"30px",position:"relative",top:"-20px"}} src="https://wallpaperaccess.com/full/1336181.jpg" alt="" />
    <div style={mystyle}>COMMAND CENTER</div>    
    <div style={{position:"relative",top:"-200px",color:"white" ,marginLeft:"20px"}}>
            
            <h1 className="textGradient scale">Welcome to MediCore</h1>
            <p>Seamlessly manage your hospital operations, patient records, and staff scheduls from one unified platform</p>
        </div>
        
         <div  style={{position:"relative",top:"-100px"}}>
          <div className="photo">
           <img className="img9" src="https://th.bing.com/th/id/OIP.AJ2AeL4w_Y79KwMP-eRR9gHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
           
           <img className="img9" src="https://tse2.mm.bing.net/th/id/OIP.8p5h_sTCNXLXW1aQmOjRbQHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
             <img className="img9" src="https://th.bing.com/th/id/OIP.HxAQQqXP0y2LadAm7SILtwAAAA?w=115&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
             <img className="img9" src="https://th.bing.com/th/id/OIP.sunacC-tyoNP5vuQKwHXrgHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        </div>
            <hr style={{border:"none",borderTop:"3px solid red"}} />
         <h1>Overview</h1>
            <ul className="contain">
                <div className="boxdesign boxdesign3 transition" > 
                     <div style={style}>{"\u{1F465}"}</div>
                    <h1>{props.text1}</h1>
               <li>Total Patients</li></div>
               <div className="boxdesign boxdesign3 transition">
                 <div style={style}>{"\u{1FA7A}"}</div>
                <h1>{props.text2}</h1>
                <li>Active Doctors</li></div>
            <div  className="boxdesign boxdesign3 transition">  
                 <div style={style}>{"\u{1F4C5}"}</div>
                <h1>{props.text3}</h1>
                <li>Appointments</li></div> 
              <div  className="boxdesign boxdesign3 transition"> 
                 <div style={style}>{"\u{1F3EC}"}</div>
                <h1>{props.text4}</h1>
                <li>Department</li></div>
            </ul>
         </div>
         
     <footer className="footer">
  <div className="footer-container">

  
    <div className="footer-section">
      <h2>🏥 P&K Hospitals</h2>
      <p>📍 123 Health Street, Bhopal, MadhyaPradesh, India</p>
      <p>📞 +91 98765 43210</p>
      <p>✉️ contact@citycarehospital.com</p>
    </div>

    
    <div className="footer-section">
      <h3>Working Hours</h3>
      <p>Mon – Sat: 8:00 AM – 10:00 PM</p>
      <p><strong>Emergency: 24/7 Available</strong></p>
    </div>

  

   
    <div className="footer-section">
      <h3>Services</h3>
      <ul>
        <li>Emergency Care</li>
        <li>Cardiology</li>
        <li>Neurology</li>
        <li>Pediatrics</li>
        <li>Radiology</li>
      </ul>
    </div>

  </div>

 
  <div className="footer-bottom">
    <p>© 2026 CityCare Hospital. All Rights Reserved.</p>
    <p>
      <a href="#">Privacy Policy</a> | 
      <a href="#">Terms & Conditions</a>
    </p>
  </div>
</footer>
         </div>
 
   </>
  )
}
