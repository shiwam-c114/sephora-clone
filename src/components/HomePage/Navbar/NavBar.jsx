import React from 'react'
import nav from "../../../img/nav1.png"
import icon from "../../../img/icon.png"
import store from "../../../img/communityicon.png"
import "./NavBar.css"
const NavBar = () => {
  return (
    <div>
      <div>
        <img src={nav} alt="" />
      </div>

      <div className='flex'>
        <div className='nav_left'>
          <img src={icon} alt="" />
        </div>
        <div className='nav_mid '>
          <div className='search_div'>
            <input type="text" name="" id="" className='search_input'/>
          </div>
        </div>
        <div className='nav_right'>
          <div className='flex'>
            <img src={store} alt="" className='icon_size'/>
            <div className='flex_center'>
              <h4>Store & Service</h4>
              <p>choose Your Store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar