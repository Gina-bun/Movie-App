
import { Link } from "react-router-dom"

export function Navbar() {

    return (
        <>
             <nav className="navbar flex justify-between px-3">
                <p className="font-bold text-2xl">sodaFlix</p>

                <ul className="flex gap-2 cursor-pointer">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="#"  className="nav-link">Category</Link>
                    <Link to="/watchlist" className="nav-link">Watchlist</Link>
                </ul>
             </nav>
        </>
    )
}