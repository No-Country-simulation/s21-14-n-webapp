import React from 'react'

const GalleryItem = ( { imageSrc, imgAlt, width, height }) => {
  return (
    <div className="w-5/6 bg-red-500 mx-auto">
      {/* Height will deafult to 52, if empty. */}
      <figure className={`${width} ${height} mx-auto h-52 cursor-pointer overflow-hidden relative group `}>
        <img
          src={imageSrc}
          alt={`${imgAlt}`}
          className="w-full h-full scale-125 brightness-95 object-fit rounded-xs transition-all duration-500 hover:-translate-y-5"
        />
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/30 transition-all duration-500 pointer-events-none" />
      </figure>
    </div>
  )
}

export default GalleryItem;