import { Navbar } from "./Components/Navbar"
import { Outlet } from "react-router-dom"
import './App.css'

export function Layout() {
    return (
        <>
            <div class="resume-container" >
                <div className="resume-header" ><Navbar /></div>
                <div><Outlet/></div>
            </div>
        </>
    )
}