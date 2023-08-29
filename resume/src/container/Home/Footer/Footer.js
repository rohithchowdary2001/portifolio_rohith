import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='Footer-container'>
        <div className='footer-parent'>
            <img className='bg-image' src={require ('../../../assets/Home/shape-bg.png')} 
            alt="no internet connection"
            />
        </div>
    </div>
  )
}