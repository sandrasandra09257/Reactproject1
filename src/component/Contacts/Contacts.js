import React from 'react'
import './Contacts.css'
import ContactImage1 from '../../assets/images/Lets work together.png'
import ContactImage2 from '../../assets/images/Contact Section Content.png'

function Contacts() {
    let Contact=[{
        ContactImage:ContactImage1
    },
    {
        ContactImage:ContactImage2
    }]
  return (
    <div>
      <div className="contact">
        
            
              <>
               <div className="cont2"><img src={ContactImage1}/></div>
     <div className="cont3"><img src={ContactImage2} alt='ContactImage'/></div> 
     </>
             
          
      

        </div>
        </div>


    // {/* <div className="cont2"><img src="images/Lets work together.png" /></div>
    // <div className="cont3"><img src="images/Contact Section Content.png" /></div> */}
    
  )
}

export default Contacts
