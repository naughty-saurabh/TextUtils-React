import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#20303c";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">

      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
      
          <Route path="/"> */}
          <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyse"
          mode={mode}
        />
          {/* </Route>
        </Switch> */}
        
        
        {/* <About/> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
