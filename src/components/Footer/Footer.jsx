import React from 'react'
import './footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twiter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer_icon">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twiter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Discription</li>
        <li>Help Center</li>
        <li> Gift Cards</li>
        <li>Media Centre</li>
        <li>Inveestor Relationship</li>
        <li> Jobs</li>
        <li> Term of Use</li>
        <li>Privacy </li>
        <li>Legal Notices </li>
        <li>Cookies preference </li>
        <li>Corporate Info </li>
        <li>Contact Us </li>
        
      </ul>
      <p className='copright-text'></p>
      
    </div>
  )
}
