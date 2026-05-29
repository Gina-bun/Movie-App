import { Routes, Route } from 'react-router-dom'
import {LandingPage} from "../features/landing-page/LandingPage"
import { WatchListPage } from '../features/watchlist/WatchListPage'
import { MovieDetailsPage } from '../features/movie-detail/MovieDetailsPage'
import { Navbar } from '../components/navbar/Navbar'
import './App.css'

function App() {
  

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/watchlist" element={<WatchListPage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
    </Routes>
    </>
  )
}

export default App
