import React from 'react'

const Footer = () => {
    const years = new Date();
    const bottomTotop = (e)=>{
        e.preventDefault();
        
        window.scrollTo(0, document.querySelector(".home").scrollHeight);

    }
  return (
    <>
    <footer id="footer">
        <div className="footer_top"><a href="#" className="resumo_fn_totop" onClick={bottomTotop}><span></span></a></div>
        <div className="footer_content">
            <div className="container">
                <p>
                    Copyright © {years.getFullYear()}. All rights reserved. <br/>Developed by <a className="fn__link" href="" target="_blank" rel="noreferrer">Ravinder Singh</a>
                </p>
            </div>
        </div>
        </footer>
    </>
  )
}

export default Footer;