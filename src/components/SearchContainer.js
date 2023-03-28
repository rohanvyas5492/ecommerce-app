import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {IoIosCloseCircle} from 'react-icons/io'
import { useDispatch } from 'react-redux'
import {closeSearch} from '../features/menus/menuSlice'

const SearchContainer = () => {
  const dispatch = useDispatch();
  return (
    <div className='search-container'>
    <div className='close-btn'>
        <IoIosCloseCircle onClick={()=>dispatch(closeSearch())}/>
    </div>
        <div className='search-form-box'>
            <div className='form-input'>
                <input type='text' name='search item' placeholder='Enter Search Item' className='search-item'/>
                <div className='search-icon'>
                <BiSearchAlt />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchContainer
