import React from 'react'
import './Testimonial.css'
import TestImage1 from '../../assets/images/Testimonial Card.png'
import TestImage2 from '../../assets/images/Testimonial Card.png'
import TestImage3 from '../../assets/images/Testimonial Card.png'
import TestImage4 from '../../assets/images/Testimonial Card.png'
import TestImage5 from '../../assets/images/Testimonial Card.png'
import TestImage6 from '../../assets/images/Testimonial Card.png'

function Testimonial() {
    let Testimonial=[{
        TestImage:TestImage1
    },
    {
        TestImage:TestImage2
    },
    {
        TestImage:TestImage3
    },
    {
        TestImage:TestImage4
    },
    {
        TestImage:TestImage5
    },
    {
        TestImage:TestImage6
    }]
  return (
    <div>
      <div className="testimonial">
        <div className="test1">Testimonial</div>
        <div className="test2">
            {
                Testimonial.map((i)=>(
                    <div className=""><img src= {i.TestImage} alt='TestImage'/></div>
                ))
            }
           {/* <div className=""><img src="images\Testimonial Card.png" /></div>
           <div className=""><img src="images\Testimonial Card.png" /></div>
           <div className=""><img  src="images\Testimonial Card.png" /></div>
           <div className=""><img src="images\Testimonial Card.png" /></div>
           <div className=""><img  src="images\Testimonial Card.png" /></div>
           <div className=""><img src="images\Testimonial Card.png" /></div>
        </div> */}
    </div>

    </div>
    </div>
  )
}

export default Testimonial
