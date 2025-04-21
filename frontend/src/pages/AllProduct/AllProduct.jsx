import React, { useEffect, useState } from 'react';
import ProductCart from '../../components/productCart/ProductCart';
import { useAppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';

const AllProduct = () => {
    const { products, searchQuery } = useAppContext();
    const [filterProduct, SetFilterProduct] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        let filtered = products;

        if (category) {
            filtered = filtered.filter(product =>
                product.category.toLowerCase() === category.toLowerCase()
            );
        }

        if (searchQuery.length > 0) {
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        SetFilterProduct(filtered);
    }, [products, searchQuery, category]);

    return (
        <div className='mt-16 flex flex-col'>
            <div className='flex flex-col items-end w-max'>
                <p className='text-2xl font-medium uppercase'>All products</p>
                <div className='w-16 h-0.5 bg-primary rounded-full'></div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6'>
                {
                    filterProduct
                        .filter(product => product.inStock)
                        .map((product, index) => (
                            <ProductCart key={index} product={product} />
                        ))
                }
            </div>
        </div>
    );
};

export default AllProduct;
