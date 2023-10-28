import React from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { FaFax } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
function SofiaCard() {
  return (
    <article className='min-h-[60vh] flex flex-col text-gray-100'>
          <h3 className='text-[2.5rem] font-bold w-full text-center'>
            Sofia
          </h3>
          <div className='w-full flex flex-col mt-3 p-3'>
            <div className='flex items-start'>
              <span className='w-10 h-10 mr-3 flex items-center justify-center'>
                <FaLocationDot />
              </span>
              <p className='text-lg w-[90%] '>World Trade Center 36, Dragan Tsankov blvd. Sofia 1057, Bulgaria</p>
            </div>
            <div className='flex items-center mt-2'>
              <span className='w-10 h-10 mr-3 flex items-center justify-center'>
                <HiMail />
              </span>
              <p className='text-lg w-[90%] '>musala@musala.com</p>
            </div>
            <div className='flex items-center mt-2'>
              <span className='w-10 h-10 mr-3 flex items-center justify-center'>
                <BsTelephoneFill />
              </span>
              <p className='text-lg w-[90%] '>+359 (2) 969 5821</p>
            </div>
            <div className='flex items-center mt-2'>
              <span className='w-10 h-10 mr-3 flex items-center justify-center'>
                <FaFax />
              </span>
              <p className='text-lg w-[90%] '>Fax +359 (2) 969 5822</p>
            </div>


          </div>
        </article>
  )
}

export default SofiaCard