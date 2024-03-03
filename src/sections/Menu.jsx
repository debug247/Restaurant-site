import React, { useEffect } from 'react'
import menu1 from '../assets/menu1.webp'
import menu2 from '../assets/menu2.webp'
import menu3 from '../assets/menu3.webp'
import vertical1 from '../assets/vertical1.jpg'
import item1 from '../assets/item1.jpg'
import item2 from '../assets/item2.jpg'
import item3 from '../assets/item3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {

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
            <section className='w-full bg-slate-950 h-fit px-20 py-28 flex flex-col lg:flex-row justify-center items-center gap-16'>
                <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center items-center bg-center bg-cover lg:h-[350px] lg:w-[450px] h-[300px] w-[300px] rounded-xl' style={{ backgroundImage: `url(${menu1})` }}>
                    <h1 className='text-white font-bold text-3xl'>FRESH FOOD</h1>
                </div>
                <div data-aos="slide-up" data-aos-delay="400" className='flex justify-center items-center bg-center bg-cover lg:h-[350px] lg:w-[450px] h-[300px] w-[300px] rounded-xl' style={{ backgroundImage: `url(${menu2})` }}><h1 className='text-white font-bold text-3xl'>TASTY FOOD</h1>
                </div>
                <div data-aos="slide-up" data-aos-delay="600" className='flex justify-center items-center bg-center bg-cover lg:h-[350px] lg:w-[450px] h-[300px] w-[300px] rounded-xl' style={{ backgroundImage: `url(${menu3})` }}><h1 className='text-white font-bold text-3xl'>AWESOME FOOD</h1></div>
            </section>

            <section id='about' className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:py-24 py-20 px-10 lg:px-20 bg-slate-950 w-full h-fit'>
                <div id='left' className='lg:w-[50%] w-full flex flex-col justify-end items-center lg:items-start'>
                    <h1 data-aos="zoom-in" className='text-white text-6xl font-bold'>About <span className='text-limegreen italic'>Us</span></h1>
                    <h1>GRAB THIS TASTY FOOD</h1>
                    <p data-aos="zoom-in" className='text-white text-xl font-semibold text-center lg:text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta, repudiandae qui ad consequatur sint accusamus commodi quam veritatis mollitia et veniam fugiat accusantium blanditiis temporibus nulla possimus consectetur ea!</p><br></br>
                    <p data-aos="zoom-in"  data-aos-easing="ease-in-sine" className='text-white text-xl font-semibold text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur reiciendis cumque nemo in corporis nesciunt rem recusandae laboriosam aliquid.</p>
                    <button data-aos="zoom-in-up" data-aos-delay="400" className=' bg-orange-500 px-8 py-4 rounded-full hover:bg-limegreen hover:text-black font-bold mt-6'>ORDER NOW</button>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200" id='right' className='flex justify-center items-center lg:w-[50%] w-full'>
                    <img src={vertical1} alt="" width={500} height={500} className='rounded-xl' />
                </div>
            </section>

            <section id='gallery' className='flex flex-col lg:flex-row justify-center items-center gap-8 px-10 lg:px-20 lg:py-24 py-28 bg-slate-950 w-full h-fit'>
                <img data-aos="slide-up" src={item1} alt="" width={450} height={500} className='rounded-xl' />
                <img data-aos="slide-up" data-aos-delay="200" src={item2} alt="" width={450} height={500} className='rounded-xl' />
                <img data-aos="slide-up" data-aos-delay="400" src={item3} alt="" width={450} height={500} className='rounded-xl' />
            </section>
        </>

    )
}

export default Menu