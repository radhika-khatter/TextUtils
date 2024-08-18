import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutText from './components/AboutText';
import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const [visibility,setVisibility]=useState('collapse')

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#696969';
      document.body.style.color='white';
      showAlert("Dark mode is enabled.","success");
      setVisibility('collapse-show')
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      setVisibility('collapse');
      showAlert("Light mode is enabled.","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} visibility={visibility}/>
    <Alert alert={alert}/>
   
    {<div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm heading="Try TextUtils- Word counter | Character counter" mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/AboutText" element={<AboutText />} />
      </Routes>
    </div>}
  </Router>
    
</>
);
}

export default App;
