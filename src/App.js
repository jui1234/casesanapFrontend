import logo from "./logo.svg";
import "./App.css";

import { Outlet, Route, Router, useLocation, useNavigate } from "react-router-dom";

import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the current path is "/"
    if (location.pathname === "/") {
      // Redirect to "/home"
      // navigate("/login", { replace: true });
    }
  }, [location, navigate]);
  return (
    <div className="App">
      {/* <ContactUs></ContactUs>
      <Outlet /> */}
      For Now My App
      
    </div>
  );
}

export default App;
