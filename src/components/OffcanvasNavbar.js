import React from 'react'
import { NavLink } from 'react-router-dom'

export default function OffcanvasNavbar() {
   let style={
        width:"60px",fontSize:"40px",background:"violet",padding:"2px 4px",borderRadius:"10px"
    }


  return (
    <nav className="offCanvasbackground">
 
  <div >
  
     <div 
  style={{
    width: '250px',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'papayawhip',
    padding: '15px'
  }}
>
        
      <div  >
        <div> <div style={style}>{"\u{1FA7A}"}</div>
        <br />
            <h3 className="textGradient">MediCore</h3>
            <br /><br />
            <hr style={{border:"none",borderTop:"2px solid blue"}} />
        </div><br /><br /><br />
        <ul >
            <li className=" style">
            <NavLink className="textdecorate nav transition2" aria-current="page" to="/">Dashboard</NavLink>
          </li>
          <li className="nav-item style">
            <NavLink className="textdecorate  nav transition2" aria-current="page" to="/patients">Patients</NavLink>
          </li>
          <li className="nav-item style">
            <NavLink className="textdecorate nav transition2" to="/doctors">Doctors</NavLink>
          </li>
           <li className="nav-item style">
            <NavLink className="textdecorate nav transition2 " to="/appointments" >Appointments</NavLink>
          </li>
           <li className="nav-item style">
            <NavLink className="textdecorate nav transition2" to="/departments">Departments</NavLink>
          </li>
         
        </ul>
     
      </div>
    
    </div>
  </div>

</nav>
  )
}
