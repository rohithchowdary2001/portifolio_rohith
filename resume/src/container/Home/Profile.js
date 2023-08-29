import React from 'react';
import Typical from 'react-typical';
import './Profile.css';
export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    
                    <a href='https://www.facebook.com/yadlapalli.rohithchowdary/'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#B'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='https://www.instagram.com/_rohith__chowdary_/?next=%2F'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UCgpEGEkdc-8TBrUYbEy-OcQ'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='https://github.com/rohithchowdary2001'>
                        <i className='fa fa-github'></i>
                    </a>
                    
                    </div>
                </div>
                <div className='profile-details-name'> 
                <span className='primary-text'>
                    {""}
                    Hello I am <span className='heighlighted-text'>Rohith Yadlapalli</span> 
                </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                    {" "} 
                    <h1>
                        {""}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "welcome to....",
                            1000,
                            "My First React App",
                            1000,
                        ]}
                        />
                    </h1>
                    <span className='profile-role-tagline'>
                        Always welcome for learning new technologies.
                    </span>
                    </span>  
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                    {""}
                    Hire Me{""}
                    </button>
                    <a href='Rohith Resume.docx' Download='Rohith Resume.docx'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
        </div>
  )
}