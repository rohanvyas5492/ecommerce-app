import React, {  useState } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap';
import { categories } from '../data/categories';
import banner from "../assets/img/home-banner.jpg";
import ad1 from "../assets/img/ad1.jpg";
import ad2 from "../assets/img/ad2.jpg";
import ad3 from "../assets/img/ad3.jpg";
import ad4 from "../assets/img/ad4.jpg";
import ad5 from "../assets/img/ad5.jpg";
import banner1 from "../assets/img/banner1.jpg";
import diamond from "../assets/img/diamond.png";
import tag from "../assets/img/tag.png";
import Categories from '../components/Categories';
import { Link, useNavigate } from 'react-router-dom';
import { singleProduct } from '../features/products/productSlice';
import {  useDispatch, useSelector } from 'react-redux';
import {HiShoppingCart} from 'react-icons/hi'
import {FaShareAlt} from 'react-icons/fa'
import {RiHeart2Fill} from 'react-icons/ri'
import { LazyLoadComponent, LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';

const Home = () => {
  const [limit,setLimit] = useState(8);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {productItems} = useSelector((store)=>store.product)
  return (
  <><LazyLoadComponent>
    <div className='home-banner'>
    <LazyLoadImage 
      alt='banner'
      effect="blur"
      src={banner}
      threshold={100}
      width="100%"
    />
    </div>
    </LazyLoadComponent>
    <Container>
    <div className='category-section'>
      {categories.map(cat=>{
        return <Categories key={cat.id} {...cat}/>
      })}
    </div>
    </Container>
    <Container>
    <LazyLoadComponent>
      <div className='ad-section'>
        <div className='ads'><LazyLoadImage src={ad1} alt='add' effect='blur' threshold={100}/></div>
        <div className='ads'><LazyLoadImage src={ad2} alt='add' effect='blur' threshold={100}/></div>
        <div className='ads'><LazyLoadImage src={ad3} alt='add' effect='blur' threshold={100}/></div>
        <div className='ads'><LazyLoadImage src={ad4} alt='add' effect='blur' threshold={100}/></div>
        <div className='ads'><LazyLoadImage src={ad5} alt='add' effect='blur' threshold={100}/></div>
      </div>
      </LazyLoadComponent>
    </Container>
    
    <Container>
      {/* Products section */}
      <LazyLoadComponent>
    <Row className='products-card'>
    <div className='section-heading'>
      <h2>Trending Products</h2>
    </div>
      {productItems.slice(0,limit ?limit :productItems.length()).map(products=>{
        const {id,image,title,price}= products
        return(
          <div className='product'>
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
      alt='banner'
      effect="blur"
      src={image}
      threshold={100}
      width="100%"
    />
      </div>
      <Card.Body>
        <Card.Title><Link to={`products/${id}`} >{title}</Link></Card.Title>
        <Card.Title>&#8377;{price}</Card.Title>
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
    </div>
        )
      })}
      </Row>
      </LazyLoadComponent>
      {/* Products section end */}
      <Row>
      <button className='view-all-btn' onClick={()=>navigate('/products')}>View All</button>
      </Row>
    </Container>
    <div className='home-banner'>
      <img src={banner1} alt='banner' width='100%'/>
    </div>
    <Container className='offer-section'>
    <Row>
      <Col md={6}>
        <div className='offer-card first'>
        <div className='offer-img'><img src={diamond} alt='diamond' /></div>
        <h2>Hurry Up!</h2>
        <h3>85% OFF</h3>
        <p>Sale</p>
        <button className='offer-btn'>shop now</button>
      </div>
      </Col>
      <Col md={6}>
        <div className='offer-card second'>
        <div className='offer-img'><img src={tag} alt='tag' /></div>
        <h2>Hurry Up!</h2>
        <h3>75% OFF</h3>
        <p>Sale</p>
        <button className='offer-btn'>shop now</button>
      </div>
      </Col>
    </Row>
    </Container>
  </>
  )
}

export default trackWindowScroll(Home)
