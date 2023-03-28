import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categories } from '../data/categories';
import { filterProducts,clearFilter,updatePriceFilter,findPrice } from '../features/products/productSlice';

const Filters = () => {
    const {minPrice,maxPrice,price} = useSelector((store)=>store.product);
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(findPrice());
      console.log(price)
    },[])

  return (
    <div className='content'>
        <form>
          {/* category */}
          <div className='form-control'>
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                
                return (
                  <button
                    key={index}
                    type='button'
                    name='category'
                    onClick={()=>dispatch(filterProducts(c.name))}>
                    {c.name}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end of category */}
          {/* price */}
          <div className='form-control'>
            <h5>price</h5>
            <p className='price'>&#8377; {price}</p>
            <input
              type='range'
              name='price'
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={(e)=>dispatch(updatePriceFilter(e.target.value))}
            />
          </div>
          {/* end of price */}
          
        </form>
        <button type='button' className='clear-btn' onClick={()=>dispatch(clearFilter())}>
          clear filters
        </button>
      </div>
  )
}

export default Filters
