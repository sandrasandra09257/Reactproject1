import React from 'react'
import './Grid.css'   


function Grid() {
let Grid=[{
  gridImage:gridimage1
},
{
  gridImage:gridimage2
},
{
  gridImage:gridimage3
}]





  return (
    <div>
      <div class="a">
    <div class="grid">
      <div class="grid1"></div>
      {
        Grid.map((i)=>{
             <div className="grid2">
              <img src={i.gridImage} /></div>
        })
      }
        {/* 
        
        <div class="grid3">This is a template sigma file,turned into code using anima.learn  more at AnimaApp.com</div>
    </div>
    <div class="grid">
        <div class="grid1"><img src="images/Rectangle 21.png" /></div>
        <div class="grid2">Visual Design</div>
        <div class="grid3">This is a template sigma file.turned into code using anima.Learn more at AnimaApp.com</div>
    </div>
    <div class="grid">
        <div class="grid1"><img src="images/Rectangle 25.png" /></div>
        <div class="grid2">Art Direction</div>
        <div class="grid3">This is a template sigma file.turned into code using anima.Learn more at AnimaApp.com</div> */}
    </div>
    </div>
    </div>
  )
}

export default Grid
