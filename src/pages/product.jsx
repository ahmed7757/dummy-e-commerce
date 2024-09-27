<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <section className="container mx-auto p-6 flex flex-col gap-6 items-center col-span-5">
            <div className="flex items-center justify-center w-full h-full">
                <div className="flex flex-col w-fit max-h-[36rem] p-6 justify-between bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <img className="w-40 h-auto self-center rounded-t-xl" src={product.images[0]} alt="Card Image" />
                    <div className="flex flex-col justify-between">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                            {product.title}
                        </h3>
                        <p className="mt-1 max-w-80 text-gray-500 dark:text-neutral-400">
                            {product.description}
                        </p>
                        <p className="mt-1 max-w-80 text-gray-100 dark:text-neutral-100">
                            {product.price}$
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

=======
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <section className="container mx-auto p-6 flex flex-col gap-6 items-center col-span-5">
            <div className="flex items-center justify-center w-full h-full">
                <div className="flex flex-col w-fit max-h-[36rem] p-6 justify-between bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <img className="w-40 h-auto self-center rounded-t-xl" src={product.images[0]} alt="Card Image" />
                    <div className="flex flex-col justify-between">
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                            {product.title}
                        </h3>
                        <p className="mt-1 max-w-80 text-gray-500 dark:text-neutral-400">
                            {product.description}
                        </p>
                        <p className="mt-1 max-w-80 text-gray-100 dark:text-neutral-100">
                            {product.price}$
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

>>>>>>> 62558210d9af05ccb3e38c24d37686bac5e16a70
export default Product