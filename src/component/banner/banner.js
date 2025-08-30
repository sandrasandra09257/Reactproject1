import React from 'react'
import './banner.css'
import bannerImage from'../../assets/images/a2d1b3a41cc9761b3e8b3609af7fffb76a2461f9 (1).png'

function Banner() {

  return (
    <div>
      <div className="banner">
    <div className="banner-left">
    <div className="banner-left1">Branding|image making</div>
    <div className="banner-left2">Visual Designer</div>
    <div className="banner-left3">This is a template figma file,turned into code using anima learn more at AnimaApp.com</div>
    
        <button type="contact" className="button">contact</button>
        </div>
    <div className="banner-image">
        <img src={bannerImage}  alt="banner-image" width="300" height="350"/></div>
    </div>
    </div>
  )
}

export default Banner
