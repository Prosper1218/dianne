import React from 'react'
import browsebg from "../../IMAGES/browsebg.webp";
import diannevid from "../../Video/diannevid.mp4";
import Intro from '../Treatments/Intro';
import { findme } from '../Data';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';

const GitMain = () => {
     return (
          <div className='pt-12'>
               <div id='Mtbg'>
                    <motion.section
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0 }}
                         transition={{ delay: 0.1, duration: 0.7 }}
                    >
                         <div className='flex justify-center'>
                              <img src={browsebg} alt="" className='w-[90%] h-[8rem]' id='browsebg' />
                         </div>
                         <section className='flex justify-center mt-[-4rem]'>
                              <div className='w-32 h-32  mb-4 ' >
                                   <video src={diannevid} autoPlay loop muted className='video '></video>
                              </div>
                         </section>
                         <Intro heading={"Let's Get In Touch"} />
                         <br />
                    </motion.section>
               </div>

               <br />
               <br />

               <motion.section className='flex justify-center w-full'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
               >
                    <div className="flex w-[40rem] justify-center flex-col px-6 sm:px-0 " >

                         <div className='w-full flex-1 sm:w-[100%] pr-0 mb-4'>

                              <form action='' onSubmit={(e) => { e.preventDefault() }} role='search'>
                                   <div className='grid  grid-cols-1 sm:grid-cols-2 gap-4 pb-4' >
                                        <input type="text" name="" id="" className="w-[100%] input" placeholder='Name' />
                                        <input type="email" name="" id="" className="w-[100%] input" placeholder='Email' />
                                   </div>
                                   <textarea name="TextArea" id="" rows="7" placeholder='Message' className='input mb-4 w-[100%]'></textarea>

                                   <button className='input w-[100%] submit-btn mb-2'>Submit</button>
                              </form>
                         </div>

                         <div className='w-full flex-initial sm:w-[50%] flex flex-col items-start'>
                              <p className='MyEmail'>my email address</p>
                              <a className='emaillink pb-4' href="#">wprosper92@gmail.com</a>
                              <p className="MyEmail">my phone number</p>
                              <a className='emaillink pb-4' href="#">08130013592</a>
                              <p className="MyEmail pb-4">find me online</p>


                              {
                                   findme.map((place) => {
                                        return <Link key={place.id} className='emaillink flex flex-row gap-2 items-center py-1' to={place.to}><place.brandIcon size={20} />{place.name}</Link>
                                   })
                              }

                         </div>
                    </div>
               </motion.section>
               <br />
               <br />
               <Footer />
          </div>
     )
}

export default GitMain