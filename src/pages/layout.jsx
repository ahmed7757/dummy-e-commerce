import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-6">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout