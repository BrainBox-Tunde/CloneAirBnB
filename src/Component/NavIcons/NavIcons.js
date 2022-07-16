import React, { useState } from 'react';
import item from '../Data/Data';
import "./NavIcons.css";
import {IoIosArrowBack} from "react-icons/io";
import {GiIsland, GiCoffeeCup} from "react-icons/gi";
import {FaUmbrellaBeach, FaHome} from "react-icons/fa";
import {MdPool} from "react-icons/md";
import {RiParkingFill} from "react-icons/ri"
import { IconContext } from "react-icons"


function NavIcons () {
    const [data, setData] = useState(item);

    const filterResult =(catItem)=>{
    const result = data.filter((curDate) =>{
        return curDate.data === catItem
    }
    )
    setData(result);
    }
    return (
    <IconContext.Provider value={{size:"1.2em", color:"blue"}}>
    <div className='NavIcons'>
        {/* <div>
            <IoIosArrowBack/>
        </div> */}
        <div className='icon-block' onClick={()=>{filterResult('island')}}>
            <GiIsland/>
            <p>Islands</p>
        </div>
        <div className='icon-block' onClick={()=>{filterResult('beach')}}>
            <FaUmbrellaBeach/>
            <p>Beach</p>
        </div> 
        <div className='icon-block' onClick={()=>{filterResult('pool')}}>
            <MdPool/>
            <p>Amazing Pools</p>
        </div>
        <div className='icon-block' onClick={()=>{filterResult('park')}}>
            <RiParkingFill/>
            <p>National Parks</p>
        </div>
        <div className='icon-block' onClick={()=>{filterResult('breakfast')}}>
            <GiCoffeeCup/>
            <p>Breakfast</p>
        </div>
        <div className='icon-block' onClick={()=>{filterResult('home')}}>
            <FaHome/>
            <p>Shared Homes</p>
        </div>
        <div >
        {data.map((Val)=>{
          const{id,title,price,img,description}=Val;
          return(
            <div className='Cards' key={id}>
              <img src={img} alt='' />
                <div>
                  <h2>{title}</h2>
                  <h4>{description}</h4>
                  <h3>{price}</h3>
                </div>
            </div>        
          )
        }
        )}
                       
      </div>

    </div>
    </IconContext.Provider>
    )
}

export default NavIcons