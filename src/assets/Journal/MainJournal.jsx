import React from 'react'
import Intro from '../Treatments/Intro'
import logo from "../../IMAGES/diannalogo.svg";
import { Category, journalD } from '../Data';
import Footer from '../Footer/Footer';
import { Grid } from '@mantine/core';
import { Link } from 'react-router-dom';
import Browseby from '../../Components/Browseby';
import browsebg from '../../IMAGES/browsebg.webp'
import { AnimatePresence, motion } from 'framer-motion';



const MainJournal = ({ isVisible }) => {
     return (

          <AnimatePresence>
               <div className='pt-14'>
                    <div id='Mtbg' className='py-8'

                    >
                         <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: 0.1, duration: 0.7}}
                         >
                              <div className='flex justify-center'> <img src={logo} alt="logo" /></div>
                              <Intro heading={"Journal"} />
                              <br />
                              <br />
                         </motion.div>
                    </div>

                    <motion.div className="flex justify-center px-0 xl:px-24 mt-[-6rem]"
                         initial={{ y: 50, opacity: 0 }}
                         animate={{ y: 0, opacity: 1 }}
                         // whileInView={{ opacity: 1, y: 0 }}
                         transition={{ stiffness: "200", delay: 0.2 }}

                    >

                         <div className='px-6 sm:px-12  py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 sm:gap-8 w-[100%]' >
                              {
                                   journalD.map((item) => {
                                        const { id, imgsrc, title, content, date } = item
                                        return <div key={id} className='journal-box  items-start'>
                                             <Link to={`/Journal/${id}`} >
                                                  <img src={imgsrc} alt={title} className='journal-box-img pointer' />
                                                  <br />
                                                  <div className='flex py-1 px-4 rounded-sm items-center' style={{ width: "fit-content", background: " #e2e7e8" }}>
                                                       <p className='j-box-title'>{title}</p>
                                                  </div>
                                                  <br />

                                                  <div>
                                                       <h3 className='box-h3 pr-2'>{content}</h3>
                                                  </div>
                                                  <div>
                                                       <p className='box-date'>{date}</p>
                                                  </div>
                                             </Link>

                                        </div>
                                   })
                              }
                         </div>
                    </motion.div>
                    <br />

                    <div id='Mtbg' className='relative pb-12 md:pb-0'>

                         <Browseby browsebg={browsebg} />
                    </div>

                    <Footer />

               </div>
          </AnimatePresence >

     )
}

export default MainJournal