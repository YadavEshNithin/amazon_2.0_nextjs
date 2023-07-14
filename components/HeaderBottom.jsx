import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import SideNavContent from './SideNavContent';
import { Bars3Icon, UserCircleIcon, UserIcon } from '@heroicons/react/24/solid';
import {  XCircleIcon } from '@heroicons/react/24/outline';
import BottomHeader from './BottomHeader';


const HeaderBottom = () => {
    const ref=useRef();
    const [sidebar,setSidebar]= useState(false)
    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
         if(e.target.contains(ref.current)){
            setSidebar(false)
         }
        })
    },[ref,sidebar])
  return (
    <div className=" w-full px-4  bg-amazon_light text-red-500 flex items-center ">
      {/* ============ ListItems Start here ============ */}
      
      <div>
        <BottomHeader sidebar={sidebar} setSidebar={setSidebar}/>
      </div>
      {/* ============ ListItems End here ============== */}
      {/* ============ sideNav Start here ============== */}
      {sidebar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}} className="w-[350px] h-full bg-white border border-black">
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                <UserCircleIcon className="h-6" />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
            <span onClick={()=>setSidebar(false)} className="cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
              <XCircleIcon />
            </span>
            </motion.div>
          </div>
        </div>
      )}
      {/* ============ sideNav End here ================ */}
    </div>
  );
}

export default HeaderBottom