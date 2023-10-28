import React from 'react'
import styles from './navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function PagesLinks() {
    const pathname = usePathname();
    const list_items = 'ml-1 cursor-pointer hover:border-b-2 border-[#3896ab] transition-all h-[50px] flex items-center justify-center px-3 ';
    const community_links = 'mt-2 p-2 hover:bg-gray-100 hover:text-gray-700 px-2';
 
    return (
        <ul className={`h-[100%] lg:flex hidden items-center uppercase font-medium text-lg  ${styles.list}`}>
        <Link href={'/company'}>
          <li className={`${list_items} ${pathname === '/company' ? 'active text-[#3896ab] font-semibold' : ''}`}>Company</li>
        </Link>
        <Link href={'/#services'}>
          <li className={`${list_items} `}>Services</li>
        </Link>
        <Link href={'/our_clients'}>
          <li className={`${list_items} ${pathname === '/our_clients' ? 'active text-[#3896ab] font-semibold' : ''}`}>Clients</li>
        </Link>

        <li className={`${list_items} ${styles.comunity} flex flex-col relative overflow-visible ${(pathname === '/community/csr_impact') || (pathname === '/community/conferences') || (pathname === '/community/code_it') || (pathname === '/community/info_man') ? 'active text-[#3896ab] font-semibold' : ''}`}>
          Community
          <ul className='w-full absolute top-[100%] left-0 hidden bg-gray-100 bg-opacity-90'>
            <Link href={'/community/csr_impact'}>
              <li className={`${community_links} ${pathname === '/community/csr_impact' ? 'active text-gray-800 bg-gray-100  font-semibold' : 'text-gray-700'}`}>CSR Impact</li>
            </Link>
            <Link href={'/community/conferences'}>
              <li className={`${community_links} ${pathname === '/community/conferences' ? 'active text-gray-800 bg-gray-100  font-semibold' : 'text-gray-700'}`}>Conferences</li>
            </Link>
            <Link href={'/community/code_it'}>
              <li className={`${community_links} ${pathname === '/community/code_it' ? 'active text-gray-800 bg-gray-100 font-semibold ' : 'text-gray-700'}`}>CodeIT</li>
            </Link>
            <Link href={'/community/info_man'}>
              <li className={`${community_links} ${pathname === '/community/info_man' ? 'active text-gray-800 bg-gray-100  font-semibold' : 'text-gray-700'}`}>InfoMan</li>
            </Link>
          </ul>
        </li>
        <Link href={'/careers'}>
          <li className={`${list_items} ${pathname === '/careers' ? 'active text-[#3896ab] font-semibold' : ''}`}>Careers</li>
        </Link>
        <Link href={'/legal'}>
          <li className={`${list_items} ${pathname === '/legal' ? 'active text-[#3896ab] font-semibold' : ''}`}>Legal</li>
        </Link>
      </ul>
  )
}

export default PagesLinks