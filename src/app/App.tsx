import { Routes, Route } from 'react-router-dom'
import {LandingPage} from "../features/landing-page/LandingPage"
import { WatchListPage } from '../features/watchlist/WatchListPage'
import { MovieDetailsPage } from '../features/movie-detail/MovieDetailsPage'
import { Navbar } from '../components/navbar/Navbar'
import { Footer } from '../components/footer/Footer'
import './App.css'

function App() {
  

  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
          <Route path="/tv/:movieId" element={<MovieDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
