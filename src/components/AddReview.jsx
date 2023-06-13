import React, { useState } from 'react'
import Input from './shared/Input'
import Select from './shared/Select'
import Textarea from './shared/Textarea'
import Button from './shared/Button'

const AddReview = () => {
  const [name, setName] = useState('')
  const [rating, setRating] = useState('Rating')
  const [review, setReview] = useState('')

  const ratingOptions = [
    { value: '1', text: '$' },
    { value: '2', text: '$$' },
    { value: '3', text: '$$$' },
    { value: '4', text: '$$$$' },
    { value: '5', text: '$$$$$' }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // const response = await RestaurantFinder.post('/', { name, location, price_range: priceRange })
      // addRestaurant(response.data.restaurant)
    } catch (e) { console.error(e) }
  }

  return (
    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 my-4">
      <Input
        type='text'
        placeholder='Name'
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Select
        disabled='Rating'
        options={ratingOptions}
        value={rating}
        onChange={e => setRating(e.target.rating)}
      />

      <Textarea
        cols='30'
        rows='10'
        placeholder='Review'
        value={review}
        onChange={e => setReview(e.target.review)}
      />

      <Button text='Submit' type='submit' onClick={handleSubmit} />
    </form>
  )
}

export default AddReview
