import React from 'react'
import { Link } from 'react-router-dom'

const PageHero = () => {
  return (
    <div className='breadcumbs'>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home </Link>
          <Link to='/products'>/ Products</Link>
        </h3>
      </div>
    </div>
  )
}

export default PageHero
