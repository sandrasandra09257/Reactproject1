import React from 'react'
import './Latestwork.css'
import ItemImage1 from '../../assets/images/Image.png'
import ItemImage2 from '../../assets/images/Image (1).png'
import ItemImage3 from '../../assets/images/Image (2).png'
import ItemImage4 from '../../assets/images/Image (3).png'
import ItemImage5 from '../../assets/images/Image (4).png'
import ItemImage6 from '../../assets/images/Image (5).png'

function Latestwork() {
    let Latestwork=[{
        ItemImage:ItemImage1,
        ItemTitle:"Project title UI,Art Direction"
    },
    {
        ItemImage:ItemImage2,
        ItemTitle:"Project title UI,Art Direction"
    },
    {
        ItemImage:ItemImage3,
        ItemTitle:"Project title UI,Art Direction"

    },
    {
        ItemImage:ItemImage4,
        ItemTitle:"Project title UI,Art Direction"
    },
    {
        ItemImage:ItemImage5,
        ItemTitle:"Project title UI,Art Direction"
    },
    {
        ItemImage:ItemImage6,
        ItemTitle:"Project title UI,Art Direction"
    }]
  return (
    <div>
      <div className="gallery">
        <div className="i0">Latest Work</div>
          <div className="item">
{
    Latestwork.map((i) =>(
      
        <div className="item1"><img src={i.ItemImage} alt='ItemImage'/>
        <div className="i1">{i.ItemTitle}</div>
        </div>
       

    ))
}
</div>
</div>
 </div>
)}


    {/* // <div className="item">
    //     <div className="item1"><img className="img" src="images/Image.png" />
    //     <div className="i1">Project title UI,Art Direction</div>
    //     </div>
    //     <div className="item1"><img  className="img" src="images\Image (1).png" />
    //     <div className="i1">Project title UI,Art Direction</div>
    //     </div>
    //     <div className="item1"><img  className="img" src="images\Image (2).png" />
    //     <div className="i1">Project title UI,Art Direction</div>
    //     </div>
    //     <div className="item1"><img  className="img" src="images\Image (3).png" />
    //     <div className="i1">Project title UI,Art Direction</div>
    //     </div>
    //     <div className="item1"><img className="img" src="images\Image (4).png" />
    //     <div className="i1">Project title UI,Art Direction</div>
    //     </div>
    //     <div className="item1"><img className="img" src="images\Image (5).png" />
    //     <div className="i1">Project title UI,Art Direction</div>
    //     </div>
    // </div>
    // </div>
    // </div> */}
  

export default Latestwork
