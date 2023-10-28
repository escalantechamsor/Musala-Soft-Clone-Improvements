import Image from 'next/image'
import React from 'react'
import client1 from '@/app/img/clients/client1.png';
import client2 from '@/app/img/clients/client2.png';
import our_clients from '@/app/img/herocarousel/responsivecarousel/team_work.jpg'
function Clients() {
  return (
    <section className='w-full min-h-[400vh]'>
      <section className='w-full h-[80vh]  flex items-center'>
        <Image className='h-[100%] w-full object-cover' src={our_clients} alt='Company logos' />
      </section>
      <h2 className='lg:text-[2.5rem] text-[2rem] font-extrabold w-full text-[#409bb0] text-center uppercase mb-3 mt-4'>Our clients</h2>
      <section className='w-full min-h-[80vh] lg:flex-row flex-col flex items-center lg:px-7 px-5'>
        <Image className='h-[80vh] scale-90 lg:w-[50%] w-full' src={client1} alt='Company logos' />
        <Image className='h-[80vh] scale-90 lg:w-[50%] w-full' src={client2} alt='Company logos' />
      </section>
      <section className='w-[90%] mx-auto min-h-[50vh] mt-7 mb-5 bg-[#409bb0] rounded-sm shadow-xl flex flex-col text-gray-100 p-3 items-center justify-center'>
        <h3 className='lg:text-[2.5rem] text-[2.1rem] font-sans mb-3 font-extrabold text-center'>
          PROMINENT CLIENTS
        </h3>
        <p className='lg:text-[1.5rem] text-[1.1rem] text-center flex-wrap italic'>
          Our clients are challenging, innovative and trendsetting organisations.
        </p>
        <button className='  px-7 bg-gray-100 rounded-sm shadow-xl mt-7 text-[#46aac1] text-xl h-[60px] font-medium hover:shadow-2xl transition-all hover:bg-gray-50 outline-none'>
          Build your future with us
        </button>
      </section>
      <section className='w-[90%] mx-auto min-h-[90vh] p-3 mb-2'>
        <h3 className='lg:text-[2rem] text-[1.3rem] font-extrabold text-[#409bb0] text-center uppercase  mt-4 w-[98%] mx-auto '>
          Breaking fronteirs around the world, joining strengh togeter
        </h3>
        <div className=' lg:w-[90%] w-full mx-auto min-h-[20vh] bg-gray-100 flex items-center justify-center rounded-sm mt-2 mb-6'>
          <p className='lg:text-[1.3rem] text-[1.1rem] lg:flex-wrap text-gray-600 '>
            Multinational enterprises and government institutions around the globe combine their strategy for success with our expertise and creativity to build a better future.
            Due to our successful experience in complex geographically distributed projects, we have been recognized by prominent clients worldwide as a trusted partner, committed to professionalism, quality and value.
          </p>
        </div>
        <h4 className='lg:text-[1.5rem] text-[1.3rem] font-extrabold text-[#409bb0] text-center uppercase mt-4 w-[90%] mx-auto lg:mb-4 mb-5 '>
          Our expertise includes strong track record in some of the most challenging and fast growing industries:
        </h4>
        <ul className='lg:p-10 lg:text-[1.2rem] text-[1.1rem] lg:w-[80%] mx-auto text-gray-100'>
          <li className='mt-4 pl-3 shadow-xl p-2 bg-[#409bb0] w-full min-h-[50px] rounded-sm'>
            <strong>ICT</strong>  (IBM, T-Systems, VMware, SAP, Atos, Cellent, Milestone, UGT, etc.)
          </li>
          <li className='mt-4 pl-3 shadow-xl p-2 bg-[#409bb0] w-full min-h-[50px] rounded-sm'>
            <strong>Telecom</strong>  (Deutsche Тelekom, Telenor, A1, Vivacom, etc.)
          </li>
          <li className='mt-4 pl-3 shadow-xl p-2 bg-[#409bb0] w-full min-h-[50px] rounded-sm'>
            <strong>Finance</strong>  (OTP Group, KBC, DZI, Commerzbank, Generali, Bulgarian Guarantee Fund, Visa, etc.)
          </li>
          <li className='mt-4 pl-3 shadow-xl p-2 bg-[#409bb0] w-full min-h-[50px] rounded-sm'>
            <strong>Automotive</strong>  (BMW, Daimler, VW, T-Systems, homeiX, Porsche Digital)
          </li>
          <li className='mt-4 pl-3 shadow-xl p-2 bg-[#409bb0] w-full min-h-[50px] rounded-sm'>
            <strong>Public Sector</strong>  (Ministry of Interior, Traffic Police and NRA Bulgaria, Dutch Customs, etc.)
          </li>
          <li className='mt-4 pl-3 shadow-xl p-2 bg-[#409bb0] w-full min-h-[50px] rounded-sm'>
            We have also executed substantial projects in Healthcare, Gaming, Manufacturing and Pharmaceuticals etc. (Telus Health, Telus International, UGT, Phillip Morris, E.Miroglio, Perkin Elmer etc.)
          </li>
        </ul>

      </section>
    </section>
  )
}

export default Clients