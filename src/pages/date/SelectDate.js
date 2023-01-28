import React from 'react'
import DateMenu from '../../components/services/menu/DateMenu'
import ServiceHeader from '../../components/services/serviceheader/ServiceHeader'

const SelectDate = () => {

    const service = {
        name: "Select date"
      }
  return (
    <div className='selectdatecontainer'>
        <ServiceHeader myService ={service}/>
        <div className='menucart'>
            <div className='menucartleft'>
               <DateMenu/>
            </div>
        </div>
    </div>
  )
}

export default SelectDate