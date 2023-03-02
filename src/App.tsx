import React from 'react'
import {Routes, Route} from 'react-router-dom'
import FavoritesPages from './pages/FavoritesPages'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'

export default function App() {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPages />} />
      </Routes>
    </> 
  )
}
  