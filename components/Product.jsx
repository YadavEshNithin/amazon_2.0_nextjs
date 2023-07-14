import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from "../slices/basketSlice"
import Link from 'next/link';

const Product = ({ id, title, image, description, price, category }) => {

    const Max_RATING = 5;
    const MIN_RATING = 1;

    const [rating] = useState(
        Math.floor(Math.random() * (Max_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5);

    const [isClient, setClient] = useState(false)

    useEffect(() => {
        setClient(true)
    }, [])

    const dispatch = useDispatch()

    const addItemsToBasket = () => {
        const product = {
            id, title, image, description, price, category, hasPrime, rating
        }

        dispatch(addToBasket(product))
    }

    return (
        <>
            <div className="relative bg-white rounded-sm flex flex-col m-5 p-10 z-30">
                <p className="absolute top-2 text-sm right-2 italic text-gray-400">{category}</p>
                <Link className="m-auto" href={{ pathname: `/${id}`, query: { id: id, title: title, image: image, description: description, price: price, category: category, hasPrime: hasPrime, rating: rating } }}>
                    <Image className="object-contain m-auto scale-95 hover:scale-100 transition-all duration-300 ease-in-out" src={image} width={200} height={200} alt="product_image" />
                </Link>
                <p className="my-3">{title}</p>
                <div className="flex">
                    {isClient && Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-6 text-yellow-500" />
                    ))}
                </div>
                <p className="line-clamp-2 text-xs my-2">{description}</p>
                <div className="mb-5">
                    <Currency
                        quantity={price}
                        currency="INR"
                    />
                </div>
                {
                    isClient && (
                        <>
                            {hasPrime &&
                                <div className="flex items-center space-x-2 -mt-5 mb-1">
                                    <Image src="/pngwing.com (7).png" width={44} height={100} alt="amazon_logo"
                                        className="object-contain" />
                                    <span className="text-xs text-gray-500">Free Next-Day Delivery</span>
                                </div>
                            }
                        </>
                    )
                }
                {isClient && <button onClick={addItemsToBasket} className="mt-auto button">Add to Basket</button>}
            </div>
        </>
    )
}

export default Product
