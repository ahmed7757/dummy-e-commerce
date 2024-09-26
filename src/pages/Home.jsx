import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [url, setUrl] = useState("https://dummyjson.com/products");

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data.products);
        }
        fetchProducts();
    }, [url]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm) {
            setUrl(`https://dummyjson.com/products/search?q=${searchTerm}`);
        } else {
            setUrl("https://dummyjson.com/products");
        }
    }

    return (
        <section className="container mx-auto p-6 flex flex-col gap-6 items-center col-span-5">
            <form onSubmit={handleSearch} className="flex gap-2 justify-center w-full">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="px-4 w-1/2 py-2 border border-gray-300 rounded-md"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                >
                    Search
                </button>
            </form>

            <div className="grid grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="flex flex-col max-h-[36rem] p-4 justify-between bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <img className="w-40 h-auto self-center rounded-t-xl" src={product.images[0]} alt="Card Image" />
                        <div className=" flex flex-col justify-between">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                {product.title}
                            </h3>
                            <p className="mt-1 text-gray-500 dark:text-neutral-400">
                                {product.description}
                            </p>
                            <Link to={`/${product.id}`} className="mt-2 w-fit py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Home;