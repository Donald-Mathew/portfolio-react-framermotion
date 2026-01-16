import React from 'react';
import assets from "../assets/assets";
import Title from './Title';
import ServiceCard from './ServiceCard';
import { motion } from "motion/react";

const Services = () => {

    const servicesData = [
        {
            title: "Website Development", 
            description:"I Create Websites That Connect and Engage...", 
            icon:assets.milvus 
        },
        {
            title: "Web Applications", 
            description:"I create powerful web applications that take care of your needs",  
            icon: assets.effect
        }, 
        //   {
        //     title: "Content Writing", 
        //     description:"We Help You Create a Marketing Strategy That Drives Results",
        //     icon: assets.contentful 
        // }, 
        // {
        //     title: "Content Writing", 
        //     description:"We Help You Create a Marketing Strategy That Drives Results", 
        //     icon: assets.contentful
        // } 
       
    ];
  return (
    <motion.div
    initial = "hidden"
    whileInView= "visible"
    viewport= {{once:true}}
    transition = {{staggerChildren: 0.2}}
    id="services" className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        {/* <img src={assets.pexel1} alt="" className = {"absolute -top-110 -left-70 -z-1 dark:hidden"} /> */}

       <Title title = 'How Can I Help?' desc='From Strategy To Execution,I craft Compelling Digital Solutions That Move Your Business Forward.' /> 

       <div className='flex flex-col md:grid grid-cols-2'>
          {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} index={index}  />
          ))}
       </div>

    </motion.div>
  )
}

export default Services;