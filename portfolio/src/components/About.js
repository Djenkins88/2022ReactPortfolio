import React from 'react'

function About() {
  return (

    <div 
    name='about'
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p>
            My name is Dominque Jenkins im from a small town called Jena, it's in Louisana. 
            I moved to Texas about five years ago for better opportunities. 
            I've always been into tech so i finally decided to give it a try and i like it like alot. 
            So when i not practicing my coding or learning a new technolgy I like reading learning new
            things espically in the tech field, gaming, four wheelers, and the gym.
            </p>
        <br/>
        </div>
    </div>
  )
}

export default About