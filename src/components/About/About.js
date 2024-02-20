import React from "react";
import "./about.css";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript, SiReact, SiMui , SiFramer } from "react-icons/si";
import { TbBrandBootstrap, TbBrandNextjs } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNode } from "react-icons/fa6";

// const variants = {
//   hidden:{
//     x:"-100vw"
//   },
//   visible1:{
//     x:0,
//     transition:{type:"sweep" }
//   }
// }

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="sections-header m-0 h-25 d-flex align-items-center">
        About
      </h1>
      <div className="row m-0 h-75">
        <div className="first  col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5  align-items-center d-flex ">
          <motion.p>
            I have been practicing frontend for 2 years . and I have worked on
            different projects to scale up my skills in this field such as,
            ecommerce websites , cloned websites and other landing pages.
          </motion.p>
        </div>

        <div className="second col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5  d-flex justify-content-center align-items-center">
          <div className="text-center">
            <h1>I use</h1>
            <div className="d-flex flex-wrap">
              <TiHtml5 size={70} />
              <FaCss3 size={70} />
              <SiJavascript size={70} />
              <TbBrandBootstrap size={70} />
              <SiReact size={70} />
              <TbBrandNextjs size={70} />
              <SiMui  size={70} />
              <AiFillGithub size={70} />
              <SiFramer size={70} />
              <SiMongodb size={70}/>
<IoLogoFirebase size={70} />
<FaNode  size={70} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
