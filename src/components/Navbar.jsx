<<<<<<< HEAD
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <header className="w-full flex justify-between px-8 py-4 bg-black text-white text-2xl text-bold">
            <h1>Navbar</h1>
            <nav className="flex gap-4">
                <Link to={"/"}>Home</Link>
                <Link to={"/categories"}>Categories</Link>
                <Link>Contact</Link>
            </nav>
        </header>
    )
}

=======
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <header className="w-full flex justify-between px-8 py-4 bg-black text-white text-2xl text-bold">
            <h1>Navbar</h1>
            <nav className="flex gap-4">
                <Link to={"/"}>Home</Link>
                <Link to={"/categories"}>Categories</Link>
                <Link>Contact</Link>
            </nav>
        </header>
    )
}

>>>>>>> 62558210d9af05ccb3e38c24d37686bac5e16a70
export default Navbar