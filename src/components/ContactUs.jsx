import React from 'react';
import Title from './Title';
import { ArrowRight, PersonStandingIcon } from 'lucide-react';
import assets from '../assets/assets';
import toast from 'react-hot-toast';
import { motion } from "motion/react";

const ContactUs = ({theme}) => {

     const onSubmit = async(event) => {
     event.preventDefault();
   // setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "3a3b2560-5547-4f3f-b470-5adaaf392e7c");

    try {
     
     const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
     toast.success("Thank You For Your Submission");
      event.target.reset();
    } else {
        toast.error(data.message)
     };

    } catch (error) {
       toast.error(error.message)
    }
}

  return (
    <motion.div 
      initial = "hidden"
     whileInView = "visible"
     viewport = {{once: true}}
     transition = {{staggerChildren: 0.2}}
    
    id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white '>
      
      <Title title ="Reach Out To Me" desc="Turning Your Desired Design And Functionality To Reality" />
     
     <motion.form
      initial = {{opacity:0, y:30}}
     whileInView = {{opacity: 1, y:0}}
     viewport = {{once: true}}
     transition = {{duration: 0.5, delay: 0.4}}
     onSubmit={onSubmit} action="" className='grid sm:grid-cols-2 sm:gap-5 max-w-2xl w-full'>

        <div>
            <p className='mb-2 text-sm font-medium'>Your name</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                 <img src= {assets.person2}  alt="" className= {`w-14 h-12 -ml-2 dark:-ml-3 rounded-[7px]`} />
                 <input name="name" type='text' placeholder='Enter Your Name' className='w-full p-3 text-sm outline-none' required />
            </div>
        </div>

         <div>
            <p className='mb-2 text-sm font-medium'>Email</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                 <img src= {assets.email}  alt="" className='w-14 h-12 -ml-2 dark:-ml-3 rounded-[7px]' />
                 <input name='email' type="email" placeholder='Enter Your Email' className='w-full p-3 text-sm outline-none' required />
            </div>
        </div>

        <div className='sm:col-span-2'>
            <p className='mb-2 text-sm font-medium'>Message</p>
            <textarea name="message" id="" rows={8} placeholder='Enter Your Message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' required></textarea>
        </div>

        <button type="submit" className='w-max flex  items-center gap-2 bg-primary text-white px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all text-xl'>
             Submit <ArrowRight className='w-5' />
        </button>

     </motion.form>

    </motion.div>
  )
}

export default ContactUs;