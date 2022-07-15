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
        <div>
            <IoIosArrowBack/>
        </div>
        <div>
            <GiIsland/>Islands
        </div>
        <div>
            <FaUmbrellaBeach/>Beach
        </div> 
        <div>
            <MdPool/>Amazing Pools
        </div>
        <div>
            <RiParkingFill/>National Parks
        </div>
        <div>
            <GiCoffeeCup/>Breakfast
        </div>
        <div>
            <FaHome/>Shared Homes
        </div>

    </div>
    </IconContext.Provider>
)

export default NavIcons