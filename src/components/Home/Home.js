import React from 'react';
import '../css/home/home.css'
import myPic from '../../images/j.jpg'
import { NavLink } from 'react-router-dom';
import { SiHomeadvisor } from "react-icons/si";

const Home = () => {
  // const imageTaimoor ='../'
  return (
    <>
      <div className='sideNav'>
        <div className='resPic'>
          <img src={myPic} alt="" className='imgDimensions' height={'88%'} width={'100%'} />
          <h2 className='text-center bg-white text-capitalize text-dark Name'>Taimoor Ali</h2>
        </div>
        <div className='detailRes'>
          <div className='side-bar'>
            <div className='NavBtn'>
              <SiHomeadvisor className="NavIcon " />
              <NavLink to="/"
                className="NavLink "
                style={({ isActive }) =>
                  isActive ? { color: "crimson" } : {}
                }>
                Home
              </NavLink>
            </div>

          </div>
          <div className='side-bar'>
            <div className='NavBtn'>
              <SiHomeadvisor className='NavIcon' />
              <NavLink to="/contact"
                className="NavLink"
                style={({ isActive }) =>
                  isActive ? { color: "crimson" } : {}
                }>
                Contact
              </NavLink>
            </div></div>
        </div>
      </div>


    </>
  );
}

export default Home;
