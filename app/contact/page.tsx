/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';


import { FaPhoneAlt, FaEnvelope, FaInstagram } from 'react-icons/fa';

import { sendEmail } from '../../backend/sendEmail';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: '+27 83 6371 388',
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "lastemail768@gmail.com",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    description: "seth.fullstack"
  },
]

import { motion } from 'framer-motion';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: '',
  });

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    sendEmail(formData).then((success) => {
      if (success) {
        console.log('Email sent successfully!');
        setFormData({ name: '', email: '', message: '', service: '' });
      } else {
        console.log('Error sending email!');
      }
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form onSubmit={submitHandler} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let&apos;s work together</h3>
              <p className='text-white/60'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                consequatur reprehenderit, omnis illo rerum quam.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Full Name'
                />
                <Input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Email address'
                />
              </div>
              <div className='w-full'>
              <Input
                  type='service'
                  name='service'
                  value={formData.service}
                  onChange={handleChange}
                  placeholder='Service'
                  
                />
              </div>
              <Textarea
                className='h-[200px]'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Type your message here'
              />
              <Button size='md' className='max-w-40' type='submit'>
                Send Message
              </Button>
            </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1
          xl:order-none mb-8 xl:mb-0'>
            <ul>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6 py-2'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                    text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact