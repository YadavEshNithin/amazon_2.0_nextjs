import React from 'react'
import Navbaramazon from '../components/Navbaramazon'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selecttotalItems } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'
import { useSession } from 'next-auth/react'
import Currency from "react-currency-formatter"
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
const stripePromise = loadStripe(process.env.stripe_public_key);


const Checkout = () => {

    const items = useSelector(selectItems)

    const total = useSelector(selecttotalItems)


    const { data: session } = useSession()

    const createCheckoutSession = async () => {

        const stripe = await stripePromise;

        const checkoutSession = await axios.post("/api/create-checkout-sessions",
            {
                items: items,
                email: session.user.email
            },);

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });

        if (result.error) alert(result.error.message)
    }





    return (
        <>
            <div className="bg-gray-100">
                <Navbaramazon />
                <main className="lg:flex max-w-screen-2xl mx-auto">
                    <div className="flex-grow shadow-sm m-5">
                        <Image src="/us_evergreen_gw_dt_hero_1500x300_en.jpg" width={1020} height={250} alt="shopping_logo"
                            className="object-contain"
                        />
                        <div className="flex flex-col p-5 space-y-10 bg-white border-b pb-4">
                            <h1 className="text-3xl">{items.length == 0 ? "Your Amazon Basket is Empty" : "Shopping Basket"}</h1>
                            {items.map((item, i) => (
                                <CheckoutProduct
                                    key={i}
                                    id={item.id}
                                    price={item.price}
                                    description={item.description}
                                    title={item.title}
                                    hasPrime={item.hasPrime}
                                    rating={item.rating}
                                    image={item.image}
                                    category={item.category}
                                    ratingsearch={item.ratingsearch}
                                    hasPrimesearch={item.hasPrimesearch}
                                />
                            ))}
                        </div>

                    </div>
                    <div className="flex flex-col bg-white p-10 shadow-md">
                        {items.length > 0 && (
                            <>
                                <h2 className="whitespace-nowrap">Subtotal ({items.length} items);
                                    <Currency quantity={total} currency='INR' />
                                </h2>

                                <button
                                    role="link"
                                    onClick={createCheckoutSession}
                                    disabled={!session}
                                    className={
                                        ` mt-2 ${!session ?
                                            "bg-gradient-to-b from-gray-300 to-gray-500 cursor-not-allowed p-3" : "button"}`}
                                >

                                    {!session ? "Signin" : "Proceed in Checkout"}

                                </button>
                            </>
                        )}
                    </div>
                </main>

            </div>
        </>
    )
}


export default Checkout
