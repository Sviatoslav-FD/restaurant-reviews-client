import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder'
import AddReview from '../components/AddReview'
import RestaurantReviews from '../components/RestaurantReviews'
import Header from '../components/Header'

const RestaurantDetails = () => {
  const { id } = useParams()
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)

  const fetchData = async () => {
    try {
      const { data } = await RestaurantFinder.get(`/${id}`)
      setSelectedRestaurant(data)
    } catch (error) { console.error(error) }
  }

  useEffect(() => { fetchData() }, [])

  return (
    <>{selectedRestaurant && (
      <>
        <Header title='Restaurant Details' />
        <AddReview />
        <RestaurantReviews reviews={selectedRestaurant.reviews} />
      </>
    )}</>
  )
}

export default RestaurantDetails
