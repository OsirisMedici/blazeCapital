import React from 'react'
import shadows from '../theme/shadows.module.css';
import { FaInstagram,FaTwitterSquare,FaFacebookF,FaGoogle,FaYoutube,FaLinkedin,FaCodepen } from "react-icons/fa";
const trusted = () => {
  return (
        <>
        
        <div className={shadows.trustedMain}>
          <div > <p className={shadows.mainHead}> Our Channels</p>
          <div className={shadows.trustedSubHead}>
            Get your Message in front of your cutomers, Wherever they are  
          </div>
          <div className={shadows.subDesc}> We will help you create automated lead generation cappaigns that move your ideal prospects from strangers to loyal customers  </div>
          </div>

        <div className={shadows.socialMedia}>
          <div className={shadows.socialmedia1}>
            <div className={shadows.iconbox}> <div ><FaInstagram className={shadows.socialIcons}/></div> </div> 
            <div className={shadows.iconbox}><div><FaFacebookF className={shadows.socialIcons}/> </div></div> 
            <div className={shadows.iconbox}> <div><FaGoogle className={shadows.socialIcons}/> </div> </div> 
            <div className={shadows.iconbox}> <div><FaLinkedin className={shadows.socialIcons}/> </div></div> 
            <div className={shadows.iconbox}> <div><FaYoutube className={shadows.socialIcons}/> </div></div> 
            <div className={shadows.iconbox}> <div><FaCodepen className={shadows.socialIcons}/> </div></div> 

</div>
        </div>
        </div>
        </>

  )
}

export default trusted