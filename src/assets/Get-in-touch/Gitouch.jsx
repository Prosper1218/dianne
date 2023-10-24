import React from 'react'
import "./GiTouch.css";
import { Button, Flex, Grid } from '@mantine/core';
import diannevid from "../../Video/diannevid.mp4";
import { Link } from 'react-router-dom';
import { findme } from '../Data';
import { motion } from 'framer-motion';

const Gitouch = () => {


     return (
          <div style={{ paddingTop: "4rem", paddingBottom: "4rem", }} className='flex justify-center px-6 sm:px-6 md:px-12'>
               <div className="flex w-[67rem] justify-center flex-col sm:flex-row">

                    <motion.div className='w-full flex-1 sm:w-[55%] pr-0 sm:pr-2 mb-4'
                         initial={{ opacity: 0, y: 50 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0 }}
                         transition={{ delay: 0.4, duration: 0.7 }}
                    >
                         <h2 id='git-h2'>Let's get in touch</h2>
                         <p id='git-p' className='pr-8'>
                              Let's take the next step in your mental health journey together. Fill out the form below and I'll be in touch soon
                              to answer any questions and schedule your online therapy session with me.
                         </p>
                         <form action='' onSubmit={(e) => { e.preventDefault() }}>
                              <div className='grid  grid-cols-1 sm:grid-cols-2 gap-4 pb-4' >
                                   <input type="text" name="" id="" className="w-[100%] input" placeholder='Name' />
                                   <input type="email" name="" id="" className="w-[100%] input" placeholder='Email' />
                              </div>
                              <textarea name="TextArea" id="" rows="7" placeholder='Message' className='input mb-4 w-[100%]'></textarea>
                              {/* <div className="w-[100%]" style={{border:"1px solid yellow"}}>hello</div>
                              <div className="w-[100%]" style={{border:"1px solid yellow"}}>hello</div> */}
                              <button className='input w-[100%] submit-btn mb-2'>Submit</button>
                         </form>
                    </motion.div>

                    <motion.div className='w-full flex-initial sm:w-[40%] flex flex-col items-start pl-0 sm:pl-10'
                         initial={{ opacity: 0, x: 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0 }}
                         transition={{ delay: 0.5, duration: 0.7 }}
                    >
                         <div className='w-32 h-32 hidden sm:block mb-4'> <video src={diannevid} autoPlay loop muted className='video rounded-t-full rounded-b-full'></video></div>
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

                    </motion.div>
               </div>


          </div>
     )
}

export default Gitouch




