import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Caraousel = ({ autoSlide = false, autoSlideInterval = 3000 }) => {
    const images = ["https://links.papareact.com/gi1",
        "https://links.papareact.com/6ff",
        "https://links.papareact.com/7ma"]

    const [index, setIndex] = useState(0);



    useEffect(() => {

        const timer = setInterval(() => {
            setIndex((previndex) => (previndex + 1) % 3)
        }, 5000);
        return () => clearInterval(timer)
    }, [])


    const handleArrow = (arrow) => {
        if (arrow == "l") {
            setIndex(index == 0 ? 2 : index - 1)
        }
        if (arrow == "r") {
            setIndex(index == 2 ? 0 : index + 1)
        }

    }
    console.log(index)


    const [isClient, setClient] = useState(false)

    useEffect(() => {
        setClient(true)
    }, [])



    return (
        <div className="overflow-hidden relative mx-auto ">

            {/* <div className="flex transition-transform duration-500 ease-out" style={{transform: `translateX(-${index * 100}%)`}}>
            {images.map((image) => (
                <img className="" src={image} alt="" />
            ))}
            </div>

            <div className="absolute flex items-center inset-0 justify-between "
            >
                <button onClick={()=>handleArrow("l")} className=" p-1 shadow rounded-full bg-slate-200">
                    <ChevronLeftIcon className="h-20"/>
                </button>
                <button onClick={()=>handleArrow("r")} className="p-1 shadow rounded-full bg-slate-200">
                    <ChevronRightIcon className="h-20"/>
                </button>
            </div> */}

           {isClient &&
           <>
            <div className="">
                <button className="absolute left-0 top-[50%] bg-white/60 hover:bg-white cursor-pointer rounded-full z-10" onClick={() => handleArrow("l")} ><ArrowLeftIcon className="h-5 md:h-10" /></button>
            </div>
            <div className="">
                <button className="absolute right-0 top-[50%] bg-white/60 hover:bg-white cursor-pointer rounded-full z-30" onClick={() => handleArrow("r")}><ArrowRightIcon className="h-5 md:h-10" /></button>
            </div>
           </>
           }

            <div className="flex transition-transform duration-[1s] z-1"
                style={{ transform: `translateX(-${index * 100}%)` }} autoSlide={true}>
                {images.map((image, i) => (
                    <img key={i} src={image} alt="" />
                ))}
            </div>







        </div>
    )
}

export default Caraousel
