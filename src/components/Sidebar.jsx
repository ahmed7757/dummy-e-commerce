import { Link } from "react-router-dom"
const Sidebar = () => {
    return (
        <aside className="p-6 flex flex-col bg-neutral-900 col-span-1 text-xl font-bold text-white gap-2">
            <Link to={"/"}>All Products</Link>
            <Link to={"/categories"}>Categories</Link>
        </aside>
    )
}
export default Sidebar