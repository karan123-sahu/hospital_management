import React,{useState} from 'react'
import {useEffect} from 'react'
import './LoginSign.css'
export default function LoginSign({fire}) {
    useEffect(()=>{
            
     const savedData=JSON.parse(localStorage.getItem("users3"));
        if(savedData){
            setData(savedData);
        }
    },[])
 const [action,setAction]=useState("Sign Up");



let [data,setData]=useState([])
let [form,setForm]=useState(
    {
        Name:"",
        Email:"",
        Password:""
    });
 let change=(e)=>{
        setForm({
            ...form,[e.target.name]:e.target.value
        });
    }
    let Add=()=>{
     
        setAction("Sign Up");
        if(!form.Name||!form.Email||!form.Password)return;
        const data=JSON.parse(localStorage.getItem("user5"))||[];
        const user=data.find((u)=>u.Name===form.Name&&u.Password===form.Password&&u.Email===form.Email);
        if(user){
            alert("already Signed")
        
            return;
        }
        const newData=[...data,form]
        setData(newData);
        localStorage.setItem("user5",JSON.stringify(newData));
        setForm({
             Name:"",
        Email:"",
        Password:""}
        )
        alert("signed In")
 }

 let Check=()=>{
    setAction("Login")
      if(!form.Email||!form.Password)return;
      const data=JSON.parse(localStorage.getItem("user5"))||[];
      const user=data.find(u=>u.Email===form.Email &&u.Password===form.Password)
      if(user){
          alert("Logged In")
           
          fire(true)
      }
      else {
        fire(false)
         setForm({
         
        Email:"",
        Password:""}
        )
      }
 }
  return (
    <>
    <div className="body">
   <div className="container9">
    <div className="header">
        <div className="text">{action}</div>
        <div className="underline"> </div>
        </div>
        <div className="inputs">
           {action==="Login"?<div></div>: <div className="input9">
                <div className="icon">{"\u{1F464}"}</div>
             <input type="text" placeholder="Enter Your Name" name="Name" onChange={change} value={form.Name}/>
            </div>}
           
            <div className="input9">
                <div className="icon">{"\u{1F4E9}"}</div>
              <input type="email" placeholder="Enter Your Email" name="Email" onChange={change} value={form.Email}/>
            </div>
            <div className="input9">
                <div className="icon">{"\u{1F512}"}</div>
                <input type="password" placeholder="Enter Password" name="Password" onChange={change} value={form.Password}/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot">Forgot Password? <span >Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={Add}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={Check}>Login</div>
        </div>
   </div></div>
    </>
  )
}
