import Image from 'next/image'
import React from 'react'

const Searchlist = ({ item }) => {
  return (
    <div className="flex w-full items-center relative ">
      <Image className="object-cover" width={80} height={80} src={item.image} alt="item_image" />
      <div className="ml-3">
        <p className="text-xs -mb-1 absolute top-2 right-2 text-gray-400 italic">{item.category}</p>
        <p className="text-lg font-medium">{item.title}</p>
        <p className="text-xs line-clamp-1">{item.description}</p>
      </div>
    </div>
  )
}

export default Searchlist
