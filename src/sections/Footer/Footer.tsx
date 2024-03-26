"use client"
import { fadeIn } from '@/lib/variant'
import { motion } from 'framer-motion'
import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const social = [
  {
    icon: <FaLinkedin size={25}/>,
    url: 'https://www.linkedin.com/in/darel-honrejas-15455b288/'
  },
  {
    icon: <FaGithubSquare size={25}/>,
    url: 'https://github.com/D4rzDev'
  },
  {
    icon: <IoMail size={25}/>,
    url: 'mailto:darelhonrejaswork@gmail.com'
  },
]
export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center mx-auto max-w-[1280px] gap-10 py-16 mt-16 bg-zinc-200 dark:bg-zinc-900'>
         <div className=' flex items-center gap-4 '>
              { social.map(( socials) => (
                <motion.a href={socials.url}
                variants={fadeIn('up', .2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false, amount: 0.2}}
                className='  text-zinc-700 dark:text-zinc-200'>
                  {socials.icon}
                  </motion.a>
              ))}
            </div>
            <motion.p 
            variants={fadeIn('up', .4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.2}}
            className=' text-smClamp'>Copyright © Darel Honrejas. All rights reserved.</motion.p>
    </footer>
  )
}
