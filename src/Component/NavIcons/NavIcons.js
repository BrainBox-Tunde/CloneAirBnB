import React, {useState} from 'react';
import "./NavIcons.css";
import {IoIosArrowBack} from "react-icons/io";
import {GiIsland, GiCoffeeCup} from "react-icons/gi";
import {FaUmbrellaBeach, FaHome} from "react-icons/fa";
import {MdPool} from "react-icons/md";
import {RiParkingFill} from "react-icons/ri"
import { IconContext } from "react-icons"
import BeachPage from '../NavIconPage/BeachPage';


function NavIcons () {
    const [state, setState] = useState(1);

    const page = () => {
        setState();
    } 
    const handleBeach = () =>{
        return (
            <div>
            <h1>Hello</h1>
            </div>
        )
    }

      

    return(
    <IconContext.Provider value={{size:"1.2em", color:"blue"}}>
    <div className='NavIcons'>
        {/* <div>
            <IoIosArrowBack/>
        </div> */}
        <div className='icon-block' onClick={() => page(1)}>
            <GiIsland/>
            <p>Islands</p>
        </div>
        <div className='icon-block'>
            <FaUmbrellaBeach/>
            <p>Beach</p>
        </div> 
        <div className='icon-block' onClick={handleBeach}>
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
}

export default NavIcons