import React from 'react'
import './header.css'
import {NavLink} from 'react-router-dom'


function Header() {
  let navitems=[{id:1,
    name:"about",
    value:'/About'},{
      id:2,
      name:"work",
      value:'/Work',
    },
    {
      id:3,
      name:"contact",
      value:'/Contact'

  },
];

    
  return (
    <div>
      <div className="header">
    <NavLink to='/' className="header-left">LOGO</NavLink>
    <div className="header-right">
    {
      navitems.map((i) =>(
         <NavLink to={i.value} className="about">{i.name}</NavLink>
         

      ))
    }
  
    
{/*     
    <div className="about">ABOUT</div>
    <div className="work">WORK</div>
    <div className="">CONTACT</div>
    </div>
    </div>
    </div> */}
  
</div>
</div>
</div>
  )
}

export default Header
