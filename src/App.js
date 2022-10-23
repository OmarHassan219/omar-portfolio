import React from 'react'
import Navbar from './components/Navbar/Navbar';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import { BrowserRouter } from 'react-router-dom';
import Projects from './components/Intro/Projects';
import Conatct from './components/Contact/Conatct';
import Navbarmobile from './components/Navbar/Navbarmobile';



function App() {
  return (
<BrowserRouter>

    <div className=' app w-100 row m-0'>
    
<div className='col-xl-1 col-lg-1 col-md-1 col-sm-0 p-0 m-0 '>

<Navbar/>
<Navbarmobile/>
</div>





    
<div className='col-xl-11 col-lg-11 col-md-12 col-sm-12 p-0 m-0'>

<Hero/>
<About/>
<Projects/>
<Conatct/>

</div>


   

    
   
    
    </div>
    </BrowserRouter>
  );
}

export default App;
