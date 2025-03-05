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
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react"

// Custom TikTok icon since it's not in Lucide React by default
const TikTok = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-tiktok"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
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

  const openWhatsApp = (number) => {
    window.open(`https://wa.me/${number.replace(/\+/g, "")}`, "_blank")
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
          <Mail
            onClick={() => openEmail("safeinofficial@gmail.com")}
            className="w-4 h-4 cursor-pointer text-gray-700 hover:text-black transition-colors"
          />
          <Instagram
            onClick={() => openSocialLink("https://www.instagram.com/safeincloset")}
            className="w-4 h-4 cursor-pointer text-gray-700 hover:text-black transition-colors"
          />
          <Facebook
            onClick={() => openSocialLink("https://www.facebook.com/share/15vfRxGL7p/")}
            className="w-4 h-4 cursor-pointer text-gray-700 hover:text-black transition-colors"
          />
          <TikTok
            onClick={() => openSocialLink("https://www.tiktok.com/@safein.closet?_t=ZS-8tzJUbsHJ28&_r=1")}
            className="w-4 h-4 cursor-pointer text-gray-700 hover:text-black transition-colors"
          />
          <MessageCircle
            onClick={() => openWhatsApp("+92 3314034851")}
            className="w-4 h-4 cursor-pointer text-gray-700 hover:text-black transition-colors"
          />
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
                    openEmail("safeinofficial@gmail.com")
                    setSocialVisible(false)
                  }}
                  className="flex items-center gap-2 cursor-pointer hover:text-black"
                >
                  <Mail className="w-4 h-4" />
                  <p>Email</p>
                </div>
                <div
                  onClick={() => {
                    openSocialLink("https://www.instagram.com/safeincloset")
                    setSocialVisible(false)
                  }}
                  className="flex items-center gap-2 cursor-pointer hover:text-black"
                >
                  <Instagram className="w-4 h-4" />
                  <p>Instagram</p>
                </div>
                <div
                  onClick={() => {
                    openSocialLink("https://www.facebook.com/share/15vfRxGL7p/")
                    setSocialVisible(false)
                  }}
                  className="flex items-center gap-2 cursor-pointer hover:text-black"
                >
                  <Facebook className="w-4 h-4" />
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
                <div
                  onClick={() => {
                    openWhatsApp("+92 3314034851")
                    setSocialVisible(false)
                  }}
                  className="flex items-center gap-2 cursor-pointer hover:text-black"
                >
                  <MessageCircle className="w-4 h-4" />
                  <p>WhatsApp</p>
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
              <Mail
                onClick={() => {
                  openEmail("safeinofficial@gmail.com")
                  setVisible(false)
                }}
                className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black transition-colors"
              />
              <Instagram
                onClick={() => {
                  openSocialLink("https://www.instagram.com/safeincloset")
                  setVisible(false)
                }}
                className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black transition-colors"
              />
              <Facebook
                onClick={() => {
                  openSocialLink("https://www.facebook.com/share/15vfRxGL7p/")
                  setVisible(false)
                }}
                className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black transition-colors"
              />
              <TikTok
                onClick={() => {
                  openSocialLink("https://www.tiktok.com/@safein.closet?_t=ZS-8tzJUbsHJ28&_r=1")
                  setVisible(false)
                }}
                className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black transition-colors"
              />
              <MessageCircle
                onClick={() => {
                  openWhatsApp("+92 3314034851")
                  setVisible(false)
                }}
                className="w-5 h-5 cursor-pointer text-gray-700 hover:text-black transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

