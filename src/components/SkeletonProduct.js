import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Card } from 'react-bootstrap'
import "../../node_modules/react-loading-skeleton/dist/skeleton.css"

const SkeletonProduct = () => {
  return (
    <div className='product'>
    <Card>
    <div className='product-img-box'>
      <Skeleton circle={true} height={200} width={200} />
      </div>
      <Card.Body>
        <Card.Title><Skeleton /></Card.Title>
        <Card.Title><Skeleton /></Card.Title>
      </Card.Body>
      <Card.Body>
        <ul className='size-options'>
          <li><Skeleton /></li>
          <li><Skeleton /></li>
          <li><Skeleton /></li>
          <li><Skeleton /></li>
          <li><Skeleton /></li>
        </ul>
      </Card.Body>
    </Card>
    </div>
  )
}

export default SkeletonProduct
