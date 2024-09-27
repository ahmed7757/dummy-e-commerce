import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState([]);
    const [url, setUrl] = useState("")

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://dummyjson.com/products/categories');
            const data = await response.json();
            setCategories(data);
        }
        fetchCategories();
    }, []);

    useEffect(() => {
        if (url) {
            const fetchCategory = async () => {
                const response = await fetch(`https://dummyjson.com/products/category/${url}`);
                const data = await response.json();
                setCategory(data.products);
            }
            fetchCategory();
        }
    }, [url]);

    const handleClick = (categoryName) => {
        setUrl(categoryName);
    }

    return (
        <section className="container mx-auto p-6 flex flex-col gap-6 items-center col-span-5">
            <div className="grid grid-cols-6 gap-2">
                {categories.map((category, index) => {
                    return (
                        <div key={index}>
                            <div onClick={() => handleClick(category.name)} className="bg-gray-200 rounded-md p-2 text-center">
                                <h2 className="text-lg font-bold cursor-pointer">{category.name}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
            {
                category.length > 0 && (
                    <div className="grid grid-cols-4 gap-4">
                        {
                            category.map(product => (
                                <div key={product.id} className="flex flex-col max-h-[36rem] p-4 justify-between bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                    <img className="w-40 h-auto self-center rounded-t-xl" src={product.images[0]} alt="Card Image" />
                                    <div className=" flex flex-col justify-between">
                                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                            {product.title}
                                        </h3>
                                        <p className="mt-1 text-gray-500 dark:text-neutral-400">
                                            {product.description}
                                        </p>
                                        <Link to={`/${product.id}`} className="mt-2 w-fit py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}
        </section>
    )
}

export default Categories