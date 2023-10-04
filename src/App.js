
import './components/App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Protectedroute from './components/ProtectedRoute';
import React from 'react';
import { useEffect, useState } from "react";


//import ReactDOM from 'react-dom';
//import {Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import {Routes,Route} from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
//import Protectedroute from './components/ProtectedRoute';




// import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  const[auth,setauth] = useState(false);
  const[auth1,setauth1] = useState(true);

  const isLoggedIn = async ()=>{
    try{
      const res =await fetch('/auth',{
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials:"include"
      });

      if(res.status === 200){
        setauth(true)
        setauth(false)
      }
    }catch(error){
      console.log('Error', error);
    }
  }
  useEffect(()=>{
    isLoggedIn();
  },[])

  return (
    <>
    <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Services/>}></Route> 
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
       
        {/* <Protectedroute path="/login" element={<Login/>} auth={true}></Protectedroute>
        <Protectedroute path="/register" element={<Register/>} auth={true}></Protectedroute>
        <Protectedroute path="/dashboard" element={<Dashboard/>} auth={true}></Protectedroute>
        <Protectedroute path="/logout" element={<Logout/>} auth={true}></Protectedroute> */}

        {/* <Route path='/login' element={<Protectedroute page={<login />} />} /> */}
        <Route path='/register' element={<Protectedroute page={<register />} />} />
        <Route path='/dashboard' element={<Protectedroute page={<dashboard />} />} />
        <Route path='/logout' element={<Protectedroute page={<logout />} />} />
        
        
        </Routes>
      
    
    
    </>
  );
}

export default App;
