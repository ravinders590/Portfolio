import React from 'react';
import { Link } from '@material-ui/core';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

const Photo = () => {
  return (
    <>
    <div className="resume_in_right">
      <div className="right_in">
      <div className="right_top">
        <div className="border1"></div>
        <div className="border2"></div>
        <div className="img_holder">
            <div className="abs_img" style={{backgroundImage: `url('./profile_pic.jpg')`}}></div>
        </div>
        <div className="title_holder">
            <h5>Hi There! I am</h5>
            <p className="h3">
              <span className="animated_title" id="typer-info"></span></p>
        </div>
        <div className='social-icon'>
          <Link href="https://api.whatsapp.com/send?phone=919891182029" target='_blank'><WhatsAppIcon /></Link>
          <Link href="https://github.com/ravinders590" target='_blank'><GitHubIcon /></Link>
        </div>
      </div>     
      </div>
    </div>
    </>
  )
}

export default Photo