<<<<<<< HEAD
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

=======
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

>>>>>>> 62558210d9af05ccb3e38c24d37686bac5e16a70
export default Layout