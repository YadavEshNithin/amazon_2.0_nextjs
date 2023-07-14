import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

const BottomHeader = ({sidebar, setSidebar}) => {
    return (
        <div>
            <div className="flex  items-center  bg-[#232f3d] text-white">
                <p onClick={()=>setSidebar(true)}  className="flex items-center bottom_header sm:ml-4  space-x-1"><Bars3Icon className="h-6" />All</p>
                <p className="bottom_header">Amazon miniTV</p>
                <p className="bottom_header">Sell</p>
                <p className="bottom_header">Best Sellers</p>
                <p className="bottom_header">Today's Deals</p>
                <p className="bottom_header">Mobiles</p>
                <p className="bottom_header hidden sm:inline-block">New Releases</p>
                <p className="bottom_header hidden lg:inline-block">Customer Service</p>
                <p className="bottom_header hidden lg:inline-block">Prime</p>
                <p className="bottom_header hidden xl:inline-block">Electronics</p>
                <p className="bottom_header hidden xl:inline-block">Home & Kitchen</p>
                <p className="bottom_header hidden xl:inline-block">Gift Ideas</p>
            </div>
            
        </div>
    )
}

export default BottomHeader
