import React from 'react'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img8 from '../images/img8.png'
import img10 from '../images/img10.png'
import img11 from '../images/img11.png'
import img12 from '../images/img12.png'


function Experience() {

    const techs = [
        {
            id: 2,
            src: img2,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 3,
            src: img3,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            src: img4,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: img5,
            title: 'JQuery',
            style: 'shadow-blue-700'
        },
        {
            id: 6,
            src: img6,
            title: 'NODE.JS',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            src: img8,
            title: 'MySQL',
            style: 'shadow-blue-400'
        },
        {
            id: 10,
            src: img10,
            title: 'MONGODB',
            style: 'shadow-green-800'
        },
        {
            id: 11,
            src: img11,
            title: 'GRAPHQL',
            style: 'shadow-pink-500'
        },
        {
            id: 12,
            src: img12,
            title: 'REACT',
            style: 'shadow-blue-200'
        },
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt='' className='h-20 w-50  mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience