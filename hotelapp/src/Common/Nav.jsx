import React, { useState } from 'react'
import { ContextDatas } from './ContextWrapped'
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import Button from './Button';
import { VscAccount } from 'react-icons/vsc';
import AutocompleteTwo from './Autocomplete';
import { useSelector } from 'react-redux';
import { CiHome } from "react-icons/ci";
import { Link } from 'react-router';
import { CiHeart } from "react-icons/ci";
import { FaBarsStaggered } from "react-icons/fa6";
const Nav = ({search,user,Setbaropen}) => {
  const {isLogged,SetisLogged,Setloginmodal}=ContextDatas()
const now=Date.now()
const newDate=new Date(now)
const monthIndex =newDate.getMonth();
const date = new Date();
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const keralaPlaces = [
  // Districts
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod",

  // Thiruvananthapuram district towns
  "Kazhakoottam",
  "Varkala",
  "Neyyattinkara",
  "Poovar",
  "Kattakada",

  // Kollam district towns
  "Punalur",
  "Chavara",
  "Kottarakkara",
  "Karunagappally",
  "Paravur",

  // Pathanamthitta district towns
  "Adoor",
  "Ranni",
  "Thiruvalla",
  "Konni",
  "Pandalam",

  // Alappuzha district towns
  "Cherthala",
  "Ambalappuzha",
  "Kayamkulam",
  "Haripad",
  "Mavelikkara",

  // Kottayam district towns
  "Changanassery",
  "Pala",
  "Ettumanoor",
  "Kanjirappally",
  "Vaikom",

  // Idukki district towns
  "Munnar",
  "Thodupuzha",
  "Kattappana",
  "Adimali",
  "Painavu",

  // Ernakulam district towns
  "Kochi",
  "Aluva",
  "Kothamangalam",
  "Perumbavoor",
  "Kakkanad",

  // Thrissur district towns
  "Guruvayoor",
  "Irinjalakuda",
  "Chalakudy",
  "Kodungallur",
  "Wadakkanchery",

  // Palakkad district towns
  "Ottapalam",
  "Chittur",
  "Mannarkkad",
  "Shoranur",
  "Alathur",

  // Malappuram district towns
  "Manjeri",
  "Perinthalmanna",
  "Nilambur",
  "Tirur",
  "Kondotty",

  // Kozhikode district towns
  "Vadakara",
  "Koyilandy",
  "Feroke",
  "Kunnamangalam",
  "Ramanattukara",

  // Wayanad district towns
  "Kalpetta",
  "Mananthavady",
  "Sulthan Bathery",
  "Meppadi",
  "Pulpally",

  // Kannur district towns
  "Thalassery",
  "Payyannur",
  "Mattannur",
  "Iritty",
  "Koothuparamba",

  // Kasaragod district towns
  "Kanhangad",
  "Nileshwar",
  "Uppala",
  "Cheruvathur",
  "Manjeshwaram"
];




// Get month name
const monthName = monthNames[date.getMonth()];
const [searchpop,Setsearchpop]=useState(false)
const {FilterDetails}=useSelector((state)=>state.Product)
  return (
<>
   <div className='px-8 py-5 flex justify-between items-center  shadow-md'>
      <div>
<img src="../../public/images/Logo (1).png" className='w-15 h-6 md:w-19 md:h-7' alt="" />
      </div>

      {
        search&&(
        <div className='flex justify-center items-center space-x-1 md:space-x-6 bg-gray-100 relative p-1 rounded-lg '>
          <p className='text-gray-600 font-bold text-xs md:text-md  border-black/05 px-1 md:px-2'>{FilterDetails.district || "location"}</p>
          <p className='text-gray-600 text-xs md:text-md  font-bold border-l border-black/05 px-1 md:px-2'>{monthIndex}-{monthName}</p>
          <p className='text-gray-600 text-xs md:text-md  font-bold border-l border-black/05 px-1 md:px-2'>{FilterDetails.length ||"total "}-Properties</p>
          <button className='p-2 bg-blue-500 rounded-xl ' onClick={()=>Setsearchpop(true)}><IoSearchOutline className='text-white text-xl md:text-3xl'/></button>
{
  searchpop&&<AutocompleteTwo placeholder={"search...."} keralaDistricts={keralaPlaces} onSelect={()=>{}} Setsearchpop={Setsearchpop}/>
}
        </div>
        )
      }
      <div className='flex items-center justify-center space-x-3'>
        <div className='hidden md:flex '>
<img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png" className='w-6 mr-2 h-6 rounded-full' alt="" />
<span className='text-blue-700'>ind</span>
        </div>
        <Link to="/profile/wishlists">
<CiHeart className='text-2xl text-blue-800  ' />
        </Link>
        {
          user&&<div className='flex space-x-2'>
          <Link to="/"><CiHome className='text-2xl text-blue-800  ' /></Link>
          <FaBarsStaggered onClick={()=>Setbaropen(true)} className='md:hidden text-2xl text-blue-800  ' />
          </div>
        }
{
 isLogged?<Link className={`${user?"hidden":""}`} to="/profile"><VscAccount className="text-2xl text-blue-800 "/></Link>:<Button onClick={()=>Setloginmodal(true)} text={"login"}/>
}

      </div>
    </div>
</>
  )
}

export default Nav
