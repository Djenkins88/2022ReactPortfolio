import React from 'react'
import Amazonpic from '../images/Amazonpic.png'
import FitnessTracker from '../images/FitnessTracker.png'
import NoteTaker from '../images/NoteTaker.png'
import BudgetTracker from '../images/BudgetTracker.png'
import TechBlog from '../images/TechBlog.png'
import WeatherForecast from '../images/WeatherForecast.png'


function Portfolio() {

    const Portfolios = [
        {
            id: 1,
            src: Amazonpic
        },
        {
            id: 2,
            src: FitnessTracker
        },
        {
            id: 3,
            src: NoteTaker
        },
        {
            id: 4,
            src: BudgetTracker
        },
        {
            id: 5,
            src: TechBlog
        },
        {
            id: 6,
            src: WeatherForecast
        },
    ]

  return (
    <div className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                Portfolios.map(({ id, src }) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='object-cover h-48 w-96 rounded-md duration-200 hover:scale-105' />
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w-1/2 px-6 py-3 m4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
    )
}

export default Portfolio