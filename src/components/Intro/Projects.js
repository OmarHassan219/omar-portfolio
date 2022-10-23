import React from 'react'
import './Projects.css'
import img1 from '../../Images/parallax-egypt.png'
import img2 from '../../Images/fitness-react-app.png'
import img3 from '../../Images/Pizza Hut.png'
import img4 from '../../Images/wilson-ecommerce.png'

const websites = [

{
image:img1,
text:'parallax-pyramid',
link:"https://welcome-to-egypt-parallax-website-t88s.vercel.app/"

},
{
image:img2,
text:'react-fitness-app',
link:"https://react-fitness-app-peach.vercel.app/"

},
{
image:img3,
text:'Nextjs-pizza-clone',
link:"https://nextjs-pizzahut-clone.vercel.app/"
},
{
image:img4,
text:'Nextjs-wilson-Basketball',
link:"https://next-ecommerce-basketballs.vercel.app/"

},




]

const Projects = () => {
  return (
    <div className='projects' id='projects'>
<h1 className='sections-header m-0 h-25 d-flex align-items-center'>Projects</h1>
        
        <div className='row m-0 h-75'>
<div 



className='first col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5 justify-content-center d-flex flex-column'>
<p className='w-100'>Here are some of my projects <br/> <br/> for more projects, visit my github page </p>

<a className='button-container' href='https://github.com/OmarHassan219' target='blank' > 


<button className='button p-2 ms-auto me-auto rounded-5'> My GitHub</button>


</a>
</div>




<div className='second col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5 image-container d-flex justify-content-center align-items-center'>


<div className='images-box d-flex gap-2 flex-wrap justify-content-between'>
{websites.map((web , i) => (
<a target="blank" href={web.link} className='image-box' key={i} name={web.text} >
<img  src={web.image} alt="project"   />

</a>



))}



</div>



</div>





        </div>
        
        
        
        </div>
  )
}

export default Projects