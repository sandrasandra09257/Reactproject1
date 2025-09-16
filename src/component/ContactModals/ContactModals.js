import React, { useRef } from 'react'
import './ContactModals.css'


function ContactModals({setmodal}) {
  
  return (
       <div>

      {/* <div className={`main-cont ${props.modal?"activemodal":""}`}> */}
      <div className='form1'>
       <button className='close-modal' onClick={()=>setmodal(false)}>X</button>
      <div className='form-cont'>
        
      <form>
        <h2 className='form-heading'>Contact Form</h2>
        <input className='input-field' type='text' id='name' name='name' placeholder='name' />
        <input className='input-field' type='text' id='Email' name='email' placeholder='Email' />
        <input className='input-field' type='text' id='phonenumber' name='phonenumber'placeholder='phonenumber' />
        <input  className='input-field' type='textarea' id='Message' name='message'placeholder='Message' />
        <button  className='btn' type='button'>submit</button>
        

      </form>
      </div>
   </div>
    </div>
    
  
  )
}

export default ContactModals
