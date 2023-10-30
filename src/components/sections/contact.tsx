import React from 'react'
import { FaLinkedin, FaSquareInstagram } from 'react-icons/fa6';
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
function ContactUs() {
  const iconstyle = 'w-16 h-16 rounded-full mr-3 text-gray-100 flex items-center justify-center transition-all hover:bg-gray-800  hover:text-gray-100 cursor-pointer'
  return (
    <div className="absolute   right-0 lg:top-[78vh] top-[68vh] w-[320px] h-[12vh] 0 flex items-center z-10 bg-gray-800 bg-opacity-40 text-[2.2rem]">
      <a href="https://www.linkedin.com/company/musala-soft/" target="_blank" rel="noopener noreferrer">
        <button className={`${iconstyle} ml-3 `}>
          <FaLinkedin />
        </button>
      </a>
      <a href="https://www.facebook.com/MusalaSoft" target="_blank" rel="noopener noreferrer">
        <button className={`${iconstyle} `}>
          < FaFacebookSquare />
        </button>
      </a>
      <a href="https://www.instagram.com/musalasoft/" target="_blank" rel="noopener noreferrer">
        <button className={`${iconstyle}`}>
          < FaSquareInstagram />
        </button>
      </a>
      <a href="https://www.youtube.com/channel/UChQnew7EEFzhHCSevNeTFhA" target="_blank" rel="noopener noreferrer">
        <button className={`${iconstyle}`}>
          <FaYoutube />
        </button>
      </a>

    </div>
  )
}

export default ContactUs