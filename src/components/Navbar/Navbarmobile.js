import React , {useState} from 'react'
import './Navbarmobile.css'
import {AiOutlineMenu} from 'react-icons/ai'
import {HashLink as Link} from 'react-router-hash-link'


const Navbarmobile = () => {

const [show, setshow] = useState(false)

  return (
    <div   onClick={() => setshow(!show)}    className='nav-mobile'>


<AiOutlineMenu  color='gray'  size={30}/>

{show &&


<div className='menu'> 

<Link smooth to='#home'>Home</Link>
<Link smooth to='#about'>About</Link>
<Link smooth to='#projects'>Projects</Link>
<Link smooth to='#contact'>Contact</Link>


</div>


}





    </div>
  )
}

export default Navbarmobile