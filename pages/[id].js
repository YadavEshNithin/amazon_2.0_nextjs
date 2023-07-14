import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'
import { StarIcon } from '@heroicons/react/24/solid'
import Navbaramazon from '../components/Navbaramazon'
import Footer from '../components/Footer'
import {BeatLoader} from "react-spinners"

const DynamicPage = () => {
  const router = useRouter()
  const [product, setProduct] = useState({})
  const [Loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    setProduct(router.query)
  }, [router.query])

  const Max_RATING = 5
  const MIN_RATING = 1
  const ratingsearch =
    Math.floor(Math.random() * (Max_RATING - MIN_RATING + 1)) + MIN_RATING

  const [hasPrimesearch] = useState(Math.random() < 0.5);
  console.log(hasPrimesearch)
  console.log("hasPrimesearch")



  return (
    <div className="bg-gray-200 ">
      <Navbaramazon />
      <div className="max-w-screen-xl mx-auto px-4 py-4 md:py-10 ">
        {
          Loading ?

            <>
              <div className="w-full flex flex-col items-center justify-center py-20 gap-6">
                <p className="text-center max-h-screen">
                  Your product is loading...
                </p>
                <BeatLoader color="#131921" size={40}/>

              </div>
            </> :
            <>
              <div className="relative w-full grid md:grid-cols-3 gap-3 rounded-xl border shadow border-gray-200 bg-gray-100 p-2">
                <div className="flex items-center justify-center">
                  {typeof window !== 'undefined' && (
                    <img
                      src={product.image}
                      width={300}
                      height={300}
                      alt="product_image"
                    />
                  )}
                </div>
                <div className="md:col-span-2 flex flex-col gap-3 justify-center p-4">
                  <p className="absolute right-3 top-3 text-xs md:text-sm text-gray-400 italic tracking-wide -mb-3">
                    {product.category}
                  </p>
                  <div className="flex">
                    {product.rating ? (
                      Array(parseInt(product.rating)).fill().map((_, i) => (
                        <StarIcon key={i} className="h-6 text-yellow-500" />
                      ))
                    ) : (
                      Array(ratingsearch).fill().map((_, i) => (
                        <StarIcon key={i} className="h-6 text-yellow-500" />
                      ))
                    )}
                  </div>
                  <h1 className="text-xl md:text-3xl tracking-wide font-semibold">
                    {product.title}
                  </h1>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <div>
                    <p className="text-lg font-semibold text-[#131921] flex items-center gap-1">
                      <Currency quantity={parseInt(product.price)} currency="INR" />
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {product.hasPrime === "true" ?
                      <>
                        <img
                          className="w-12 object-contain"
                          src="pngwing.com (7).png"
                          alt="prime-delivery-logo"
                        />
                        <p className="text-sm text-gray-500">Free Next-day Delivery</p>
                      </>
                      : hasPrimesearch ? <>
                        <img
                          className="w-12 object-contain"
                          src="pngwing.com (7).png"
                          alt="prime-delivery-logo"
                        />
                        <p className="text-sm text-gray-500">Free Next-day Delivery</p>
                      </> : ""}
                  </div>
                  <button
                    onClick={() =>
                      dispatch(addToBasket({ ...product, rating: Number(product.rating), price:parseInt(product.price), ratingsearch:parseInt(ratingsearch), hasPrimesearch:hasPrimesearch }))
                    }
                    className="button_dynamic"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </>
        }
      </div>
      <Footer />
    </div>
  )
}

export default DynamicPage