import React, { useRef } from 'react'
import './Cont.css'

function Cont() {
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
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' id='name' name='name' ref={nameRef}/>
        <input type='text' id='Email' name='email' ref={EmailRef} />
        <input type='number' id='phonenumber' name='phonenumber' ref={phonenumberRef} />
        <input type='textarea' id='Message' name='message' ref={MessageRef}/>
        <button type='button'>submit</button>

      </form>
    </div>
  )
}

export default Cont


