import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import Input from './shared/Input'
import Select from './shared/Select'
import Button from './shared/Button'

const RestaurantUpdate = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState('')

  const priceRangeOptions = [
    { value: '1', text: '$' },
    { value: '2', text: '$$' },
    { value: '3', text: '$$$' },
    { value: '4', text: '$$$$' },
    { value: '5', text: '$$$$$' }
  ]

  const fetchData = async () => {
    try {
      const response = await RestaurantFinder.get(`/${id}`)
      const { name, location, price_range: priceRange } = response.data.restaurant
      setName(name)
      setLocation(location)
      setPriceRange(priceRange)
    } catch (e) { console.error(e) }
  }

  useEffect(() => { fetchData() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await RestaurantFinder.put(`/${id}`, { name, location, price_range: priceRange })
      navigate('/')
    } catch (e) { console.error(e) }
  }

  return (
    <form className="bg-gray-200 shadow-md rounded px-4 py-4 my-4">
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

      <Button text='Update' type='submit' onClick={handleSubmit} />
    </form>
  )
}

export default RestaurantUpdate
