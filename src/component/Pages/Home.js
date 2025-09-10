import React from 'react'
import Banner from '../banner/banner'
import Logobar from '../logobar/logobar'
import Grid from '../Grid/Grid'
import Latestwork from '../Latestwork/Latestwork'
import Testimonial from '../Testimonial/Testimonial'
import Cont from './Cont'

function Home() {
  return (
    <div>
      <Banner />
  <Logobar />
  <Grid />
  <Latestwork />
  <Testimonial />
  <Cont />
    </div>
  )
}

export default Home
