import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup";
import { BrowserRouter, Switch, Route, Routes, Router } from "react-router-dom";
import Login from "./components/Login";
import {AuthContext, AuthProvider} from './context/AuthContext'
import Feed from "./components/Feed";
function App() {
  return (
    <BrowserRouter>
    
     
<AuthProvider>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Feed/>}/>
      </Routes>
      </AuthProvider>
      
    </BrowserRouter>
  );
}

export default App;
