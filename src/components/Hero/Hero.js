import React from 'react'
import image from '../../Images/photo_2022-10-19_14-23-45.jpg'
import './hero.css'

const Hero = () => {
  return (
    <div id="home" className='hero'
    
    
    >
         <div className='row m-0  h-100'>
<div className='first  col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5 '>
<h1 className='m-100 '>      Hi there, I'm <span>Omar Hassan</span> Frontend Developer     </h1>

<p className='w-100'>I'm a fresh Frontend Developer and I like <br/>   to craft solid and scalable frontend <br/>    products with great user <br/>  experiences.</p>
</div>




<div className=' second col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5 image-container align-items-center d-flex justify-content-center'>


<img src={image} alt="personal" / >




</div>





        </div>
        
        
        
        
        
        
   
        </div>
  )
}

export default Hero