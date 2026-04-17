// import logo from './logo.svg';


import './App.css';
import Alert from './component2/Alert';
import Navbar from './component2/Navbar';
// import Textforms from './components/Textforms' ; 

// import About from './components/About';
import React,{useState} from 'react'

function App() {
   const [text,setText]=useState('enable dark mode');

  
  const [darkMode,setDarkMode]=useState('light');
  const toggleMode=()=>{
    if(darkMode==='light'){
      setDarkMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert('success','Dark mode has been enabled')
      setText('enable light mode')
    }
    else {setDarkMode('light')
       document.body.style.backgroundColor='white'; 
        showAlert('success','Light mode has been enabled')
             setText('enable dark mode')
    };
  }

const [alert,setAlert]=useState(null);
let tonull=()=>{
  setAlert(null);
}
const showAlert=(type,msg)=>{
  setAlert({
    msg:msg,
    type:type
  })
  setTimeout(tonull,1500)
}



  return (
 <>
 {/* <Navbar title='about us'/> */}
 <Navbar mode={darkMode} toggle={toggleMode} text={text}/>

<Alert showAlert={alert}/>

{/* <div className="container">
  <Textforms heading="enter the text"/>
</div> */}


{/* <div className="container">
  <About/>
</div> */}


 </>
  );
}


