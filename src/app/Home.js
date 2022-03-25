import React from 'react';
import Photo from './right/Photo';
import Maincontent from './left/Maincontent';
import Cursor from './Cursor';



const Home = () => {
  let media = window.outerWidth;
  
  return (
    <>  
      {/* {
        media >= 991 &&
        <>
         <Cursor/>
        </>
      }
        */}
        <div className="main-wrapper">
          <Maincontent/>
          <Photo/>
         
        </div>
    </>
  )
}

export default Home