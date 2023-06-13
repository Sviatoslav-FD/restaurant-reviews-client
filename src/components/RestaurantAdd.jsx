import React, { useState, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import Input from './shared/Input'
import Select from './shared/Select'
import Button from './shared/Button'

const RestaurantAdd = () => {
  const { addRestaurant } = useContext(RestaurantsContext)

  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState('Price Range')

  const priceRangeOptions = [
    { value: '1', text: '$' },
    { value: '2', text: '$$' },
    { value: '3', text: '$$$' },
    { value: '4', text: '$$$$' },
    { value: '5', text: '$$$$$' }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await RestaurantFinder.post('/', {
        name, location, price_range: priceRange
      })

      addRestaurant(response.data.restaurant)

      setName('')
      setLocation('')
      setPriceRange('Price Range')
    } catch (e) { console.error(e) }
  }

  return (
    <form className='bg-gray-200 shadow-md rounded px-4 py-4 my-4'>
      <Input
        type='text'
        placeholder='Name'
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <Input
        type='text'
        placeholder='Location'
        value={location}
        onChange={e => setLocation(e.target.value)}
      />

      <Select
        disabled='Price Range'
        options={priceRangeOptions}
        value={priceRange}
        onChange={e => setPriceRange(e.target.value)}
      />

      <Button text='Add' type='submit' onClick={handleSubmit} />
    </form>
  )
}

export default RestaurantAdd
