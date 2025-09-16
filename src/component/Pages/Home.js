import React, { useState } from 'react'
import Banner from '../banner/banner'
import Logobar from '../logobar/logobar'
import Grid from '../Grid/Grid'
import Latestwork from '../Latestwork/Latestwork'
import Testimonial from '../Testimonial/Testimonial'
import Contact from '../contact/Contact'
import ContactModal from '../../contactModal/contactModal'
function Home() {
  const [modal,setmodal]=useState(false)
  return (
    <div className='home-page'>
      {modal &&<ContactModal setmodal={setmodal}  />}
      <Banner setmodal={setmodal}/>
       <Logobar />
  <Grid />
  <Latestwork />
  <Testimonial />

  <Contact />
    </div>
  )
}

export default Home
