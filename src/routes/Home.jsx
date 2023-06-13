import React from 'react'
import Header from '../components/Header'
import RestaurantAdd from '../components/RestaurantAdd'
import RestaurantsList from '../components/RestaurantsList'

const Home = () => {
  return (<>
    <Header title='Restaurant Finder' />
    <RestaurantAdd />
    <RestaurantsList />
  </>)
}

export default Home
