import React from 'react'
import { Link } from 'react-router-dom'
import "./bottombar.css"

const Bottombar = () => {
  return (
    <div className='bottombar'>
        <div className='bottombardetails'>
            <div className='bottomprice'>
                <span>₹ 3,400</span>
            </div>
            <div className='bottomservice'>
                <span>2 services</span>
            </div>
            <Link to={`/product/services/selectdate`} className='link'>
            <div className="bottombarbtn">
                  <div className="bottombarbtn1">
                    <div className="bottombarbtntext1">
                      <span>Next</span>
                    </div>
             </div>     
             </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Bottombar