import React, { createContext, useState } from 'react'

import Welcome from './Welcome'
import { BrowserRouter as Router,BrowserRouter, Routes, Route} from 'react-router-dom';
import Registeration from './Registration';
import Login from './Login';
import Home from './Home';

export const dataPassing=createContext()

const Main = () => {  
  const [user,setUser]=useState({
    firstName:'',
    secondName:'',
    userEmail:'',
    phoneNumber:'',
    userPassword:'',
    rePassword:'',
    dateOfbirth:'',
    userRadioGroup:'',
  }) 
  const state= {
    user:user,
    setUser:setUser
  }
  return (   
    <div>    
    <BrowserRouter >
         <dataPassing.Provider value={state}>
         <Routes>
         <Route path="/" element={  <Welcome/>} />
         <Route path="/registration" element={<Registeration/>} />
         <Route path="/login" element={<Login/>} />
         <Route  path='/home'element={<Home/>} />         
         </Routes>
        </dataPassing.Provider>
         </BrowserRouter>
    </div>
  )
}
export default Main