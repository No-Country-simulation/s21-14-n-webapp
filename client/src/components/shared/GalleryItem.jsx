import React from 'react'

const GalleryItem = ( { imageSrc, imgAlt, width, height }) => {
  return (
    <div className="w-5/6 mx-auto bg-primary">
      {/* Height will deafult to 52, if empty. */}
      <figure className={`${width} ${height} mx-auto cursor-pointer h-96 overflow-hidden relative group `}>
        <img
          src={imageSrc}
          alt={`${imgAlt}`}
          className="w-full h-full scale-[1.07] brightness-95 object-cover rounded-xs transition-all duration-500 hover:-translate-y-2"
        />
        <div className="absolute inset-0 bg-white/0  group-hover:bg-white/30 transition-all duration-500 pointer-events-none" />
      </figure>
    </div>
  )
}

export default GalleryItem;