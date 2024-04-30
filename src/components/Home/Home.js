import React from 'react';
import '../css/home/home.css'
import myPic from '../../images/soft.png'
import { NavLink } from 'react-router-dom';
import { SiHomeadvisor } from "react-icons/si";
import { PiToolboxFill } from "react-icons/pi";
import { MdVideoSettings } from "react-icons/md";
import { MdOutlineImageSearch } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidLockOpen } from "react-icons/bi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";

import Data from '../Data/sidebar.json'
import Footer from './Footer';
import Main from './Main';
const Home = () => {
  const getIcon = (getName) => {
    switch (getName) {
      case 'SiHomeadvisor':
        return <SiHomeadvisor />;
      case 'IoPersonSharp':
        return <IoPersonSharp />;
      case 'PiToolboxFill':
        return <PiToolboxFill />;
      case 'FaBookReader':
        return <FaBookReader />;
      case 'BiSolidMessageRoundedDetail':
        return <BiSolidMessageRoundedDetail />;
      case 'MdVideoSettings':
        return <MdVideoSettings />;
      case 'MdOutlineImageSearch':
        return <MdOutlineImageSearch />;
      case 'FaClockRotateLeft':
        return <FaClockRotateLeft />;
      case 'BiSolidLockOpen':
        return <BiSolidLockOpen />;

      default:
        return null
    }
  }
  return (
    <div>
      <div className='sideNav'>
        <div className='resPic'>
          <img src={myPic} alt="" className='imgDimensions' />
          <h2 className='text-center text-white Name fs-1 '>Taimoor Ali</h2>
        </div>
        <div className='detailRes '>
          {Data.Links.map((cate) => (
            <div className='side-bar'>
              <div className='NavBtn'>
                <div className="NavIcon">
                  {
                    getIcon(cate.icon)}
                </div>
                <NavLink to={cate.to}
                  className="NavLink "
                  style={({ isActive }) =>
                    isActive ? { filter: "Brightness(130%)" } : {}
                  }>
                  {cate.name}
                </NavLink>
              </div>
            </div>
          ))}
          <Footer />
        </div>
      </div>
      <div className='Main-home-image'>

        {/* <Main /> */}
      </div>

    </div>
  );
}

export default Home;
