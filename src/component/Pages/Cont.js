import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Cont() {
  const [visible,setvisible]=useState(true)
  const nameRef=useRef()
  const EmailRef=useRef()
  const phonenumberRef=useRef()
  const MessageRef=useRef()
  function onSubmit(){
    const formData={
      name:nameRef.current.value,
      Email:EmailRef.current.value,
      phonenumber:phonenumberRef.current.value,
      Message:MessageRef.current.value
    }
  }
  const closeButton=()=>{
     setvisible(false)
  }
    
  return (
    <div>
      {visible&&(
        <>
    
      <NavLink to='/' className='close-modal'onClick={closeButton}>X</NavLink>

      <div className='form-cont'>
      
      
      <form onSubmit={onSubmit}>
        <h2 className='form-heading'>Contact Form</h2>
        <input className='input-field' type='text' id='name' name='name' placeholder='name' ref={nameRef}/>
        <input className='input-field' type='text' id='Email' name='email' placeholder='Email' ref={EmailRef} />
        <input className='input-field' type='text' id='phonenumber' name='phonenumber'placeholder='phonenumber' ref={phonenumberRef} />
        <input  className='input-field' type='textarea' id='Message' name='message'placeholder='Message' ref={MessageRef}/>
        <button  className='btn' type='button'>submit</button>
        
      </form>
    
   </div>
   </>
    )}
   
      
    </div>
    
     
    
   
  )
}

export default Cont


