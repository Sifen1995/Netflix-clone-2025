import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './footer.css'

export default function Footer() {
  return (
    <div className='footer-outer-container'>
      <div className='footer-container'>
        <div className='first-wrap'>
          <div className='icons' >
            <FacebookRoundedIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>
          </div>
          <ul>
            <li>Auto Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
            <p>Service code</p>
            <p></p>
          </ul>
        </div>
        <div className='second-wrap'>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cooki Preference</li>
          </ul>
        </div>
        <div className='third-wrap'>
          <ul>
            <li>Gift Card</li>
            <li>Termes Of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div className='fourth-wrap'>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
