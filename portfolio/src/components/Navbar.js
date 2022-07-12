import React from 'react'
import { FaBars, Fatimes } from 'react-icons/fa'

function Navbar() {


        const links = [
            {
                id: 1,
                link: 'Home'
            },
            {
                id: 1,
                link: 'About'
            },
            {
                id: 1,
                link: 'Portfolio'
            },
            {
                id: 1,
                link: 'Experience'
            },
            {
                id: 5,
                link: 'Contact'
            }
        ]
    

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
            <h1 className='text-5xl font-signature ml-2'>Dominque</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (
                <li 
                    key={id} 
                    className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
                    {link}
                </li>

            ))}
        </ul>
    </div>
  )
}

export default Navbar