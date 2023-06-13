/* eslint-disable react/prop-types */
import React from 'react'

import RestaurantRating from '../components/RestaurantRating'

const RestaurantReviews = ({ reviews }) => {
  return (
    <div className='flex justify-between'>
      {reviews.map(review => (
        <div className='max-w-sm p-4 border rounded shadow bg-gray-800 border-gray-700 hover:bg-gray-700' style={{ maxWidth: '30%' }} key={review.id}>
          <div className='mb-2 text-2xl font-bold tracking-tight text-white'>
            { review.name }
            <RestaurantRating rating={review.rating} className='pl-4' />
          </div>

          <div className='text-gray-400'>
            {review.review}
          </div>
        </div>
      ))}
    </div>
  )
}

export default RestaurantReviews
