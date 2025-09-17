import React, { useState } from 'react'
import Banner from '../banner/banner'
import Logobar from '../logobar/logobar'
import Grid from '../Grid/Grid'
import Latestwork from '../Latestwork/Latestwork'
import Testimonial from '../Testimonial/Testimonial'
import Contacts from '../Contacts/Contacts'
import ContactModals from '../ContactModals/ContactModals'

function Home() {
  const [modal,setmodal]=useState(false)
  return (
    <div className='home-page'>
      {modal &&<ContactModals setmodal={setmodal}  />}
      <Banner setmodal={setmodal}/>
       <Logobar />
  <Grid />
  <Latestwork />
  <Testimonial />

  <Contacts />
    </div>
  )
}

export default Home
