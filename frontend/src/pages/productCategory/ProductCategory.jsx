import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { useParams } from 'react-router';
import { categories } from '../../assets/assets';
import ProductCart from '../../components/productCart/ProductCart';

const ProductCategory = () => {
    const { products } = useAppContext();
    const { category } = useParams();
    const searchCategory = categories.find((item) => item.path.toLocaleLowerCase() === category);

    const filterProducts = products.filter((product) => product.category.toLocaleLowerCase() === category)
    return (
        <div className='mt-16'>
            {/* category name  */}
            {searchCategory && (
                <div className='flex flex-col items-end w-max'>
                    <p className='text-2xl font-medium'>{searchCategory.text.toUpperCase()}</p>
                    <div className='w-16 h-0.5 bg-primary '></div>
                </div>
            )}
            {/* products  */}
            {
                filterProducts.length > 0 ? (
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6'>
                        {
                            filterProducts.map((product, index) => (
                                <ProductCart key={index} product={product} />
                            ))
                        }
                    </div>
                ) : (
                    <div>

                    </div>
                )
            }
        </div>
    )
}

export default ProductCategory
