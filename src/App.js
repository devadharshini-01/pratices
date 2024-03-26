import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard'
import Userdetail from "./pages/Userdetail"; 


export const App=  ()=> {
  const[active,setActive]=useState();
  return(
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="signin" element={<Signin/>}/>


   <Route path="Dashboard" element ={<Dashboard active={active} setActive={setActive}/>}/>
   
   <Route path="userdetail" element ={<Userdetail active={active} setActive={active}/>}/>
</Routes>
</BrowserRouter>
    </>
  )

}

  
  

