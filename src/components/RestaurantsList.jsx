import React, { useEffect, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'
import { useNavigate } from 'react-router-dom'
import Button from './shared/Button'

const RestaurantsList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext)
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await RestaurantFinder.get('/')
      setRestaurants(response.data.restaurants)
    } catch (e) { console.error(e.code) }
  }

  useEffect(() => { fetchData() }, [])

  const goToDetails = id => {
    navigate(`/restaurants/${id}`)
  }

  const handleDelete = async (e, id) => {
    e.stopPropagation()

    try {
      await RestaurantFinder.delete(`/${id}`)
      fetchData()
    } catch (e) { console.error(e) }
  }

  const handleUpdate = (e, id) => {
    e.stopPropagation()

    navigate(`/restaurants/${id}/update`)
  }

  return (
    <table className='w-full rounded text-sm text-left text-gray-400 bg-gray-700'>
      <thead className='text-xs uppercase'>
        <tr className=''>
          <th scope='col' className="px-6 py-3">Restaurant</th>
          <th scope='col' className="px-6 py-3">Location</th>
          <th scope='col' className="px-6 py-3">Price Range</th>
          <th scope='col' className="px-6 py-3">Edit</th>
          <th scope='col' className="px-6 py-3">Delete</th>
        </tr>
      </thead>
      <tbody>
        { restaurants && restaurants.map(restaurant => (
          <tr
            className='border-b cursor-pointer hover:bg-gray-800'
            key={restaurant.id}
            onClick={() => goToDetails(restaurant.id)}
          >
            <th scope="row" className="text-white px-6 py-4 font-medium whitespace-nowrap">
              { restaurant.name }
            </th>
            <td className="px-6 py-4">{ restaurant.location }</td>
            <td className="px-6 py-4">{ '$'.repeat(restaurant.price_range) }</td>
            <td className="px-6 py-4">
              <Button text='Update' onClick={(e) => handleUpdate(e, restaurant.id)} />
            </td>
            <td className="px-6 py-4">
              <Button text='Delete' onClick={(e) => handleDelete(e, restaurant.id)} />
            </td>
          </tr>
        )) }
      </tbody>
    </table>
  )
}

export default RestaurantsList
