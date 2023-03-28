import React from 'react'

const Categories = ({name,img}) => {
  return (
          <div className='category-card'>
            <div className='category-card-img'>
              <img src={img} alt='category-img' />
            </div>
            <p className='category-card-text'>{name}</p>
          </div>
  )
}

export default Categories
