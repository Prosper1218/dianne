import React from 'react'
import './Background.css'
import darkbg from "../../IMAGES/background.webp";
import Dianne from "../../IMAGES/DianneHerself.jpg";
import { SimpleGrid } from '@mantine/core';
import logo from "../../IMAGES/diannalogo.svg";
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';


const Lbackground = () => {
    return (
        <div>
            <motion.div style={{ marginTop: "3.7rem", marginBottom: "3rem" }} className='grid grid-cols-1 md:grid-cols-2 gap-8'
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
            >
                <div style={{ display: "flex", justifyContent: "right", }} id='picbg'>
                    <img src={Dianne} alt="" className='dianneh rounded-t-full lg:-[60cm]' />
                </div>
                <div className='pt-4 md:pt-[11rem] lg:pt-[13rem] px-4 items-center relative'>
                    <p id='estd' className="absolute right-0 hidden sm:block ">estd.2023</p>
                    <div className='container xl:pt-[4rem] md:absolute bottom-0' >
                        <img src={logo} alt="" />
                        <p id='text'>online therapist</p>
                        <h1 id='dh1' className=' pr-8 xl:pr-40'>
                            i'm Dianne Russell,
                            lincensed therapist
                        </h1>
                        <p id='desc' className='pr-12 xl:pr-40 '>
                            With 10+ years of experience, I offer personalized and
                            evidence-based therapy at affordable rates. Let's work
                            together to improve your mental wellbeing.
                        </p>
                    </div>
                </div>
            </motion.div>

            <Outlet />

        </div>
    )
}

export default Lbackground

