import './style.css'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import { useContext } from 'react'
import { dataPassing } from './Main'

const Registeration = () => {
  const {user,setUser}= useContext(dataPassing)
   
  const changeHandle1=(fName)=>{
    setUser({...user,firstName:fName.target.value})
  }
  const changeHandle2=(sName)=>{
    setUser({...user,secondName:sName.target.value})
  }
  const changeHandle3=(uEmail)=>{
    setUser({...user,userEmail:uEmail.target.value})
  }
  const changeHandle4=(pNumber)=>{
    setUser({...user,phoneNumber:pNumber.target.value})    
  }
  const changeHandle5=(uPassword)=>{
    setUser({...user,userPassword:uPassword.target.value})
  }
  const changeHandle6=(reePassword)=>{
    setUser({...user,rePassword:reePassword.target.value})
  }
  const changeHandle7=(dBirth)=>{
    setUser({...user,dateOfbirth:dBirth.target.value})
  }
  const changeHandle8=(radioGroup)=>{
    setUser({...user,userRadioGroup:radioGroup.target.value})
  }
  const nav=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(user.userPassword===user.rePassword){
      if(user.userPassword.length>4){
        if(user.phoneNumber.length>=10 && user.phoneNumber.length<=10){
     nav('/login')
        }else{
          alert("Invalid phone number.")
        }
        
      }else{
        alert("Password should be more than 5 characters") }
    }else{
      alert("Passwords do not match")
    }
  }
  return (
       <div className='top'>
        <Container>
        <form className='form' onSubmit={handleSubmit}>
          <h1 className='heading'>Register Form</h1>
            <input required type="text" placeholder='First Name' className='input' name='firstName' value={user.firstName} onChange={(fName)=>{changeHandle1(fName)}} />       <br />
            <input required type="text" placeholder='Last Name' className='input' name='secondName' value={user.secondName} onChange={(sName)=>{changeHandle2(sName)}}/>        <br />
            <input required type="Email" placeholder='Email'className='input' name='userEmail' value={user.userEmail} onChange={(uEmail)=>{changeHandle3(uEmail)}}/>             <br />
            <input required type="number" placeholder='Phone Number' className='input' name='phoneNumber' value={user.phoneNumber} onChange={(pNumber)=>{changeHandle4(pNumber)}}/>    <br />
            <input required type="password" placeholder='Password'className='input' name='userPassword' value={user.userPassword} onChange={(uPassword)=>{changeHandle5(uPassword)}}/>       <br />
            <input required type="password" placeholder='Confirm Password'className='input' name='rePassword' value={user.rePassword} onChange={(reePassword)=>{changeHandle6(reePassword)}}/>       <br /> 
            <label required className='text'>Date of Birth:</label>                               
            <input required type="date" className='datainput2' name='dateOfbirth' value={user.dateOfbirth} onChange={(dBirth)=>{changeHandle7(dBirth)}}/>                           <br />
            <label className='text'>Male</label>
            <input required type="radio" name="radioGroup" className='radio' value="male"  onChange={(radioGroup)=>{changeHandle8(radioGroup)}}/>  
            <label className='text'>Female</label>                                  
            <input required type="radio" name="radioGroup" className='radio'value="female" onChange={(radioGroup)=>{changeHandle8(radioGroup)}}/>        <br />
            <button className='input' type='submit'>Submit</button> <br/>        
        </form>   
        </Container>  
        
        </div>
  )
}

export default Registeration 