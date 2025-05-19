import "./css/App.css";
import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { MovieProvider } from "./contexts/MovieContext";
import Favourites from './pages/Favourites'
import NavBar from './components/NavBar'

function App() {
  return (
    <MovieProvider>
    <main className='mainContent'>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favourites' element={<Favourites />} />
        </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
