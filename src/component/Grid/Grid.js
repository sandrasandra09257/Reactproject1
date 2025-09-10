import React from 'react'
import './Grid.css'
import GridImage1 from '../../assets/images/Skills Card Icon.png'
import GridImage2 from '../../assets/images/Skills Card Icon (1).png'
import GridImage3 from '../../assets/images/Skills Card Icon (2).png'

function Grid() { 
  let Grid=[{
    GridImage:GridImage1,
    gridtitle:"product design"
  },
  {
    GridImage:GridImage2,
      gridtitle:"Visual design"

  },
  {
    GridImage:GridImage3,
      gridtitle:"Art direction"
  }]
  return (

     <div>
     <div className="a">

      {
        Grid.map((i) =>(
          <div className="grid">
        <div className="grid1"><img src={i.GridImage} /></div>
       <div className="grid2">{i.gridtitle}</div>
        <div className="grid3">This is a template sigma file,turned into code using anima.learn  more at AnimaApp.com</div>
     </div>


        ))
      }
      </div>
     </div>





    // <div>
    //   <div className="a">
    // <div className="grid">
    //     <div className="grid1"><img src="images/Skills Card Icon.png" /></div>
    //     <div className="grid2">Product design</div>
    //     <div className="grid3">This is a template sigma file,turned into code using anima.learn  more at AnimaApp.com</div>
    // </div>
    // <div className="grid">
    //     <div className="grid1"><img src="images/Skills Card Icon (1).png" /></div>
    //     <div className="grid2">Visual Design</div>
    //     <div className="grid3">This is a template sigma file.turned into code using anima.Learn more at AnimaApp.com</div>
    // </div>
    // <div className="grid">
    //     <div className="grid1"><img src="images/Skills Card Icon (2).png" /></div>
    //     <div className="grid2">Art Direction</div>
    //     <div className="grid3">This is a template sigma file.turned into code using anima.Learn more at AnimaApp.com</div>
    // </div>
    // </div>
    // </div>
  )
}

export default Grid
