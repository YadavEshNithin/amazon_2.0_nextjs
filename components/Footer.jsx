import { GlobeAltIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { ChevronUpDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <section>
            <div className="hidden sm:inline-block w-full">
                <button className="w-full bg-[#37475a] p-2 text-white text-sm hover:bg-gray-600 font-semibold" onClick={() => {
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                }}>
                    Back to top
                </button>
                <div className="bg-[#232F3E]">
                    <div className=" text-white flex justify-center space-x-6 md:space-x-14 lg:space-x-28 p-10 ">
                        <div className="head">
                            <p className="item">Get to Know Us</p>
                            <p className="">About Us</p>
                            <p className="hu">Careers</p>
                            <p className="hu">Press Releases</p>
                            <p className="hu">Amazon Science</p>
                        </div>
                        <div className="head">
                            <p className="item">Connect with Us</p>
                            <p className="hu">Twitter</p>
                            <p className="hu">Instagram</p>
                        </div>
                        <div className="head">
                            <p className="item">Make Money with Us</p>
                            <p className="hu">Sell on Amazon</p>
                            <p className="hu">Sell under Amazon Accelerator</p>
                            <p className="hu">Protector and Build Your Brand</p>
                            <p className="hu">Amazon Global Selling</p>
                            <p className="hu">Become an Affliate</p>
                            <p className="hu">Fulfillment by Amazon</p>
                            <p className="hu">Advertise Your Products</p>
                            <p className="hu">Amazon Pay on Merchants</p>
                        </div>
                        <div className="head">
                            <p className="item">Let Us Help You</p>
                            <p className="hu">COVID-19 and Amazon</p>
                            <p className="hu">Your Account</p>
                            <p className="hu">Returns Centre</p>
                            <p className="hu">100% Purchase Protection</p>
                            <p className="hu">Amazon App Download</p>
                            <p className="hu">Help</p>
                        </div>
                    </div>
                    <div className="h-auto p-3 ">
                        <p className="bg-gray-600 p-0.5"></p>
                    </div>
                    <div className="flex items-center justify-center h-20 space-x-28">
                        <p>
                            <Image className=" object-contain" src={"https://links.papareact.com/f90"} width={80} height={40} alt="amazon_logo" />
                        </p>

                        <p className="text-gray-200 text-xs flex items-center justify-center  mb-4 border shadow border-gray-500 rounded py-1 px-2"><GlobeAltIcon className="h-4" /> <span className="ml-2">English</span>
                            <ChevronUpDownIcon className="h-6 ml-4" />
                        </p>
                    </div>
                    <div className="flex items-center justify-center flex-col text-white text-xs space-y-1 mb-10">
                        <p className="space-x-3">
                            <span>Australia</span>
                            <span>Brazil</span>
                            <span>Canada</span>
                            <span>China</span>
                            <span>France</span>
                            <span>Germany</span>
                            <span>Italy</span>
                            <span>Japan</span>
                            
                            <span className=" md:inline-block">Mexico</span>
                            <span className="hidden md:inline-block">Netherlands</span>
                            <span className=" md:inline-block">Poland</span>
                            <span className=" lg:inline-block">Singapore</span>
                            <span className=" lg:inline-block">Spain</span>
                            <span className="hidden  lg:inline-block">Turkey</span>
                            <span className="hidden lg:inline-block">United Arab Emirates</span>
                        </p>
                        <p className="space-x-3">
                        
                            <span className="inline-block lg:hidden">Turkey</span>
                            <span className="inline-block lg:hidden">United Arab Emirates</span>
                            <span>United Kingdom</span>
                            <span>United States</span>
                        </p>
                    </div>
                    <div className="bg-[#0d141e] h-auto flex flex-col items-center justify-center p-3.5 lg:p-10">
                        <div className="flex space-x-3 md:space-x-10  lg:space-x-20 xl:space-x-28 ">
                            <div className="space-y-6">
                                <div className="text-xs text-gray-200">
                                    <span className="font-medium">AbeBooks</span>
                                    <div className="text-gray-400 -mt-1">
                                        <p className="">Books, art</p>
                                        <p className="-mt-1">& collectibles</p>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-200">
                                    <span className="font-medium">Shopbop</span>
                                    <div className="text-gray-400 -mt-1">
                                        <p className="">Designer</p>
                                        <p className="-mt-1">Fashion Brands</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="text-xs text-gray-200">
                                    <span className="font-medium">Amazon Web Services</span>
                                    <div className="text-gray-400 -mt-1">
                                        <p className="">Scalable Cloud</p>
                                        <p className="-mt-1">Computing Services</p>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-200">
                                    <span className="font-medium">Amazon Web Services</span>
                                    <div className="text-gray-400 -mt-1">
                                        <p className="">Everything for</p>
                                        <p className="-mt-1">Your Business</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="text-xs text-gray-200">
                                    <span className="font-medium">Audible</span>
                                    <div className="text-gray-400 -mt-1">
                                        <p className="">Downlaods</p>
                                        <p className="-mt-1">Audio Books</p>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-200">
                                    <span className="font-medium">Prime Now</span>
                                    <div className="text-gray-400 -mt-1">
                                        <p className="">2-Hour Delivery</p>
                                        <p className="-mt-1">on Everyday Items</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="text-xs text-gray-200">
                                    <span className="font-medium">DPReview</span>
                                    <div className="text-gray-400 -mt-1">
                                        <p className="">Digital</p>
                                        <p className="-mt-1">Photography</p>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-200">
                                    <span className="font-medium">Amazon Prime Music</span>
                                    <div className="text-gray-400 -mt-1">
                                        <p className="">100 millions songs, ad-free</p>
                                        <p className="-mt-1">Over 15 millions podcast episodes</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-200  lg:pl-20">
                                <span className="font-medium">IMDB</span>
                                <div className="text-gray-400 -mt-1">
                                    <p className="">Movies, TV</p>
                                    <p className="-mt-1">& Celebrities</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-100 text-center text-xs mt-16">
                            <p className="space-x-6 pt-3 pb-5">
                                <span>Conditons of Use</span>
                                <span>Privacy Notice</span>
                                <span>Interest-Based Ads</span>
                            </p>
                            <p className=""> 1996-2023, Amazon.com,Inc. and its affiliates</p>
                        </div>

                    </div>

                </div>
            </div>
            <div className="inline-block sm:hidden w-full">
                <button className="w-full bg-[#37475a] p-3 text-white text-xs hover:bg-gray-600 font-semibold" onClick={() => {
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                }}>
                    <ChevronUpIcon className="h-4 text-center mx-auto mb-1" />
                    <span>TOP OF PAGE</span>
                </button>
                <div className="flex justify-between pr-10  space-x-16 p-5 bg-[#232F3E] text-white">

                    <div className="space-y-4">
                        <p>Amazon.in</p>
                        <p>Your Orders</p>
                        <p>Amazon App Download</p>
                        <p>Find a Wish List</p>
                        <p className="">Your Recently Viewed Items</p>
                        <p>Sell</p>
                    </div>
                    <div className="space-y-4 ">
                        <p>Your Amazon.in</p>
                        <p>Amazon Pay</p>
                        <p>Wish List</p>
                        <p>Your Account</p>
                        <p>Returns</p>
                        <p>Customer Service</p>
                    </div>

                </div>
                <div className="bg-[#0d141e] h-auto text-xs text-gray-300 text-center">
                    <p className="text-white space-x-3 flex items-center justify-center h-24 -ml-4  "><GlobeAltIcon className="h-4" /> <span className="">English</span></p>
                    <p className="p-3 text-white text-base">Already a Customer?Sign in</p>
                    <p className="space-x-6 p-3">
                        <span>Conditons of Use</span>
                        <span>Privacy Notice</span>
                        <span>Interest-Based Ads</span>
                    </p>
                    <p className="pb-10"> 1996-2023, Amazon.com,Inc. and its affiliates</p>
                </div>
            </div>
        </section>
    )
}

export default Footer
