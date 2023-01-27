import { KeyboardArrowDownOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImage from "../../assets/ipsa-logo.png"
import logoText from "../../assets/ipsa-text.png"
import DropdownItem from '../dropdownitem/DropdownItem'
import "./header.css"



const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)


  return (
    <div className='header'>
        <div className='header-logo'>
          <Link to="/">
          <img id='headlogo' src={logoImage} alt="" />
          </Link>
          <img id='headtext' src={logoText} alt="" />
        </div>
        <div className='header-right'>
            <nav className='circle'>
                <div className='circle-text'>
                For Business
                </div>
             </nav>
            <div className='circle-menu'>
                <div className='circle-menu-text'>
                  <span>USER</span> 
                  <KeyboardArrowDownOutlined style={{color:"#4E4E4E"}} onClick={()=>{setOpenMenu( !openMenu)}}/>
                </div>
                {
                  openMenu && <DropdownItem/>
                }
                 
             </div>
        </div>
    </div>
  )
}

export default Header