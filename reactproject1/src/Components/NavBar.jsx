import { Link } from "react-router-dom"
import '../App.css'

export function Navbar() {
    return (
        <nav className="navbar-container">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/Resume">
                <button>Resume</button>
            </Link>
            <Link to="/Projects">
                <button>Projects</button>
            </Link>
            <Link to="/Blog">
                <button>Blog</button>
            </Link>
            <Link to="/Schedule">
                <button>Schedule</button>
            </Link>
            <Link to="/Stock">
                <button>Stock</button>
            </Link>
        </nav>
    )
}