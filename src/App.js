
import './App.css';



import{
    // BrowserRouter as Router,
    HashRouter as Router,
    Routes,
    Route
    
} from 'react-router-dom'


import React,{useState} from 'react'
import OffcanvasNavbar from './components/OffcanvasNavbar';
import Patients from './components/Patients';
import Dashboard from './components/Dashboard';
import Doctors from './components/Doctors';
import Departments from './components/Departments';
import Appointments from './components/Appointments';
import LoginSign from './components/LoginSign';

import {useEffect} from 'react'

function App() {

   let [fire,setFire]=useState(false);


  useEffect(()=>{
    localStorage.setItem("login",fire);
  },[fire]);

let [text1,setText1]=useState(0);
let [text2,setText2]=useState(0);
let [text3,setText3]=useState(0);
let [text4,setText4]=useState(0);


let [doctor,setDoctor]=useState([])
let [patient,setPatient]=useState([])
  return (
 <>



{ fire===false? <LoginSign fire={setFire} />:
 <><Router><OffcanvasNavbar/>
 <Routes> 
    <Route path="/" element={<Dashboard text1={text1}  text2={text2} text3={text3} text4={text4}/>}/>
          <Route path="/patients" element={<Patients tex1={setText1} marrij={setPatient}/>}/>
            
       
          <Route path="/doctors" element={<Doctors tex2={setText2} doct={setDoctor}  />}/>
         
              <Route path="/departments" element={<Departments tex3={setText4}  />}/>
                <Route path="/appointments" element={<Appointments tex4={setText3} doctor={doctor} patient={patient} />}/>
        
        </Routes> </Router></>}







    
 </>
  );
}

export default App;