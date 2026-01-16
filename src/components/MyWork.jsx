import React from 'react'
import Title from './Title'
import assets from '../assets/assets';
import { motion } from "motion/react";

const MyWork = () => {

   const workData = [
      {
        title: "Nike Website Clone", 
        description: "I Have Replicated a Nike Website Using React", 
        image: assets.nike2front
      }, 

      {
        title: "Space-X Website",
        description: "I Built a Space-X Website Clone Using HTML, CSS & JS", 
        image: assets.spacex
      }, 

      {
        title: "A CRUD APP", 
        description: "I Have Built a CRUD App Using the MERN Stack", 
        image: assets.backendtest2
      }
   ];

  return (

    <motion.div
     initial = "hidden"
     whileInView = "visible"
     viewport = {{once: true}}
     transition = {{staggerChildren: 0.2}}
    id='my-work' className='flex flex-col items-center gap-7 px-4 sm:-px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <Title title= "My Latest Work" desc = "From Strategy to Execution,I provide Website and Web Application Solutions That Move Your Business Forward." />

        <div className='grid sm:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
             {
                workData.map((work, index) => (
                    <motion.div
                 initial = {{opacity:0, y:30}}
                 whileInView={{opacity: 1, y:0}}
                 transition = {{duration: 0.5, delay: index * 0.2}}
                viewport = {{once:true}}
                    key={index} className='flex flex-col items-center text-center hover:scale-102 duration-500 transition-all cursor-pointer'>
                     <img src= {work.image} alt="" className='w-full rounded-xl' />
                     <h3 className='mt-3 mb-2 text-lg font-semibold'> {work.title} </h3>
                     <p className='text-sm opacity-60 w-5/6'> {work.description} </p>
                 </motion.div>
                ))
             }
        </div>

    </motion.div>
  )
}

export default MyWork