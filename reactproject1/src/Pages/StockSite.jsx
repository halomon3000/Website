import { Outlet, Link } from 'react-router-dom'
import { StockLayout } from './StockLayout'
import './StockSite.css'

export function StockSite() {
    return (
        <div style={{ display: 'flex', minHeight: '80vh' }}>
            {/* 1. Stock Sub-Navigation Sidebar */}
            <aside style={{ width: '240px', padding: '20px', borderRight: '1px solid #ccc' }}>
                <h3>Stock Management Terminal</h3>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Link to="/Stock/Dashboards">Dashboards</Link>
                    <Link to="/Stock/Live">Live Data</Link>
                    <Link to="/Stock/Trends">Trends</Link>
                    <Link to="/Stock/Alarms">Alarms</Link>
                    <Link to="/Stock/Reports">Reports</Link>
                </nav>
            </aside>

            {/* 2. Main Stock Content Area */}
            <main style={{ flex: 1, padding: '20px' }}>
                <Outlet />
            </main>
        </div>
    )
}