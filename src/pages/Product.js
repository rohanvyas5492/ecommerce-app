import React from 'react'
import  Filters from '../components/Filters'
import  Products from '../components/Products'
import  PageHero  from '../components/PageHero'
import { useSelector } from 'react-redux'
import { Container,Row,Col } from 'react-bootstrap'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

const Product = () => {
  const {filteredItems} = useSelector((store)=>store.product)

  return (
    <main>
    <Container>
    <div className='product-wrapper'>
      <PageHero title='products' />
      <div className='page'>
        <Row className='section-center products'>
        <Col md={2}>
          <Filters />
          </Col>
          <Col md={10}>
          <div className='products-section'>
            <LazyLoadComponent>
            {filteredItems.map(products=>{
              return(
              <div className='product' key={products.id}><Products {...products} /></div>
              )
            })}
            </LazyLoadComponent>
          </div>
          </Col>
        </Row>
      </div>
      </div>
      </Container>
    </main>
  )
}

export default Product