import React, { useState } from 'react'
import './Carousel.css'
import { Container, Overlay, Text } from '@mantine/core'
import logo from "../../IMAGES/whitelogo.svg";
import goright from "../../IMAGES/goright.svg";
import goleft from "../../IMAGES/goleft.svg";
import { motion } from 'framer-motion';


const Carousel = () => {
     const [CurrentI, setCurrentI] = useState(0)
     const Text = [
          "Working alongside Dianne for several months has been a turning point in my life. Her expertise, compassion, and guidance have led me through tough times, and I have found newfound strength to conquer challenges. My life has truly improved under her care. she's 10/10",
          'I have been working with Dianne for a while now, and I can truly say that my life has taken a positive turn since our sessions began. Her compassion, expertise, and support have been instrumental in helping me navigate challenges and find the strength to overcome them.',
          "I had the privilege of working with Dianne, and I can't express how grateful I am for her compassionate and insightful therapy sessions. Her expertise created a safe space where I could truly open up and heal. I highly recommend her to anyone seeking emotional well-being.",
          "I had the pleasure of being a client of Dianne, and I can confidently say that her therapeutic approach is remarkable. Her warmth and understanding made me feel heard and supported throughout our sessions. I'm incredibly thankful for her guidance on my path to personal growth.",
          "Dianne is exceptional she's profoundly impacted my life. Her empathy, wisdom, and commitment to my well-being are truly remarkable. Through her guidance, I've gained valuable insights to navigate life's challenges. I highly recommend her to anyone seeking therapy."

     ]
     const author = [
          'CPU',
          'Tyler',
          'Stefan',
          'Jess',
          'Dennis',
     ]

     const handleright = () => {
          const nextindex = (CurrentI + 1) % Text.length;
          setCurrentI(nextindex)
     }

     const handleleft = () => {
          const previndex = (CurrentI - 1 + Text.length) % Text.length;

          setCurrentI(previndex)
     }

     return (
          <div id='bg'>
               <div className='wrapper'>
                    {/* <Overlay color="#000" opacity={0.65} zIndex={1} /> */}

                    <div className='inner'>
                         <div className='flex justify-center pt-20 pb-6'><img src={logo} alt="" style={{ color: "white" }} /></div>


                         <motion.h1 id='slidetext' className='px-6 sm:px-20 lg:px-44'
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: 0.1, duration: 0.7 }}
                         >
                              {Text[CurrentI]}
                         </motion.h1>
                         <p className='text-white pt-8 author' id='author'>_{author[CurrentI]}</p>

                         <div className='flex justify-center gap-8 mt-20 pb-12' >
                              <img src={goleft} alt="leftarrow" onClick={handleleft} style={{ cursor: "pointer" }} />
                              <img src={goright} alt="rightarrow" onClick={handleright} style={{ cursor: "pointer" }} />
                         </div>
                    </div>
               </div>


          </div >
     )
}

export default Carousel
