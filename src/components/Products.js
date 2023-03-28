import React from 'react'
import { Card } from 'react-bootstrap';
import {HiShoppingCart} from 'react-icons/hi'
import {FaShareAlt} from 'react-icons/fa'
import {RiHeart2Fill} from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
import { singleProduct } from '../features/products/productSlice';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Product = ({id,title,price,image}) => {
  const dispatch = useDispatch();
  return (<>
    
    <Card onClick={()=>dispatch(singleProduct(id))}>
    <div className='product-img-box'>
    <div className="products-overlay">
      <ul>
        <li><HiShoppingCart /></li>
        <li><RiHeart2Fill /></li>
        <li><FaShareAlt /></li>
      </ul>
    </div>
    <LazyLoadImage 
      key={id}
      alt={title}
      effect="blur"
      src={image}
      threshold={100}
    />
      </div>
      <Card.Body>
        <Card.Title><Link to={`${id}`}>{title}</Link></Card.Title>
        <Card.Title>&#8377; {price}</Card.Title>
      </Card.Body>
      <Card.Body>
        <ul className='size-options'>
          <li><p>S</p></li>
          <li><p>M</p></li>
          <li><p>L</p></li>
          <li><p>XL</p></li>
          <li><p>XXL</p></li>
        </ul>
      </Card.Body>
    </Card>
    </>
  )
}

export default trackWindowScroll(Product)
