import React from 'react'
import "./Journal.css";
import Intro from '../Treatments/Intro';
import { Grid } from '@mantine/core';
import { journalD } from '../Data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const MiniJournal = () => {


     return (
          <div className='relative mb-10' >
               {/* <h2 className='j-h'>my journal</h2> */}
               <motion.div className=' bg pt-8 pb-24' style={{ display: "block", }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    viewport={{once:"true"}}
               >
                    <Intro heading="My Journal" />
               </motion.div>
               <br />
               <br />

               <motion.div className="flex justify-center px-0 xl:px-24 mt-[-8rem] sm:mt-[-10rem] "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    viewport={{once:'true'}}
               >

                    <div className='px-6 sm:px-12  py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 sm:gap-8 w-[100%]' >
                         {
                              journalD.slice(0, 6).map((item) => {
                                   const { id, imgsrc, title, content, date } = item
                                   return <div key={id} className='journal-box  items-start'>
                                        <Link to={`/Journal/${id}`}>
                                             <img src={imgsrc} alt={title} className='journal-box-img' />
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
               <div className='flex justify-center'>
                    <Link to={"/MJournal"}> <button id='SABTN' className='px-8 rounded-sm'>more articles</button></Link >
               </div>


          </div >
     )
}

export default MiniJournal