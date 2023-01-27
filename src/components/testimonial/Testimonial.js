 import React, { useEffect, useState } from 'react'
 import "./testimonial.css"
    
    const Testimonial = () => {
        const testData = [
            {
                testimonial:"So easy to book and change appointments without having to phone the salon.",
                img:"https://www.linkpicture.com/q/woman-avatar-6299541-5187873-1-1@2x.png",
                author:"Sangeeta"   
            },
            {
                testimonial:"Just love the app.",
                img:"https://www.linkpicture.com/q/woman-avatar-6299541-5187873-1-1@2x.png",
                author:"Hari"   
            },
            {
                testimonial:"So easy to book and change appointments without having to phone the salon.",
                img:"https://www.linkpicture.com/q/woman-avatar-6299541-5187873-1-1@2x.png",
                author:"Joi"   
            },
        ]

        const [currentIndex, setCurrentIndex] = useState(0);

        const handleDotClick = (index) => {
            setCurrentIndex(index);
          };
        
          useEffect(() => {
            const interval = setInterval(() => {
              setCurrentIndex((currentIndex + 1) % testData.length);
            }, 3000);
            return () => clearInterval(interval);
          }, [currentIndex, testData.length]);
        
          const dots = testData.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
            />
          ));

      return (
        <div className="slid-con">
      <div className="testimonial">
      <img id="tes-im"src={testData[currentIndex].img} alt="" />
        <p>"{testData[currentIndex].testimonial}"</p>
        <span className='auth'>- {testData[currentIndex].author}</span>
      </div>
      <div className="dots-cont">{dots}</div>
    </div>
  );
};

    
export default Testimonial