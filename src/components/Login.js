import React, { useContext } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { dataPassing } from './Main';
import { useRef } from 'react';
const Login = () => {
    const nav=useNavigate()
    const {user}=useContext(dataPassing)
    const chekEmail=useRef(null);
    const chekPassword=useRef(null)

    const loginSubmit=(e)=>{
      e.preventDefault();
      let email=chekEmail.current.value;
      let password=chekPassword.current.value;
      if(user.userEmail==email&&user.userPassword==password){
        nav('/home')
      }else{
        alert('Invalid Email or password')
      }      
    }
  
  return ( 
    <div className='top'>   
           <Container>
            <form className='form' onSubmit={loginSubmit} >            
          <h1 className='heading'>Login</h1> 
          <p className='heading1'>Please login {user.firstName} {user.secondName}</p>          
            <input required type="Email" placeholder='Email'className='input' ref={chekEmail}/>             <br />
            <input required type="password" placeholder='Password' className='input' ref={chekPassword}/>  <br />            
            <a href="#" className='text2' onClick={()=>{alert(`We sent an email to ${user.userEmail} with a link to reset your password`)}}>Forget password</a>                                        <br />
            <button className='input' type='submit' >Login</button>            <br />                     
        </form> 
        </Container >
        </div>        
  )
}

export default Login