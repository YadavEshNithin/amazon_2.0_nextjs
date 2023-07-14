import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbaramazon from '../components/Navbaramazon';

const ShopCategory = () => {
  const router = useRouter();

  const handleCategorySelect = (category) => {
    router.push("/");
  };

  return (
    <section className="overflow-hidden">
      <Navbaramazon />
      <div className="font-semibold flex items-center justify-center h-16  text-2xl">
        <p>Shop by Category</p>
      </div>
      <div className="grid grid-cols-2 mx-auto max-w-screen-lg gap-6 bg-gray-100 mt-3">
        <div
          className="w-[180px] bg-gray-300 h-[200px]  rounded-2xl relative mx-auto"
        >
          <Image className="object-contain mx-auto" src={"/pngwing.com (10).png"} width={100} height={100} alt="category_logo" />
          <div className="absolute bottom-2 text-center w-full">
            <p onClick={()=>router.push("/")} className="bg-gray-100 font-semibold rounded-sm mx-3 py-1 border shadow border-gray-300 cursor-pointer">
              {`Men's fashion`}
            </p>
          </div>
        </div>
        <div
          className="w-[180px] bg-gray-300 h-[200px] rounded-2xl relative mx-auto"
        >
          <Image className=" object-contain mx-auto" src={"/pngwing.com (11).png"} width={144} height={100} alt="category_logo" />
          <div className="absolute bottom-2 text-center w-full">
            <p onClick={()=>router.push("/")} className="bg-gray-100 font-semibold rounded-sm mx-3 py-1 border shadow border-gray-300 cursor-pointer">
             {` Women's fashion`}
            </p>
          </div>
        </div>
        <div
          className="w-[180px] bg-gray-300 h-[200px] rounded-2xl relative mx-auto flex items-center justify-center"
        >
          <Image className="object-contain mx-auto" src={"/pngwing.com (12).png"} width={160} height={100} alt="category_logo" />
          <div className="absolute bottom-2 text-center w-full">
            <p onClick={()=>router.push("/")} className="bg-gray-100 font-semibold rounded-sm mx-3 py-1 border shadow border-gray-300 cursor-pointer">
              {`Electronics`}
            </p>
          </div>
        </div>
        <div
          className="w-[180px] bg-gray-300 h-[200px] flex items-center justify-center rounded-2xl relative mx-auto"
     
        >
          <Image className="object-contain mx-auto" src={"/pngwing.com (13).png"} width={160} height={100} alt="category_logo" />
          <div className="absolute bottom-2 text-center w-full">
            <p onClick={()=>router.push("/")} className="bg-gray-100 font-semibold rounded-sm mx-3 py-1 border shadow border-gray-300 cursor-pointer">
              Jewelry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCategory;
