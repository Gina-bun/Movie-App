
import { Link } from "react-router-dom"

export function Navbar() {

    return (
        <>
             <nav className="navbar">
                <p>sodaFlix</p>

                <ul>
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="#"  className="nav-link">Category</Link>
                    <Link to="/watchlist" className="nav-link">Watchlist</Link>
                </ul>
             </nav>
        </>
    )
}