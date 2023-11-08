import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {
  HashRouter, Routes, Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const togglemode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
  }
  return (
    <>
    <HashRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={togglemode} />
    <Alert alert={alert} />
    <div className="container">
    <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />}></Route>
      <Route exact path="/about" element={<About mode={mode} />}></Route>
    </Routes>
    </div>
    </HashRouter>
    </>
  );
}

export default App;
