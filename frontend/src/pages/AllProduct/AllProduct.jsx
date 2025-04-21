import React, { useEffect, useState } from 'react';
import ProductCart from '../../components/productCart/ProductCart';
import { useAppContext } from '../../context/AppContext';

const AllProduct = () => {
    const { products, searchQuery, setSearchQuery } = useAppContext();
    const [filterProduct, SetFilterProduct] = useState([]);

    useEffect(() => {
        if (searchQuery.length > 0) {
            SetFilterProduct(
                products.filter(product =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            SetFilterProduct(products);
        }
    }, [products, searchQuery]);

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
