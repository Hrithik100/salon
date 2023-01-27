import React from 'react'
import ProductCard from '../productcard/ProductCard'
import ShowMore from '../showMore/ShowMore'
import "./discoverCat.css"

const DiscoverCat = () => {

    const data = [
        {
            id: 1,
            img: "https://www.linkpicture.com/q/mask-group-1@2x.png",
            title: "Saffron Spa",
            cat: "Spa",
            rating: 5,
            reviews: 312,
            location: "GS Road, Christian Basti",
            distance: "812 mtrs away"
        },
        {
            id: 2,
            img: "https://www.linkpicture.com/q/mask-group-2@2x.png",
            title: "Luxurite",
            cat: "Spa",
            rating: 4.5,
            reviews: 312,
            location: "GS Road, Christian Basti",
            distance: "3.1 km away"
        },
        {
            id: 3,
            img: "https://www.linkpicture.com/q/mask-group-3@2x.png",
            title: "Coco Salon",
            cat: "Salon",
            rating: 4,
            reviews: 412,
            location: "Zoo Road",
            distance: "2 km away"
        },
        {
            id: 4,
            img: "https://www.linkpicture.com/q/mask-group-4@2x.png",
            title: "Daisy Salon",
            cat: "Salon",
            rating: 4,
            reviews: 312,
            location: "GS Road, Christian Basti",
            distance: "1 km away"
        },
        {
            id: 5,
            img: "https://www.linkpicture.com/q/mask-group-4@2x.png",
            title: "Daisy Salon",
            cat: "Salon",
            rating: 4,
            reviews: 318,
            location: "GS Road, Christian Basti",
            distance: "1 km away"
        },
        {
            id: 6,
            img: "https://www.linkpicture.com/q/mask-group-4@2x.png",
            title: "Daisy Salon",
            cat: "Salon",
            rating: 4,
            reviews: 312,
            location: "GS Road, Christian Basti",
            distance: "1 km away"
        },
        {
            id: 7,
            img: "https://www.linkpicture.com/q/mask-group-4@2x.png",
            title: "Daisy Salon",
            cat: "Salon",
            rating: 4,
            reviews: 312,
            location: "GS Road, Christian Basti",
            distance: "1 km away"
        },
        {
            id: 8,
            img: "https://www.linkpicture.com/q/mask-group-4@2x.png",
            title: "Daisy Salon",
            cat: "Salon",
            rating: 4,
            reviews: 312,
            location: "GS Road, Christian Basti",
            distance: "1 km away"
        },
    ]
    
     
  return (
    <div className='discovery-container'>
        <span className='title-text'>Discover</span>
        <div className='discover-contain'>
           {data.slice(0,4).map(item=>(
            <ProductCard item={item} key={item.id}/>
           ))} 
           <div className='showbtn'>
           <ShowMore/>
           </div>
        </div>
        
    </div>
  )
}

export default DiscoverCat