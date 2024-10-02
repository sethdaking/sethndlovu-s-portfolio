'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web & Full-Stack Development',
    description: 'I develop custom web applications using JavaScript, TypeScript, and Next.js, focusing on scalability, responsiveness, and performance. My expertise includes building robust APIs (RESTful and GraphQL) and integrating third-party services like Binance API and Web3, enabling seamless data flow and real-time functionality. Additionally, I create real-time collaborative tools with WebSocket integration for live synchronization and smooth user experiences.',
    href: "/contact"
  },
  {
    num: '02',
    title: 'Blockchain & Web3 Solutions',
    description: 'I specialize in blockchain and Web3 development, offering custom blockchain solutions, smart contract implementation, and decentralized application (dApp) development. My services extend to Web3 applications with DeFi and cryptocurrency integrations, allowing users to interact securely with blockchain networks. I also create blockchain-powered automation software, streamlining business processes like accounting and transaction management.',
    href: "/contact"
  },
  {
    num: '03',
    title: 'Algorithm Development',
    description: 'I provide custom data management solutions, such as Redis-like systems for efficient data caching and scalability, ideal for high-traffic applications. Additionally, I develop custom version control systems tailored to unique project needs, helping teams track code changes and collaborate efficiently, offering a simplified alternative to traditional Git systems.',
    href: "/contact"
  },
  {
    num: '04',
    title: 'AI & Educational Tools',
    description: 'I design AI solutions with custom neural networks and machine learning models, helping businesses leverage predictive analytics and data-driven insights. Additionally, I build interactive platforms for algorithm visualization, allowing developers and students to learn and explore sorting, pathfinding, and other algorithms through dynamic, real-time demonstrations.',
    href: "/contact"
  },
]

import { motion } from 'framer-motion';


const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py:0'>
      <div className='container mx-auto'>
        <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outiline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {service.num}
                  </div>
                  <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all
                  duration-500 flex justify-center items-center hover:-rotate-45'>
                
                  <BsArrowDownRight className='text-primary text-3xl'/>
                  </Link>
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                  {/*title */}
                  {service.title}
                  </h2>
                  {/*Description */}
                  <p className='text-white/60'>{service.description}</p>
                  <div className='border-b border-white/20'>

                  </div>

                
               
              </div>
            )
          })}

        </motion.div>
      </div>
    </section>
  )
}

export default Services