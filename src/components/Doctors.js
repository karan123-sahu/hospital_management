import React,{useState} from 'react'
import {useEffect} from "react"
import {FaTrash} from "react-icons/fa"
export default function Patients({tex2 , doct}) {
       let style={
        width:"40px",fontSize:"20px",background:"violet",padding:"2px 4px",borderRadius:"10px"
    }


    useEffect(()=>{
        const savedData=JSON.parse(localStorage.getItem("users2"));
        if(savedData){
            setData(savedData);  
             tex2(savedData.length)
      doct(savedData);
        }  
     
    },[])




    let [form,setForm]=useState({
        Name:"",
        Speciality:"",
        Mobile:"",
        Code:""
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
        if((!form.Name||!form.Speciality)||form.Code!=="1234")return;
       
       const newData=[...data,form];
      
       setData(newData);
     doct(newData);
       tex2(newData.length)
       localStorage.setItem("users2",JSON.stringify(newData));
       setForm({
        Name:"",
        Speciality:"",
      
        Mobile:"",
        Code:""
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
      doct(newData)
     tex2(newData.length)
      localStorage.setItem("users2",JSON.stringify(newData));
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
        <h1 className="textGradient"><span className="moveP">M</span> <span className="scale">edical Staff</span></h1>
        <p>Manage hospital doctos and specialists</p>
    </span>
   
    
    <div className="input " style={{paddingLeft:hi+"px",zIndex:"2",overflow:"hiddenX",position:"relative",pointerEvents:x}}>
        <div className="inputBox">
            <div className="box2">
       Enter Doctor Name : <input type="text"name="Name"placeholder="Enter Doctor name" value={form.Name} onChange={change} /></div>
 
     <div className="box2">   Speciality &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :  <input type="text"name="Speciality" placeholder="Enter Speciality" value={form.Speciality} onChange={change}/></div>
      
        <div className="box2">
       Mobile no    &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;: <input type="tel"name="Mobile" placeholder="Enter mobile no" value={form.Mobile} onChange={change}  /></div>
                  <div className="box2"> 
        Enter Code &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;: <input type="text"name="Code" placeholder="Enter Code" value={form.Code} onChange={change} /></div>
       <div className="box2">
        <button className="add" onClick={addData}>+ Add Doctor</button>
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
        <ul className="contain">
        {data.map((t,index)=>(
           
            <li  key={index}>

                <div className="boxdesign transition">
                    <div style={style}>{"\u{1FA7A}"}</div>
                    <button className="delete" style={{top:"-20px"}} onClick={()=>deleteData(t._id)}><FaTrash size={18}/></button> 
                        <li ><h3>{t.Name}</h3></li>
                        <li><div>{"\u{2B50}"}{t.Speciality}</div> </li>
                      
                        <hr />
                        <li >+91 {t.Mobile}</li>
                  
                     
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
