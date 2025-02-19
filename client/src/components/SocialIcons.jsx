import React from 'react'

const SocialIcons = ({ icons }) => {
  return (
    <ul className="flex gap-4 my-4">
      {icons.map((icon, index) => (
        <li key={index} className="cursor-pointer hover:opacity-80 transition-opacity">
            <a href={icon.link} target="_blank" rel="noopener noreferrer">
              {icon.svg}
            </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialIcons