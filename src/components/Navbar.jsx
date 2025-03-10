// import React, { useContext, useState } from 'react'
// import {assets} from '../assets/assets'
// import { Link, NavLink } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {

//     const [visible,setVisible] = useState(false);

//     const {setShowSearch , getCartCount , navigate, token, setToken, setCartItems} = useContext(ShopContext);

//     const logout = () => {
//         navigate('/login')
//         localStorage.removeItem('token')
//         setToken('')
//         setCartItems({})
//     }

//   return (
//     <div className='flex items-center justify-between py-5 font-medium'>
      
//       <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

//       <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        
//         <NavLink to='/' className='flex flex-col items-center gap-1'>
//             <p>HOME</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//             <p>COLLECTION</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/about' className='flex flex-col items-center gap-1'>
//             <p>ABOUT</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//             <p>CONTACT</p>
//             <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>

//       </ul>

//       <div className='flex items-center gap-6'>
//             <img onClick={()=> { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            
//             <div className='group relative'>
//                 <img onClick={()=> token ? null : navigate('/login') } className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
//                 {/* Dropdown Menu */}
//                 {token && 
//                 <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
//                     <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
//                         <p className='cursor-pointer hover:text-black'>My Profile</p>
//                         <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
//                         <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
//                     </div>
//                 </div>}
//             </div> 
//             <Link to='/cart' className='relative'>
//                 <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
//                 <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
//             </Link> 
//             <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" /> 
//       </div>

//         {/* Sidebar menu for small screens */}
//         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
//                 <div className='flex flex-col text-gray-600'>
//                     <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
//                         <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//                         <p>Back</p>
//                     </div>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
//                     <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
//                 </div>
//         </div>

//     </div>
//   )
// }

// export default Navbar

"use client"

import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { Link, NavLink } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
// Remove Lucide icons import
// Import Material UI icons
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"

// Custom TikTok icon using Material UI style
const TikTok = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    style={{ fill: "currentColor", color: "#000000" }}
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
)

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const [socialVisible, setSocialVisible] = useState(false)

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const logout = () => {
    navigate("/login")
    localStorage.removeItem("token")
    setToken("")
    setCartItems({})
  }

  const openSocialLink = (url) => {
    window.open(url, "_blank")
  }

  const openEmail = (email) => {
    window.location.href = `mailto:${email}`
  }

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo || "/placeholder.svg"} className="w-36" alt="" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        {/* Social Media Icons - Desktop */}
        <div className="hidden sm:flex items-center gap-3">
          <InstagramIcon
            onClick={() => openSocialLink("https://www.instagram.com/safeincloset")}
            className="w-5 h-5 cursor-pointer text-[#E1306C] hover:opacity-80 transition-colors"
            fontSize="small"
          />
          <FacebookIcon
            onClick={() => openSocialLink("https://www.facebook.com/share/15vfRxGL7p/")}
            className="w-5 h-5 cursor-pointer text-[#1877F2] hover:opacity-80 transition-colors"
            fontSize="small"
          />
          <div
            onClick={() => openSocialLink("https://www.tiktok.com/@safein.closet?_t=ZS-8tzJUbsHJ28&_r=1")}
            className="cursor-pointer hover:opacity-80 transition-colors"
          >
            <TikTok />
          </div>
        </div>

        {/* Social Media Icon for Mobile - Shows dropdown */}
        <div className="sm:hidden relative">
          <svg
            onClick={() => setSocialVisible(!socialVisible)}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            <path d="M18 16.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 0V7m0 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 0H6A3.5 3.5 0 1 1 6 0h0a3.5 3.5 0 0 1 0 7z" />
          </svg>

          {/* Social Media Dropdown for Mobile */}
          {socialVisible && (
            <div className="absolute right-0 pt-2 z-10">
              <div className="flex flex-col gap-3 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <div
                  onClick={() => {
                    openSocialLink("https://www.instagram.com/safeincloset")
                    setSocialVisible(false)
                  }}
                  className="flex items-center gap-2 cursor-pointer hover:text-black"
                >
                  <InstagramIcon className="w-4 h-4 text-[#E1306C]" fontSize="small" />
                  <p>Instagram</p>
                </div>
                <div
                  onClick={() => {
                    openSocialLink("https://www.facebook.com/share/15vfRxGL7p/")
                    setSocialVisible(false)
                  }}
                  className="flex items-center gap-2 cursor-pointer hover:text-black"
                >
                  <FacebookIcon className="w-4 h-4 text-[#1877F2]" fontSize="small" />
                  <p>Facebook</p>
                </div>
                <div
                  onClick={() => {
                    openSocialLink("https://www.tiktok.com/@safein.closet?_t=ZS-8tzJUbsHJ28&_r=1")
                    setSocialVisible(false)
                  }}
                  className="flex items-center gap-2 cursor-pointer hover:text-black"
                >
                  <TikTok />
                  <p>TikTok</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <img
          onClick={() => {
            setShowSearch(true)
            navigate("/collection")
          }}
          src={assets.search_icon || "/placeholder.svg"}
          className="w-5 cursor-pointer"
          alt=""
        />

        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer"
            src={assets.profile_icon || "/placeholder.svg"}
            alt=""
          />
          {/* Dropdown Menu */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon || "/placeholder.svg"} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon || "/placeholder.svg"}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-20 ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon || "/placeholder.svg"} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
            HOME
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">
            COLLECTION
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">
            ABOUT
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">
            CONTACT
          </NavLink>

          {/* Social Media Links in Mobile Menu */}
          <div className="py-3 pl-6 border">
            <p className="mb-2 font-medium">CONNECT WITH US</p>
            <div className="flex gap-4 mt-2">
              <InstagramIcon
                onClick={() => {
                  openSocialLink("https://www.instagram.com/safeincloset")
                  setVisible(false)
                }}
                className="w-5 h-5 cursor-pointer text-[#E1306C] hover:opacity-80 transition-colors"
                fontSize="small"
              />
              <FacebookIcon
                onClick={() => {
                  openSocialLink("https://www.facebook.com/share/15vfRxGL7p/")
                  setVisible(false)
                }}
                className="w-5 h-5 cursor-pointer text-[#1877F2] hover:opacity-80 transition-colors"
                fontSize="small"
              />
              <div
                onClick={() => {
                  openSocialLink("https://www.tiktok.com/@safein.closet?_t=ZS-8tzJUbsHJ28&_r=1")
                  setVisible(false)
                }}
                className="cursor-pointer hover:opacity-80 transition-colors"
              >
                <TikTok />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

