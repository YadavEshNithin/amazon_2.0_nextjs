import React from 'react'
import Product from './Product'

const ProductFeed = ({ products }) => {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2
     lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
            {products.slice(0, 4).map(({ id, title, image, description, price, category }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    image={image}
                    description={description}
                    price={price}
                    category={category}
                />
            ))}
            <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />
            <div className="md:col-span-2">
            {products.slice(4, 5).map(({ id, title, image, description, price, category }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    image={image}
                    description={description}
                    price={price}
                    category={category}
                />
            ))}
            </div>
            {products.slice(5, products.length).map(({ id, title, image, description, price, category }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    image={image}
                    description={description}
                    price={price}
                    category={category}
                />
            ))}
        </div>
    )
}

export default ProductFeed































