// import React, { useRef, useState } from 'react'

// const ServiceCard = ({service, index}) => {

//   const [position, setPosition ] = useState({x:0, y:0})
//   const [visible, setVisible] = useState(false);

//   const divRef = useRef(null);
//   const handleMouseMove = (e) =>  {
//        const bounds = divRef.current.getBoundingClientRect();
//        setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top})
//   };

//   return (
//     <div className={`relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl shadow-gray-100 dark:shadow-white/10`} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}ref={divRef} onMouseMove={handleMouseMove}>
       
//        <div className={`pointer-events-none blur-2xl rounded-full bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 w-750 h-750 absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? "opacity-70" : "opacity-0"} `} style={{top: position.y - 150,  left: position.x - 150, opacity: visible ? 0.7 : 0 }} />

//         <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>

//           <div className='bg-gray-100 dark:bg-gray-700 rounded-full'>
//                <img src={service.icon} alt="" className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2' />
//           </div>

//           <div className='flex-1'>
//               <h3 className='font-bold'>{service.title}</h3>
//               <p className='text-sm mt-2'>{service.description}</p>
//           </div>

//         </div>

//     </div>
//   )
// }

// export default ServiceCard;

import React, { useRef, useState } from 'react';
import {motion} from "motion/react";

const ServiceCard = ({ service, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <motion.div
       initial = {{opacity:0, y:30}}
       whileInView={{opacity: 1, y:0}}
       transition = {{duration: 0.5, delay: index * 0.2}}
       viewport = {{once:true}}
      ref={cardRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className="relative p-[1px] rounded-xl overflow-hidden max-w-lg m-4"
    >
      {/* Moving gradient border */}
      <div
        className="absolute w-[600px] h-[600px] bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          top: position.y - 300,
          left: position.x - 300,
          opacity: visible ? 0.8 : 0,
        }}
      />

      {/* Actual card */}
      <div className="relative z-10 rounded-xl bg-white dark:bg-gray-900 p-8 flex items-center gap-10 shadow-lg">
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-2">
          <img
            src={service.icon}
            alt=""
            className="w-16 h-16 rounded-full object-contain"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold">{service.title}</h3>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
