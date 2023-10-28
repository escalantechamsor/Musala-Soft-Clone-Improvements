"use client"
import React, { useState } from "react";
import { offer_list } from '@/offer_list'

function Section1JoinUs() {
  const [selectedOption, setSelectedOption] = useState<String>('Bulgaria');
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
  };

  return (
    <section className='w-full min-h-[100vh] bg-gray-100 lg:p-5 p-1'>
      <h2 className='lg:text-[2.4rem] md:text-[2rem] text-[1.4rem] px-2  font-extrabold w-full text-[#409bb0] text-center uppercase mb-3 '>Our latest offers</h2>
      <div className='w-full h-[12vh] rounded-sm mb-3 flex items-center justify-end p-2'>
        <p className='lg:text-lg text-base mr-3 text-gray-800'>Filter by location</p>
        <select
          onChange={selectChange}
          className='lg:w-[220px] w-[200px] px-3 text-lg rounded-sm h-[50px] outline-none shadow-md text-gray-500 font-medium' name="locations" id="locations">
          <option value="Bulgaria">Bulgaria</option>
          <option value="North Macedonia">North Macedonia</option>
          <option value="Skopje">Skopje</option>
          <option value="Sofia">Sofia</option>
          <option value="Anywhere">Anywhere</option>
          <option value="Anywhere">Ruse</option>
          <option value="Anywhere">Burgas</option>
        </select>
      </div>

      <section className='w-full min-h-[90vh] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 p-4 gap-7 lg:px-14 px-10 bg-gray-50'>

        {
          selectedOption &&
          offer_list.filter(off => off['location'].includes(`${selectedOption}`)).map((offers, index) => {
            return (
              <div key={index} className='h-[50vh] rounded-xl flex flex-col items-center justify-between shadow-2xl p-4 bg-gray-100' >

                <h3 className='lg:text-[1.5rem] text-[1.2rem] font-extrabold text-center text-gray-700 lg:mb-2'>
                  {offers.role}
                </h3>
                <div className='w-full p-2 h-[40%]  flex flex-col items-center justify-start'>
                  <h4 className='lg:text-[1rem] font-medium w-[90%] mx-auto text-center text-gray-500 mb-3'>
                    {
                      offers.info
                    }
                  </h4>
                  <div className='text-base w-[90%] mx-auto text-center text-gray-600 mt-2 font-medium '>
                    {offers.location.map((off, index) => {
                      return <div key={index}>{off}</div>
                    })
                    }
                  </div>
                </div>
                <button className='w-[200px] h-[50px] bg-[#3896ab] text-gray-100 text-lg rounded-sm shadow-xl hover:bg-gray-800 transition-all font-normal'>
                  See details
                </button>
              </div>
            )
          })
        }





      </section>
    </section>
  )
}

export default Section1JoinUs