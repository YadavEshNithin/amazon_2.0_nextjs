import React, { useState } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, MapIcon, MapPinIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import Sidenav from './Sidenav'
import AddressDialog from './AddressDialog'
import { useEffect } from 'react'
import Searchlist from './Searchlist'
import HeaderBottom from './HeaderBottom'

const Navbaramazon = () => {

  const { data: session } = useSession()
  const router = useRouter()

  const items = useSelector(selectItems);

  const [open, setOpen] = useState(false)

  const [data, setData] = useState([])

  const { allProducts } = useSelector((state) => (state.basket))


  useEffect(() => {
    setData(allProducts.allProducts)
  }, [allProducts])

  // console.log(allProducts)
  // console.log(data)

  const [searchquery, setSearchquery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])


  const handlesearchChange = (e) => {
    setSearchquery(e.target.value)
  }

  useEffect(() => {
    const filtered = data.filter((item) => (
      item.title.toLowerCase().includes(searchquery.toLowerCase())
    ))
    
    setFilteredProducts(filtered)
  }, [searchquery])

 

  // console.log(filteredProducts)


  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddressClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);

  }


  return (
    <>
      <header className="sticky top-0 z-40">
        <div className="bg-gray-900 h-20 hidden sm:flex items-center py-2 flex-grow p-1">
          <div className="mt-2 p-2 flex flex-grow sm:flex-grow-0 whitespace-normal">
            <Image onClick={() => router.push("/")} src={"https://links.papareact.com/f90"} width={150} height={40} alt="amazon_logo" className="object-contain h-10 cursor-pointer -ml-2 lg:ml-0" />
          </div>
          <div className="text-white text-sm mr-3 -ml-4 cursor-pointer hover:border hidden lg:inline-block">
            <div>
              <button onClick={handleAddressClick}>
                <span className="ml-6 font-normal text-gray-300 text-xs  text-start flex items-start">Hello,</span>
                <p className="flex items-center font-bold  text-sm  -mt-2 tracking-tight"><MapPinIcon className="h-6 text-gray-100" /><span className="mt-1">Select your address</span></p>
              </button>
            </div>

            {/* Address Dialog */}
            <AddressDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
          </div>
          <div className="hidden sm:flex items-center bg-yellow-500 flex-grow rounded-lg -ml-6 lg:ml-0 relative">
            <select
              className="p-2 w-14 md:w-20 rounded-l-lg bg-gray-300"
             
            >
              <option>All</option>
              <option>{`Men's Clothing`}</option>
              <option>{`Women's Clothing`}</option>
              <option>Electronics</option>
              <option>Jewelery</option>
            </select>
            <input
            value={searchquery}
            onChange={handlesearchChange}
              placeholder="Search products..."
              className="w-6 p-2 flex-grow flex-shrink focus:outline-none px-4"
              type="text"
            />
            <MagnifyingGlassIcon width={50} height={20} />
            {
            searchquery &&

             <div className="absolute mx-auto max-h-96 top-12 left-0
              overflow-y-scroll w-full rounded-lg bg-gray-100 space-y-6 p-2 border shadow border-gray-300">
              {
                 filteredProducts.length > 0 ?
                 <>
                      { searchquery && 
                       filteredProducts.map((item)=>(
                        <Link
                        key={item.id}
                        onClick={()=>setSearchquery("")}
                        className="w-full border-b-[1px] border-b-gray-400 flex items-center p-3   gap-4 
                         "
                         href={{pathname:`/${item.id}`, query:{
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          description: item.description,
                          price: item.price,
                          category: item.category,
                        }
                      
                        }}>

                        <Searchlist item={item}/>
                        </Link>
                       ))
                      }
                 </>
                 :
                 <div className="flex items-center justify-center py-5 rounded-lg shadow-lg h-96"><p className="text-xl font-semibold animate-bounce">Nothing is matches with your search keywords. Please try again</p></div>
              }
             </div>

          }
          </div>
          <div className="flex items-center space-x-3 mx-3 lg:space-x-6 md:mx-6 text-white text-xs whitespace-nowrap">
            <div onClick={!session ? signIn : signOut} className="hover:underline cursor-pointer">
              <p>{session ? `Hello, ${session.user.name}` : "Signin"}</p>
              <p className="font-extrabold md:text-sm ">Accounts & lists</p>
            </div>
            <div onClick={() => router.push("/orders")} className="hover:underline cursor-pointer">
              <p>Returns</p>
              <p className="font-extrabold md:text-sm ">&Orders</p>
            </div>
            <div onClick={() => router.push("/checkout")} className=" relative flex items-center hover:underline cursor-pointer">
              <span className="absolute top-0 right-0 md:right-10 bg-yellow-500 text-black rounded-full text-center h-4 w-4">
                {items.length}
              </span>
             
              <ShoppingCartIcon className="h-10" />
              <p className=" font-extrabold md:text-sm hidden md:inline  mt-2">Basket</p>
            </div>
          </div>
        </div>

       

        {
          open &&
          <>
            <div className="flex sm:hidden absolute bg-black/40 min-h-screen w-full z-40">
            </div>
          </>
        }

        <div className="">
          <div className="flex-col sm:hidden  bg-gray-900">
            <div className=" flex items-center justify-between text-white p-3 space-x-2">
              <div onClick={() => router.push("/")} className="mt-2 flex">
                <div className={`mt-3 z-40 absolute bg-gray-200 top-0 left-0 min-h-screen  ${open ? "w-72 text-black" : "w-0"} transition-all duration-500 ease-in-out `}>
                  <Sidenav open={open} setOpen={setOpen}  />
                </div>
                

                <Image src={"https://links.papareact.com/f90"} width={180} height={40} alt="amazon_logo" className="object-contain h-10 cursor-pointer ml-6 w-16" />
              </div>
              <div className="flex items-center relative text-xs space-x-3 mx-3 whitespace-nowrap">
                <div onClick={!session ? signIn : signOut} className="hover:underline cursor-pointer">
                  <p>{session ? `Hello, ${session.user.name}` : "Signin"}</p>
                  <p className="font-extrabold md:text-sm ">Accounts & lists</p>
                </div>
                <div className="hover:underline cursor-pointer" onClick={() => router.push("/orders")}>
                  <p>Returns</p>
                  <p className="font-bold"> & Orders</p>
                </div>
                <ShoppingCartIcon onClick={() => router.push("/checkout")} className="h-10 hover:underline cursor-pointer" />
                <span className="absolute right-0 top-0 bg-yellow-500 h-4 w-4 rounded-full text-center text-xs text-black">{items.length}</span>
              </div>
            </div>
            <div className="  flex  flex-grow px-3 relative">
              <input value={searchquery} onChange={handlesearchChange}  className="w-6 h-12 rounded-l-lg flex-grow focus:outline-none flex-shrink px-4" type="text" placeholder="   Search Amazon" />
              <MagnifyingGlassIcon className="h-12 p-4 bg-yellow-500 rounded-r-lg" />
              {
            searchquery &&

             <div className="absolute mx-auto max-h-96 top-14 left-0
              overflow-y-scroll w-full rounded-lg bg-gray-100 space-y-6 p-2 border shadow border-gray-300">
              {
                 filteredProducts.length > 0 ?
                 <>
                      { searchquery && 
                       filteredProducts.map((item)=>(
                        <Link
                        key={item.id}
                        onClick={()=>setSearchquery("")}
                        className="w-full border-b-[1px] border-b-gray-400 flex items-center p-3   gap-4 
                         "
                         href={{pathname:`/${item.id}`, query:{
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          description: item.description,
                          price: item.price,
                          category: item.category,
                          hasPrime: item.hasPrime ,
                          rating: item.rating,
                        }
                      
                        }}>

                        <Searchlist item={item}/>
                        </Link>
                       ))
                      }
                 </>
                 :
                 <div className="flex items-center justify-center py-5 rounded-lg shadow-lg h-96"><p className="text-xl font-semibold animate-bounce">Nothing is matches with your search keywords. Please try again</p></div>
              }
             </div>

          }
            </div>
            <div className="text-white items-end space-x-4 bg-gray-900 px-3 mb-4 flex h-10">
              <div onClick={() => router.push("/shopbycategory")} className=" flex-col cursor-pointer
                hover:underline">
                <p className="text-xs -mb-2">Shop by</p>
                <p className="font-semibold">Category</p>
              </div>
              <p className="font-semibold hover:underline">Wishlist</p>
              <p className="font-semibold hover:underline">Deals</p>
              <p className="font-semibold hover:underline">Sell</p>
            </div>
            <button onClick={handleAddressClick} className="text-white px-3 py-2 bg-gray-600 flex items-center w-full">
              <MapPinIcon className="h-6" />
              <p className="text-sm ">
                Select a location to see product availability
              </p>
            </button>
          </div>
        </div>
        <div className="hidden sm:inline-block w-full z-40">
        <HeaderBottom/>
        </div>

      </header>

    </>
  )
}

export default Navbaramazon



