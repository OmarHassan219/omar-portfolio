import React  from 'react'
import './Navbar.css'
import {GrLinkedin} from 'react-icons/gr'
import {FaInstagram} from 'react-icons/fa'
import {ImYoutube2} from 'react-icons/im'
import {HashLink as Link} from 'react-router-hash-link'


const Navbar = () => {


  return (
    <div className='nav '>
<div className='nav-container '>
<div className='inner-nav d-flex flex-column align-items-center '>


<h1>OH</h1>




<div className='menu h-50 d-flex flex-column justify-content-between mt-5 mb-5 align-items-center text-center '

>

<Link smooth to='#contact'>Contact</Link>
<Link smooth to='#projects'>Projects</Link>
<Link smooth to='#about'>About</Link>
<Link smooth to='#home'>Home</Link>



</div>
<div className='d-flex flex-column justify-content-between mt-4 h-25'>

<a target='blank' href='https://www.linkedin.com/in/omar-hassan-0a0267240/'>  <GrLinkedin/> </a>   
<a target='blank' href='https://www.instagram.com/omar_walid_9/'>  <FaInstagram/></a>   
<a target='blank' href='https://www.youtube.com/channel/UC7y5seAqt5Wmg7DV0bEghCA'>  <ImYoutube2/>
</a>   
</div>



</div>
</div>

    </div>
  )
}

export default Navbar