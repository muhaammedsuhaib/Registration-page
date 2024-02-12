import React, { useContext } from 'react';
import {Carousel, Container}from 'react-bootstrap';
import './style.css'
import { dataPassing } from './Main';
const Home = () => {
  const {user}=useContext(dataPassing)
  return (
    <div className='top'> 
    <Container>   
      <h1 className='heading'>WELCOME {user.firstName} {user.secondName}</h1>
        <Carousel data-bs-theme="white">
      <Carousel.Item className='mid'>
      <img
          className="d-block w-100"
          src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-black-friday-black-gold-metal-technology-image_18510.jpg"
          alt=""
          style={{padding:'100px'}}          
        /> 
        <Carousel.Caption>
          <h5 className='nameHead'>WELCOME TO MY WEB PAGE</h5>
          <h4 className='headeName'>This website create by Suhaib</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='mid'>
      <img
          className="d-block w-100"
          src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-black-friday-black-gold-metal-technology-image_18510.jpg"
          alt=""
          style={{padding:'100px'}}     
        />
        <Carousel.Caption>
        <h1 className='nameHead'>Your Details</h1>
        <h5 className='nameHead'>Welcome {user.firstName} {user.secondName}</h5>
        <h5 className='nameHead'>Email : {user.userEmail}</h5>
        <h5 className='nameHead'>Phone : {user.phoneNumber}</h5>
        <h5 className='nameHead'>Date Of Birth : {user.dateOfbirth}</h5>
        <br /><br /><br />

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='mid'>
        <img
          className="d-block w-100"
          src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-black-friday-black-gold-metal-technology-image_18510.jpg"
          alt=""
          style={{padding:'100px'}}  
           />
        <Carousel.Caption>
          <h4 className='nameHead'>Thank you for {user.firstName} { user.secondName} visiting my web site.</h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
 
   </div>
    
  )
}

export default Home