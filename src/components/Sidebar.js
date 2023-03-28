import React from 'react'
import logo from "../assets/img/logo.png"
import {ImHome3} from "react-icons/im"
import {RiInformationFill,RiShoppingBagFill} from "react-icons/ri"
import {FaUserCircle} from "react-icons/fa"
import {IoCall} from "react-icons/io5"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeSearch, closeSidebar, closeUser } from '../features/menus/menuSlice'

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateTo = (path)=>{
        navigate(path)
        dispatch(closeSearch())
        dispatch(closeSidebar())
        dispatch(closeUser())
    }

  return (
    <>
        <ul className='sidebar-menu'>
            <li className='sidebar-link'>
                <span><img src={logo} alt="logo" onClick={()=>navigateTo('/')}/></span>
            </li>
            <li className='sidebar-link' onClick={()=>navigateTo('/')}>
                <div className='icon'><ImHome3 /></div>
                <span>Home</span>
            </li>
            <li className='sidebar-link' onClick={()=>navigateTo('/')}>
                <div className='icon'><RiInformationFill /></div>
                <span>About</span>
            </li>
            <li className='sidebar-link' onClick={()=>navigateTo('/products')}>
                <div className='icon'><RiShoppingBagFill /></div>
                <span>Products</span>
            </li>
            <li className='sidebar-link' onClick={()=>navigateTo('/')}>
                <div className='icon'><FaUserCircle /></div>
                <span>Login / Signup</span>
            </li>
            <li className='sidebar-link' onClick={()=>navigateTo('/')}>
                <div className='icon'><IoCall /></div>
                <span>Contact Us</span>
            </li>
        </ul>
    </>
  )
}

export default Sidebar