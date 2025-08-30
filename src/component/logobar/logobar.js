import React from 'react'
import './logobar.css'
import  logobar1 from '../../assets/images/Group 5334.png'
import logobar2 from '../../assets/images/image 1 (Traced).png'
import logobar3 from  '../../assets/images/image 5 (Traced).png'
import logobar4 from  '../../assets/images/image 2 (Traced).png'
import logobar5 from  '../../assets/images/image 7 (Traced).png'

function Logobar() {
let logobar=[{
  logobarImage:logobar1
},
{
  logobarImage:logobar2
},
{
  logobarImage:logobar3
},
{
  logobarImage:logobar4
},
{
  logobarImage:logobar5
}]

  return (
    <div>
      <div className="logobar">
{
  logobar.map((i)=>(
     <div className="logobar1">
      <img src={i.logobarImage} /></div>

  ))
}

    {/* // <div className="logobar1"><img src="images/Group 5334.png" /></div>
    // <div className="logobar2"><img src="images/image 1 (Traced).png" /></div>
    // <div className="logobar3"><img src="images/image 5 (Traced).png" /></div>
    // <div className="logobar4"><img src="images/image 2 (Traced).png" /></div>
    // <div className="logobar5"><img src="images/image 7 (Traced).png" /></div>
    // </div>

    // </div> */}
    </div>
   </div>
  )
}


export default Logobar
