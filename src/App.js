import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light'); 
  const [mode1, setMode1] = useState('light')
  
  const [alert,setAlert] = useState(null);

  const showAlert = (messege,type) => {
    setAlert({
      msg: messege,
      type: type
    })
    setTimeout(() => { //to make the alert bar dissappear after 1.5 sec 
      setAlert(null);
    }, 1500);
  }

  const toggleMode= () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert(" Dark mode has been enabled","success ");
      document.title = "TextUtils-DarkMode"; //to change the title of the website
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert(" Dark mode has been disabled","success ");
      document.title = "TextUtils-LightMode"; 
    }
  }

  const toggleModeBlue= () => {
    if(mode1==='light'){
      setMode1('blue');
      document.body.style.backgroundColor = '#7676c5'
      showAlert(" Blue mode has been enabled","success ");  
    }
    else{
      setMode1('light');
      document.body.style.backgroundColor = 'white'
      showAlert(" Blue mode has been disabled","success ");
    }
  }

  return (
    <>  
    <Router>
      <Navbar title = "TextUtils" about = "About" mode={mode} mode1={mode1} toggleMode={toggleMode}
      toggleModeBlue={toggleModeBlue}/> 
      <Alert alert={alert}/>  
      <div className="container">
      <Routes>   
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm mode={mode} mode1={mode1} heading="Enter the text to analyze below" onShowAlert={showAlert}/>} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App; 
