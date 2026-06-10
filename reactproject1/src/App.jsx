import './App.css'
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


function App() {
    return (
        <Router>
            <nav className="navbar" >
                <NavLink to="/">Home</NavLink> 
                <NavLink to="/Blog">Blog</NavLink> 
                <NavLink to="/Resume">Resume</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Schedule">Schedule</NavLink>
                <NavLink to="/Stock">Stock</NavLink>
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