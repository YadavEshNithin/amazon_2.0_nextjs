
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import React from 'react'

const Success = () => {
    const router = useRouter()
    return (
        <div className="bg-gray-200 h-screen">
            <main className="max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex items-center mb-5">
                        <CheckCircleIcon className="h-10 text-green-500" />
                        <span>
                            Thank You, your order has been confirmed !
                        </span>
                    </div>
                    <p>
                        Thank you for shopping with us, We'll send a confirmation once your item has shipped, if you would like to check the status of your order(s) please press the link below
                    </p>
                    <button onClick={()=>router.push("/orders")} className="button mt-8">
                        Go to my orders
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Success
