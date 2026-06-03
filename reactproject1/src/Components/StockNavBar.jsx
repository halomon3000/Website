import { Link } from "react-router-dom"
import '../App.css'

export function StockNavBar() {
    return (
        <nav className="navbar-container">
            <Link to="/Dashboards">
                <button>Dashboards</button>
            </Link>
            <Link to="/Trends">
                <button>Trends</button>
            </Link>
            <Link to="/Alarms">
                <button>Alarms</button>
            </Link>
            <Link to="/Report">
                <button>Reports</button>
            </Link>
            <Link to="/Live">
                <button>Live</button>
            </Link>
        </nav>
    )
}