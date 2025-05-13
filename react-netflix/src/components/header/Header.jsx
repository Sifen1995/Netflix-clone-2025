import React from 'react';
import './Header.css';
import logo from '../../assets/netflix_logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Header() {
  return (
    <div className='header-outer-container'>
      <div className='header-container'>
        <div className='header-left'>
            <ul>
                <li><img src={logo} alt="netflix logo" /></li>
                <li><a href="">Home</a></li>
                <li><a href="">TvShows</a></li>
                <li><a href="">Movies</a></li>
                <li><a href="">Latests</a></li>
                <li><a href="">My Lists</a></li>
                <li><a href="">Browse By Languages</a></li>
            </ul>
        </div>
        <div className='header-right'>
          <ul>
            <li><SearchIcon/></li>
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>


          </ul>
        </div>
      </div>
    </div>
  )
}
