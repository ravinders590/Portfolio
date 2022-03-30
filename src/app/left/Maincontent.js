import React from 'react'
import About from './About';
import Educated from './Educated';
import Contact from './Contact';
import Footer from './Footer';

const Maincontent = () => {

  const userdata = {
    name:'Ravinder Singh',
    dob:'4/5/1994',
    age:'29 years',
    address:'H.no. 05, tilang pur kotla vihar, phase-04, Najafgarh road,Nangloi, New Delhi:110041',
    mobile:'+91 989 118 2029',
    email:'ravinders590@gmail.com'
  }
  
  
  
  
  return (
    <>
      <div className="resume_in_left">
        <div className="container">
            <section className="left-section home" id="home">
                <h3 className="subtitle">Introduction</h3>
                <h2 className="title">Frontend Developer</h2>
                <p className="desc">
                Hello! I’m Ravinder singh. Frontend Developer with over 4 years of experience specializing in frontend development. Experienced with all stages of the development cycle for dynamic web projects.Having an in-depth knowledge including advanced HTML5, CSS3, Bootstrap, JavaScript ES6, JQuery and React js. As well as also knowledge in Backend Technologies like Core PHP and use rest api.  
                </p>
                <img src="./signature.png" alt="Signature" />
            </section>
            <About user={userdata}/>
            <Educated />
            <Contact />
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Maincontent