import React from 'react'
import { FaLinkedin, FaSquareInstagram } from 'react-icons/fa6';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
function ContactUs() {
  const iconstyle = 'w-16 h-16 mr-3 text-gray-100 flex items-center justify-center transition-all hover:text-gray-800 cursor-pointer'
  return (
    <div className="absolute   right-0 lg:top-[78vh] top-[68vh] w-[320px] h-[12vh] 0 flex items-center z-10 bg-gray-800 bg-opacity-40 text-[2.2rem]">
      <span className={`${iconstyle} ml-3 `}>
        <FaLinkedin />
      </span>
      <span className={`${iconstyle} `}>
        < FaFacebookSquare />
      </span>
      <span className={`${iconstyle}`}>
        < FaSquareInstagram />
      </span>
      <span className={`${iconstyle}`}>
        <FaYoutube />
      </span>
    </div>
  )
}

export default ContactUs