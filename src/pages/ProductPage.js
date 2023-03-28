import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import {BiPlusMedical} from 'react-icons/bi'
import {FaMinus} from 'react-icons/fa'

const ProductPage = () => {
    const {singleProduct} = useSelector((store)=>store.product)
  return (
    <main>
    <Container>
    <Row>
        <Col md={12}><PageHero title='products' /></Col>
        <Link to='/products' className='clear-btn single'>
          back to products
        </Link>
    </Row>
      {singleProduct.map((p)=>{
        const {id,image,title,price,description} = p;
        return(<Row key={id} className="product-row">
            <Col md={6}>
        <img src={image} alt='product' className='product-image'/>
        </Col>
        <Col md={6}>
        <div className='section section-center page'>
        
        <div className='product-center'>
          <img src='' alt='' />
          <section className='content'>
            <h2>{title}</h2>
            <h5 className='price'>&#8377; {price}</h5>
            <p className='desc'>{description}</p>
          </section>
        </div>
        <div className='btn-container'>
          <div className='quantity-box'>
            <button className='amount-btn'><BiPlusMedical /></button>
            <p className='amount'>0</p>
            <button className='amount-btn'><FaMinus /></button>
          </div>
          <div className='add-to-cart'>
            <button className='add-to-cart-btn'>Add to cart</button>
          </div>
        </div>
      </div>
        </Col>
        </Row>
        )
      })}
    </Container>
    </main>
  )
}

export default ProductPage