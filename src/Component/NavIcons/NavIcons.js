import React from 'react';
import "./NavIcons.css";
import {IoIosArrowBack} from "react-icons/io";
import {GiIsland, GiCoffeeCup} from "react-icons/gi";
import {FaUmbrellaBeach, FaHome} from "react-icons/fa";
import {MdPool} from "react-icons/md";
import {RiParkingFill} from "react-icons/ri"
import { IconContext } from "react-icons"


const NavIcons = () => (
    <IconContext.Provider value={{size:"1.2em", color:"blue"}}>
    <div className='NavIcons'>
        {/* <div>
            <IoIosArrowBack/>
        </div> */}
        <div className='icon-block' onClick={()=>{alert('clicked')}}>
            <GiIsland/>
            <p>Islands</p>
        </div>
        <div className='icon-block'>
            <FaUmbrellaBeach/>
            <p>Beach</p>
        </div> 
        <div className='icon-block'>
            <MdPool/>
            <p>Amazing Pools</p>
        </div>
        <div className='icon-block'>
            <RiParkingFill/>
            <p>National Parks</p>
        </div>
        <div className='icon-block'>
            <GiCoffeeCup/>
            <p>Breakfast</p>
        </div>
        <div className='icon-block'>
            <FaHome/>
            <p>Shared Homes</p>
        </div>

    </div>
    </IconContext.Provider>
)

export default NavIcons