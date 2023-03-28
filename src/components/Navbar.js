import React from 'react'
import { Container,Row } from 'react-bootstrap'
import {RiHeart2Line,RiMenu4Fill,RiShoppingBag3Line} from "react-icons/ri"
import {BiUser} from "react-icons/bi"
import {FiSearch} from "react-icons/fi"
import {GrClose} from "react-icons/gr"
import { useNavigate } from 'react-router-dom';
import logo from "../assets/img/logo.png"
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { openSidebar,closeSidebar,openSearch } from '../features/menus/menuSlice'
import SearchContainer from './SearchContainer'

const Navbar = () => {
  const navigate = useNavigate();
  const {isSidebarOpen,isSearchOpen} = useSelector((store)=>store.menu)
  const dispatch = useDispatch();
  return (<>
    <div className='navbar-fixed'>
      <Container>
        <Row>
        <div className='navbar-container'>
        <div className='sidebar-btn' >
            {isSidebarOpen ? <GrClose onClick={()=>dispatch(closeSidebar())}/> : <RiMenu4Fill onClick={()=>dispatch(openSidebar())}/>}
        </div>
        <div className='navbar-logo'>
        <img src={logo} alt="logo" width="10rem" onClick={()=>navigate('/')}/></div>
        <div className='navbar-menu'>
          <div className='navbar-link'><FiSearch onClick={()=>dispatch(openSearch())}/></div>
          <div className='navbar-link'><RiHeart2Line /></div>
          <div className='navbar-link'><RiShoppingBag3Line /></div>
          <div className='navbar-link'><BiUser /></div>
        </div>   
        </div>
        </Row>
      </Container>
    </div>
    <div className={isSidebarOpen? 'sidebar is-open' : 'sidebar'}><Sidebar /></div>
    <div className={isSearchOpen? 'search-box is-open' : 'search-box'}><SearchContainer /></div>
    </>
  )
}

export default Navbar
