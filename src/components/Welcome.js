import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Welcome = () => {
const nav=useNavigate()
  return (     
    <div className='top'>
      <Container>
        <h1 className='heading'>Welcome to web site</h1>
        <button onClick={()=>nav("/Registration")} className='btn'>Creat account</button>
       </Container>
    </div>
  )
}

export default Welcome