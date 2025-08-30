import React from 'react'
import './header.css'


function Header() {
  let navitems=[{id:1,
    name:"about",
    value:'/about'},{
      id:2,
      name:"work",
      value:'/work',
    },
    {
      id:3,
      name:"contact",
      value:'/contact'

  },
];

    
  return (
    <div>
      <div className="header">
    <div className="header-left">LOGO</div>
    <div className="header-right">
    {
      navitems.map((i) =>(
         <div className="about">{i.name}</div>


      ))
    }
  
    
{/*     
    <div classNameName="about">ABOUT</div>
    <div classNameName="work">WORK</div>
    <div classNameName="">CONTACT</div>
    </div>
    </div>
    </div> */}
  
</div>
</div>
</div>
  )
}

export default Header
