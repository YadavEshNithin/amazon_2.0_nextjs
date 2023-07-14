import { Bars3Icon, CircleStackIcon, HomeIcon, UserIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'


const Sidenav = ({ open, setOpen, }) => {


    const router = useRouter()



    const { data: session } = useSession()


    return (
        <div className="">
            <div onClick={() => setOpen(!open)}>
                {open ? <div className="relative flex justify-end -mr-12 -mt-2 cursor-pointer">
                    <XCircleIcon className="h-8 absolute bg-white w-10 rounded-md hover:bg-red-500 hover:text-white duration-300" /> </div> :
                    <Bars3Icon className="h-6 w-6 ml-2 mt-2 cursor-pointer" />
                }
            </div>
            {
                open &&
                <>
                    <div className={`${!open && "opacity-0"} transition-all ease-linear `}>
                        <div className="bg-gray-900 h-40 text-white">
                            <p onClick={session ? signOut : signIn} className=" text-end text-sm h-16 font-semibold p-4  flex items-center justify-end   space-x-2 cursor-pointer "><span className="">{session ? `Hello ${session.user.name}` : "Hello, Sign in"} </span> <UserIcon className="h-6 " /></p>
                            <p className="font-semibold text-xl ml-4">Browse </p>
                            <p className="font-medium text-3xl ml-4">Amazon </p>
                        </div>
                        <div className="bg-gray-200 flex items-center text-lg justify-between py-3 font-bold border-4 border-b-gray-400/60 ">
                            <p className="ml-4 text-xl">Amazon Home</p>
                            <p onClick={() => router.push("/")}><HomeIcon className="h-6 cursor-pointer" /></p>
                        </div>
                        <p className="py-2 ml-3 font-semibold text-xl">Top Categories for you</p>
                        <div onClick={() => setOpen(!open)} className=" space-y-2 mt-2 mb-1 ">
                            <p className="hover:font-semibold p-1 pl-6 hover:bg-gray-300/60 rounded-md cursor-pointer">All Categories</p>
                            <p className="hover:font-semibold p-1 pl-6 hover:bg-gray-300/60 rounded-md cursor-pointer" >{`Men's Clothing`}</p>
                            <p className="hover:font-semibold p-1 pl-6 hover:bg-gray-300/60 rounded-md cursor-pointer">{`Women's Clothing`}</p>
                            <p className="hover:font-semibold p-1 pl-6 hover:bg-gray-300/60 rounded-md cursor-pointer">Electronics</p>
                            <p className="hover:font-semibold p-1 pl-6 hover:bg-gray-300/60 rounded-md cursor-pointer">Jewelery</p>
                        </div>
                        <p className="h-1 bg-gray-400/60"></p>
                        <p className='py-2 font-semibold ml-3 text-xl'>Programs and Feauters</p>
                        <div className=" space-y-2 mt-2">
                            <p className="hover:font-semibold pl-6 p-1 hover:bg-gray-300/60  rounded-md cursor-pointer">{`Today's Deals`}</p>
                            <p className="hover:font-semibold pl-6 p-1 hover:bg-gray-300/60  rounded-md cursor-pointer">Amazon Pay</p>
                            <p className="hover:font-semibold pl-6 p-1 hover:bg-gray-300/60  rounded-md cursor-pointer">Amazon Launchpad</p>
                            <p className="hover:font-semibold pl-6 p-1 hover:bg-gray-300/60  rounded-md cursor-pointer">Try Prime</p>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Sidenav
