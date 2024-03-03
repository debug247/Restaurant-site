import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import fb from '../assets/icons/fb.svg'
import insta from '../assets/icons/insta.svg'
import twitter from '../assets/icons/twitter.svg'
import yt from '../assets/icons/yt.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
    });
}, [])

  return (
    <>
      <footer className='flex justify-center items-center px-10 lg:px-20 py-10 lg:py-12 flex-col gap-6 bg-slate-800 w-full'>
        <div id='social-icons' className='flex flex-row justify-start items-start gap-6 mt-3'>
          <div data-aos="zoom-in" id='icon-box' className='bg-orange-500 p-2 rounded-full hover:bg-limegreen cursor-pointer'>
            <img src={fb} alt="" width={28} height={28} />
          </div>
          <div data-aos="zoom-in" data-aos-delay="200" id='icon-box' className='bg-orange-500 p-2 rounded-full hover:bg-limegreen cursor-pointer'>
            <img src={insta} alt="" width={28} height={28} />
          </div>
          <div data-aos="zoom-in" data-aos-delay="400" id='icon-box' className='bg-orange-500 p-2 rounded-full hover:bg-limegreen cursor-pointer'>
            <img src={twitter} alt="" width={28} height={28} />
          </div>
          <div data-aos="zoom-in" data-aos-delay="600" id='icon-box' className='bg-orange-500 p-2 rounded-full hover:bg-limegreen cursor-pointer'>
            <img src={yt} alt="" width={28} height={28} />
          </div>
        </div>

        <ul className='flex justify-center items-start lg:items-center text-white text-lg mt-3 lg:gap-10 gap-4' >
          <li className='hover:text-orange-500 cursor-pointer'>Home</li>
          <li className='hover:text-orange-500 cursor-pointer'>About</li>
          <li className='hover:text-orange-500 cursor-pointer'>Menu</li>
          <li className='hover:text-orange-500 cursor-pointer'>Gallery</li>
          <li className='hover:text-orange-500 cursor-pointer'>Contact</li>
        </ul >

      </footer>

      <div className='w-full bg-black p-4 flex flex-col justify-center items-center text-white font-semibold'>
        <h1 className='text-center'>Copyright 2024, Designed & Developed by DEBUG ENTITY, All Rights Reserved</h1>
        <div data-aos="slide-right" data-aos-delay="200" id='icon-box' className='bg-limegreen p-2 rounded-full hover:bg-orange-500 cursor-pointer fixed lg:bottom-12 bottom-6 right-6 lg:right-6'>
          <Link to='home' spy={true} offset={-100} smooth={true}>
            <img src={toparrow} alt="" width={40} height={40} />
          </Link>
        </div>
      </div>
    </>


  )
}

export default Footer





