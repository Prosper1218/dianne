import React, { useContext, useState } from 'react'
import Intro from './Intro'
import logo from "../../IMAGES/diannalogo.svg";
import { contents } from '../Data';
import { Button, Grid } from '@mantine/core';
import rightA from "../../IMAGES/right-arrow.png";
import { FaQ } from '../Data';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const MainTreatment = () => {
     return (
          <div className='mt-14' >
               <div id='Mtbg' className='py-8' style={{ borderBottom: "1px solid #418a91" }}>
                    <motion.section
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0 }}
                         transition={{ delay: 0.1, duration: 0.7 }}
                    >
                         <div className='flex justify-center'> <img src={logo} alt="logo" /></div>
                         <Intro heading={"Treatment"} />
                    </motion.section>
               </div>
               <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.7 }}
               >
                    <Grid justify='center' className='px-1 py-2 ' style={{ background: "white" }}>
                         {
                              contents.map((item) => {
                                   const { id, title, content, imgsrc } = item
                                   return <Grid.Col key={id} span={{ base: 12, sm: 5.7, md: 4, lg: 4 }} className='boxx px-8 sm-px-0 py-8 sm:py-0'>
                                        <Link to={`/MTreatment/${id}`}>

                                             <div className='flex justify-center'>  <img src={imgsrc} alt={title} className='w-80 h-[26rem] rounded-t-full rounded-b-full' /></div>
                                             <h5>{title}</h5>
                                             <p>{content}</p>
                                             <div className='flex justify-center' >
                                                  <Button variant='subtle' id='learnmorebtn'>
                                                       <h6>  Learn More</h6> <img src={rightA} alt="" className='w-6 pl-1' />
                                                  </Button>
                                             </div>
                                        </Link>
                                   </Grid.Col>
                              })
                         }
                    </Grid>
               </motion.div>
               <div id="Mtbg" className='py-8 px-6 sm:px-12 '>
                    <br />
                    <motion.div className='flex justify-center'
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0 }}
                         transition={{ delay: 0.1, duration: 0.7 }}
                    >
                         <div className="flex w-[67rem] justify-center flex-col sm:flex-row items-start">

                              <div className='w-full flex-initial sm:w-[37%] pr-0 sm:pr-2 mb-4' >
                                   <h2 id='faqs'>faq<sub>s</sub></h2>
                              </div>



                              <div className='w-full flex-1 sm:w-[55%] flex flex-col items-start pl-0 sm:pl-10'>
                                   {
                                        FaQ.map((faqs) => {
                                             const { id, question, Answer } = faqs
                                             return <article key={id} className='w-[100%] '>

                                                  <div >
                                                       {/* <p>{SeeMore ? Answer : null}</p> */}
                                                       <Ans ans={Answer} question={question} />

                                                  </div>
                                             </article>
                                        })
                                   }
                              </div>
                         </div>
                    </motion.div>
                    <br />

               </div>
               <Footer />
          </div>
     )
}

const Ans = ({ ans, question }) => {
     const [SeeMore, setSeeMore] = useState(false)

     return (
          <div className='flex flex-col items-start gap-1 w-[100%] border-l-none border-r-none containe-r'>

               <div className='flex justify-between w-full gap-4' id='questi-on' >
                    <h3 className='pt-2'>{question}</h3>

                    <motion.button onClick={() => setSeeMore(!SeeMore)}
                         initial={{ scale: 1 }}
                         whileTap={{ scale: 1.5 }}
                         transition={{ stiffness: 200 }}
                    >
                         {SeeMore ? <IconMinus /> : <IconPlus />}
                    </motion.button>
               </div>
               <div className='transit' 
                 
               >
                    <h2 id='answe-r'> {SeeMore ? ans : null}</h2>

               </div>

          </div>
     )
}


export default MainTreatment




// 85377963218