/* eslint-disable react/prop-types */
import React from 'react'

const RestaurantRating = ({ rating }) => {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className='fas fa-star text-warning' />)
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<i key={i} className='fas fa-star-half-alt text-warning' />)
    } else {
      stars.push(<i key={i} className='far fa-star text-warning' />)
    }
  }

  return <>{stars}</>
}

export default RestaurantRating
