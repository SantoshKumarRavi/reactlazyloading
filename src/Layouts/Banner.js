import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='banner-wrapper'>
    <div className='text-wrapper'>
      <h1 className='child-text-wrapper text-wrapper-header'>SpaceX</h1>
      <h3 className='child-text-wrapper text-wrapper-message'>Get ready to fly high with Us</h3>
      <p className='child-text-wrapper text-wrapper-submessage'>Data's are Future</p>
    </div>
    <div className='image-flex-wrapper'>
      <div className='image-wrapper'>
      <img alt="rocket-banner" src={"banner.jpg"}/>
      </div>
    </div>

    </div>
    
    
    </>
  )
}

export default Banner