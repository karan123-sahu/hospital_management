import React,{useState} from 'react'

import {useEffect} from "react"
import {FaTrash} from "react-icons/fa"
export default function Patients({tex1 ,marrij}) {
   
      let style={
        width:"40px",fontSize:"20px",background:"violet",padding:"2px 4px",borderRadius:"10px"
    }


    useEffect(()=>{
        const savedData=JSON.parse(localStorage.getItem("users3"));
        if(savedData){
            setData(savedData); 
            marrij(savedData);
            tex1(savedData.length);
        }
       
    },[])
   

    let [form,setForm]=useState({
        Name:"",
        Age:"",
        Gender:"",
        Mobile:""
    })


    let [hi,setHi]=useState(1200)
   let [x,setX]=useState("none");
   let [y,setY]=useState("");


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
        if(!form.Name||!form.Age)return;
       const newData=[...data,form];
       setData(newData);
      marrij(newData)
       tex1(newData.length);
       localStorage.setItem("users3",JSON.stringify(newData));
       setForm({
        Name:"",
        Age:"",
        Gender:"",
        Mobile:""
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
       marrij(newData)
      tex1(newData.length);
      localStorage.setItem("users3",JSON.stringify(newData));
    }

  

    let dothis=()=>{
        setHi(0) 
        setX("")
        setY("none")}
  return (
 <>
 <div className="container about" >
    <span className="display" style={{zIndex:"-1"}}>
        <h1 className="textGradient"><span className="moveP">P</span> <span className="scale">atients</span></h1>
        <p>Manage hospital patient records and details</p>
        <div className="line"></div>
    </span>
   
    <div >
    <div className="input " style={{paddingLeft:hi+"px",zIndex:"23",position:"relative",pointerEvents:x}}>
        <div className="inputBox" >
            <div className="box2">
       Enter Your Name : <input type="text"name="Name"placeholder="Enter your name" value={form.Name} onChange={change} /></div>
       <div className="box2"> 
        Enter Your Age &nbsp;&nbsp; : <input type="number"name="Age" placeholder="Enter your age" value={form.Age} onChange={change} /></div>
     <div className="box2">   
        Gender &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
         <select className="changeborder" name="Gender" value={form.Gender} onChange={change}>
  <option value="">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Others">Others</option>
</select>
        </div>
          
        <div className="box2">
       Mobile no  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;: <input type="tel"name="Mobile" placeholder="Enter your mobile no" value={form.Mobile} onChange={change}  /></div>
      
       <div className="box2">
        <button className="add" onClick={addData}>Save Data</button>
      
    </div> </div> </div> </div> <button style={{pointerEvents:y}} className="add BodyAdjust" onClick={dothis}>+Add Patient</button>
  
  <div  style={{position:"relative",top:"-70px"}}> <div className="animation">Welcome to our medicore  </div>      </div>
    <div style={{position:"relative",top:"-70px"}}>
    <div className="photp">
           <img className="img10" src="https://th.bing.com/th/id/OIP.AJ2AeL4w_Y79KwMP-eRR9gHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
           
           <img className="img10" src="https://tse2.mm.bing.net/th/id/OIP.8p5h_sTCNXLXW1aQmOjRbQHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
             <img className="img10" src="https://th.bing.com/th/id/OIP.HxAQQqXP0y2LadAm7SILtwAAAA?w=115&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
             <img className="img10" src="https://th.bing.com/th/id/OIP.sunacC-tyoNP5vuQKwHXrgHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
             </div>
    <hr className="hrLine" style={{border:"none",borderTop:"3px solid red"}} />
     <div>
        
        <ul className="contain">
        {data.map((x)=>(
           
            <li  key={x._id}>

                <div className="boxdesign4 transition">
                    <div style={style}>{"\u{1F464}"}</div>   
                                                                   
                     <button className="delete" style={{top:"-30px"}} onClick={()=>deleteData(x._id)} ><FaTrash size={18}/></button> 
                        <li ><h3>{x.Name}</h3></li>
                        <li>   {x.Age}</li>
                        <li>{x.Gender}</li>
                        <hr />
                        <li >+91 {x.Mobile}</li>
                  
                 
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
