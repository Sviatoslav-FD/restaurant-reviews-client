import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RestaurantsContextProvider } from './context/RestaurantsContext'

import Home from './routes/Home'
import RestaurantDetails from './routes/RestaurantDetails'
import RestaurantUpdate from './routes/RestaurantUpdate'

import './index.css'

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className='container mx-auto'>
        <Router>
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/restaurants/:id' element={ <RestaurantDetails /> } />
            <Route exact path='/restaurants/:id/update' element={ <RestaurantUpdate /> } />
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  )
}

export default App
