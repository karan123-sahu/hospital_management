import React,{useState} from 'react'
import {useEffect} from "react"

export default function Patients({tex4,doctor,patient}) {
       let style={
        width:"40px",fontSize:"20px",background:"violet",padding:"2px 4px",borderRadius:"10px",display:"inlineBlock"
    }
  
    useEffect(()=>{
        const savedData=JSON.parse(localStorage.getItem("users4"));
        if(savedData){
            setData(savedData);
             tex4(savedData.length)
        }
       
    },[])

 

    let [form,setForm]=useState({
         Date:"",
        Patient:"",
        Doctor:""
    })
    
  


    
  
    let [data,setData]=useState([]);
  
    let change=(e)=>{
        setForm({
            ...form,[e.target.name]:e.target.value
        });
    }
    
    let addData=()=>{
         setHi(1200)
        setX("none")
        setY("") 
         if(!form.Patient||!form.Doctor||!form.Date)return;
        let user=patient.find(p=>p.Name===form.Patient);
        let doct=doctor.Name;
       
 
       if(doct!==form.Doctor)  alert(".. hi")
        let user2=doctor.find(p=>p.Name===form.Doctor);
        if(!user){
            alert("not patient found")
            setForm({
        Date:"",
        Patient:"",
        Doctor:""
       
       })
            return;
        }
         if(!user2){
            alert("not doctor found")
            setForm({
        Date:"",
        Patient:"",
        Doctor:""
       
       })
            return;
        }
   const newData=[...data,form];
       setData(newData);
       tex4(newData.length)
       localStorage.setItem("users4",JSON.stringify(newData));
       setForm({
        Date:"",
        Patient:"",
        Doctor:""
       
       })
    }
 
    
    
  
    let deleteData=(index)=>{
        let a=prompt("enter code to delete")
        if(a!=="1234"){
            alert("Invalid Code")
            return;
        }
      const newData=data.filter((_,i)=>i!==index);
      setData(newData);
       tex4(newData.length)
      localStorage.setItem("users4",JSON.stringify(newData));
    }

          let [hi,setHi]=useState(1200)
               let [x,setX]=useState("none");
               let [y,setY]=useState("");
            
              let dothis=()=>{
                setHi(0) 
                setX("")
                setY("none")}
            



  return (
 <>
 <div className="container about">
    <span className="display">
        <h1 className="textGradient"><span className="moveP">A</span> <span className="scale">ppointments</span></h1>
        <p>Shedule and manage patient visits</p>
    </span>
   
    
    <div className="input "  style={{paddingLeft:hi+"px",zIndex:"2",position:"relative",pointerEvents:x}}>
        <div className="inputBox">
            <div className="box2">
       Date  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; : <input type="date"name="Date"placeholder="Enter Date" value={form.Date} onChange={change} /></div>
       <div className="box2"> 
        Enter Patient Name &nbsp;&nbsp; : <input type="text" name="Patient" placeholder="Enter Patient Name" value={form.Patient} onChange={change} />
        </div>
    
        <div className="box2">
       Enter Doctor Name &nbsp; &nbsp;: <input type="text"name="Doctor" placeholder="Enter Doctor Name" value={form.Doctor} onChange={change}  />
     

       </div>
      
       <div className="box2">
        <button className="add" onClick={addData}>+ Book Visit</button>
       </div>  </div> 
    </div> <button style={{pointerEvents:y}} className="add BodyAdjust" onClick={dothis}>+Add Patient</button>
    <div  style={{position:"relative",top:"-70px"}}> <div className="animation">Welcome to our medicore  </div>      </div>
    <div style={{position:"relative",top:"-70px"}}>
           <div className="photo">
           <img className="img9" src="https://th.bing.com/th/id/OIP.AJ2AeL4w_Y79KwMP-eRR9gHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
           
           <img className="img9" src="https://tse2.mm.bing.net/th/id/OIP.8p5h_sTCNXLXW1aQmOjRbQHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
             <img className="img9" src="https://th.bing.com/th/id/OIP.HxAQQqXP0y2LadAm7SILtwAAAA?w=115&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
             <img className="img9" src="https://th.bing.com/th/id/OIP.sunacC-tyoNP5vuQKwHXrgHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        </div>
    <hr className="hrLine" style={{border:"none",borderTop:"3px solid red"}} />
     <div>
        <ul className="contain2">
        {data.map((t,index)=>(
           
            <li  key={index}>

                <div className="boxdesign2 transition" >
                          <button className="delete2" onClick={()=>deleteData(t._id)}><div style={{fontSize:"30px",color:"blue"}}>{"\u{1F5D1}"}</div>
                            </button> 
                            <li>upcoming </li>
                        <li className="List date" style={{background:"violet",padding:"10px",borderRadius:"10px"}} ><h3>{t.Date}</h3></li>
                        &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                        <li className="List" ><div style={style}>{"\u{1F464}"}</div> <h4 style={{display:"inlineBlock"}}>{t.Patient}</h4>  </li>
                          &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                        <li className="List" >   <div style={style}>{"\u{1FA7A}"}</div><h3>Dr. {t.Doctor}</h3></li>
                        
                     
                  
                    
                </div>
                
            </li>
        ))}
        </ul>
     </div></div>
     
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
