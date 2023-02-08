import moment from 'moment';
import React from 'react'
import { Link } from 'react-router-dom'
import "./bottombar.css"

const Bottombar = ({item,selected, selectedDate}) => {

  const calculatePrice = item
    .filter((o) => selected.includes(o.label))
    .reduce((acc, obj) => {
      let price = Number(obj.price);
      return acc + price + 200;
    }, 0);


    const totalPrice = calculatePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')


    const formatDate = () => moment(selectedDate).format("Do MMMM")
  return (
    <div className='bottombar'>
        <div className='bottombardetails'>
            <div className='bottomprice'>
                <span>₹ {totalPrice}</span>
            </div>
            {/* <div className='bottomservice'> */}
                {/* <span>2 services</span> */}
                {/* <span className="daydetails">{formatDate()}</span>
            </div> */}
            {/* <Link to={`/product/services/selectdate`} className='link'>
            <div className="bottombarbtn">
                  <div className="bottombarbtn1">
                    <div className="bottombarbtntext1">
                      <span>Next</span>
                    </div>
             </div>     
             </div>
            </Link> */}
            
        </div>
    </div>
  )
}

export default Bottombar