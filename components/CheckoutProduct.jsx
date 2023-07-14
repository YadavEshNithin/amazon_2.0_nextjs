import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

const CheckoutProduct = ({ id, title, image, price, category, description, hasPrime, rating, ratingsearch, hasPrimesearch }) => {
 
const dispatch =useDispatch()

const addItemsToBasket = () => {
  const product = {
    id, title, image, price, category, description, hasPrime, rating, ratingsearch, hasPrimesearch
  }
  dispatch(addToBasket(product))
}

  const removeItemBasket = ()=> {
    const product = {
      id, title, image, price, category, description, hasPrime, rating
    }
    dispatch(removeFromBasket({id}))
  }

  return (
    <>
      <div className="grid grid-cols-5 ">
        <Image className=" object-contain" src={image} width={200} height={200} alt="product_image" />
        <div className=" col-span-3 mx-5 ">
          <p>{title}</p>
          <div className="flex">
            {rating ? Array(rating).fill().map((_, i) => (
              <StarIcon className="h-6 text-yellow-500" />
            )) :
            Array(ratingsearch).fill().map((_, i) => (
              <StarIcon className="h-6 text-yellow-500" />
            ))
            }
          </div>
          <p className="text-sm my-2 line-clamp-3">{description}</p>
          <Currency quantity={price} currency='INR'/>
          <div className="flex items-center space-x-2">
            {hasPrime && (
            <>
              <img className="w-12 object-contain" src="pngwing.com (7).png" alt="prime-delivery-logo" />
            <p className="text-sm text-gray-500">Free Next-day Delivery</p>
            </>
            )}
            {hasPrimesearch && (
            <>
              <img className="w-12 object-contain" src="pngwing.com (7).png" alt="prime-delivery-logo" />
            <p className="text-sm text-gray-500">Free Next-day Delivery</p>
            </>
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-2 justify-self-end my-auto">
          <button onClick={addItemsToBasket} className="mt-auto button">Add to Basket</button>
          <button onClick={removeItemBasket} className="mt-auto button">Remove from basket</button>
        </div>
      </div>
    </>
  )
}

export default CheckoutProduct
