import React from 'react'
import './contact.css'
import {AiFillYoutube} from 'react-icons/ai'

const Conatct = () => {
  return (
    <div className='contact' id='contact'>
    <h1 className='sections-header m-0 h-25 d-flex align-items-center'>Contact</h1>
            
            <div className='row m-0 h-75'>
    <div 
    
    
    
    className='first col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5 justify-content-center d-flex flex-column'>
    <p className='w-100' >Keep In Touch With Me <br/> Say Hi </p>
    
    <a className='button-container' href='mailto: omar-hassan219@hotmail.com'  target='blank' > 
    
    
    <button className='button  p-2 ms-auto me-auto rounded-5'> CONTACT </button>
    
    
    </a>
    </div>
    
    
    
    
    <div className='second col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5 image-container d-flex flex-column justify-content-center align-items-center'>
    
    
 <AiFillYoutube size={350} color="red" />
 <a className='button-container'  style={{width:"fit-content"}} href='https://www.youtube.com/channel/UC7y5seAqt5Wmg7DV0bEghCA' target='blank' > 
    
    
    <button style={{backgroundColor:"red" , color:"white"}} type='button' className='button-y  p-2 ms-auto me-auto rounded-5'> My Youtube Channel </button>
    
    
    </a>
    
    </div>
    
    
    
    
    
            </div>
            
            
            
            </div>
  )
}

export default Conatct