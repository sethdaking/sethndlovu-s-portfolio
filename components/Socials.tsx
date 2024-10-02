import React from 'react'
import Link from 'next/link';
import { FaGithub, FaInstagram, FaMedium } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'


const socials = [
    {icon: <FaGithub />, path: 'https://github.com/sethdaking'},
    {icon: <FaInstagram />, path: 'https://www.instagram.com/seth.fullstack'},
    {icon: <FaMedium />, path: 'https://medium.com/@seth.fullstack'},
    {icon: <FaXTwitter />, path: 'https://x.com/seth_ndlov10229'},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Socials