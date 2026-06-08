
import { Layout } from './Layout'
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from 'react-router-dom'
import { Home } from './Pages/Home'
import { BlogSite } from './Pages/BlogSite'
import { ProjectsSite } from './Pages/ProjectsSite'
import { ResumeSite } from './Pages/ResumeSite'
import { ScheduleSite } from './Pages/ScheduleSite'
import { StockSite } from './Pages/StockSite'

import { DashboardSite } from './Pages/StockSites/DashboardSite'
import { LiveSite } from './Pages/StockSites/LiveSite'
import { TrendingSite } from './Pages/StockSites/TrendingSite'
import { ReportSite } from './Pages/StockSites/ReportSite'
import { AlarmSite } from './Pages/StockSites/AlarmSite'

// Style function for active links
const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#007bff' : '#FFFFFF',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
});
function App() {
    return (
        <Router>
            <nav style={{ marginBottom: '20px' }}>
                <NavLink to="/" style={navLinkStyles}>Home</NavLink> 
                <NavLink to="/Blog" style={navLinkStyles}>Blog</NavLink> 
                <NavLink to="/Resume" style={navLinkStyles}>Resume</NavLink>
                <NavLink to="/Projects" style={navLinkStyles}>Projects</NavLink>
                <NavLink to="/Schedule" style={navLinkStyles}>Schedule</NavLink>
                <NavLink to="/Stock" style={navLinkStyles}>Stock</NavLink>
            </nav>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/Blog" element={<BlogSite />} />
                    <Route path="/Projects" element={<ProjectsSite />} />
                    <Route path="/Resume" element={<ResumeSite />} />
                    <Route path="/Schedule" element={<ScheduleSite />} />

                    <Route path="/Stock" element={<StockSite />}>
                        <Route index element={<Navigate to="Dashboards" replace />} />
                        <Route path="Dashboards" element={<DashboardSite />} />
                        <Route path="Live" element={<LiveSite />} />
                        <Route path="Trends" element={<TrendingSite />} />
                        <Route path="Alarms" element={<AlarmSite />} />
                        <Route path="Reports" element={<ReportSite />} />

                    </Route>
                </Route>
            </Routes>
        </Router>
    )
}

export default App