import React,{useRef,useEffect} from 'react'

const Cursor = () => {
    let CursorRef = useRef(null);
    useEffect(()=>{
      
      document.addEventListener('mousemove',e => {
        const {clientX,clientY} = e;
        const mouseX = clientX - CursorRef.current.clientWidth/2;
        const mouseY = clientY - CursorRef.current.clientWidth/2;
        CursorRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
      });
    },[])
    return (
    <>
    <div className='cursor' ref={CursorRef}></div>
    </>
  )
  
}

export default Cursor