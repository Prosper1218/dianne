import React from 'react'
import logo from "../../IMAGES/diannalogo.svg";
import Dianne from "../../IMAGES/DianneHerself.jpg";
import './About.css'
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';


const About = () => {
     return (
          <div>
               <motion.div style={{ marginTop: "3.7rem", marginBottom: "3rem" }} className='grid grid-cols-1 md:grid-cols-2 gap-8'
                   initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0 }}
                   transition={{ delay: 0.1, duration: 0.7}}
               >
                    <div style={{ display: "flex", justifyContent: "right", }} id='picbg'>
                         <img src={Dianne} alt="" className='dianneh rounded-t-full lg:-[60cm]' />
                    </div>
                    <div className='pt-4 md:pt-[11rem] lg:pt-[13rem] px-4 items-center relative'

                    >
                         <p id='estd' className="absolute right-0 hidden sm:block ">estd.2023</p>
                         <div className='container xl:pt-[4rem] md:absolute bottom-0' >
                              <img src={logo} alt="" />
                              <p id='text'>About me</p>
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


               {/*  */}

               <motion.div className='flex justify-center mt-16 w-full'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.7}}
               >

                    <div className="flex w-[75rem] justify-center flex-col sm:flex-row-reverse gap-8 px-4" >

                         <div className='w-full flex-1 sm:w-[55%] pr-0 sm:pr-2 mb-4' >
                              <p className='journal-detail-text'>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi, hic animi modi dicta rem natus laborum. Explicabo dignissimos
                                   ipsam rerum, minima porro corporis, eaque consequatur suscipit facilis possimus hic ut, temporibus excepturi cum aperiam animi debitis molestiae?
                                   Quo vel nemo alias ipsum perspiciatis minus iusto impedit, delectus earum omnis. Optio laborum sequi facilis dolor laboriosam, blanditiis dignissimos
                                   qui suscipit numquam amet ducimus? Necessitatibus dolores delectus sint ullam quos id laudantium dolore. Repudiandae vitae iure exercitationem laborum

                              </p>

                              <h3 className='box-h3 py-4'>Your Dedicated Therapist</h3>
                              <p className='journal-detail-text'>
                                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit maiores atque quis totam unde cum quas, explicabo aperiam illo nemo voluptatem omnis
                                   veritatis obcaecati vero nulla, saepe aut, iusto quo nam excepturi quam ullam aspernatur? Numquam placeat molestiae minus consequatur.
                              </p>

                              <h3 className='box-h3 py-4'>My Journey Into Psychology</h3>

                              <p className='journal-detail-text'>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi, hic animi modi dicta rem natus laborum. Explicabo dignissimos
                                   ipsam rerum, minima porro corporis, eaque consequatur suscipit facilis possimus hic ut, temporibus excepturi cum aperiam animi debitis molestiae?
                                   Quo vel nemo alias ipsum perspiciatis minus iusto impedit, delectus earum omnis. Optio laborum sequi facilis dolor laboriosam, blanditiis dignissimos
                                   qui suscipit numquam amet ducimus? Necessitatibus dolores delectus sint ullam quos id laudantium dolore. Repudiandae vitae iure exercitationem laborum

                              </p>
                         </div>

                         <div className='w-full flex-initial sm:w-[30%] flex flex-col items-start ' >

                              <section className='w-full section'>
                                   <h3 className='about-h2 pb-2'>Objectivces</h3>
                                   <ul>
                                        <li>to provide evidence-based psychotherapy to individuals, couples and families </li>
                                   </ul>
                              </section>
                              <section className='w-full section' >
                                   <h3 className='about-h2 py-2'>Education</h3>
                                   <ul>
                                        <li>MSW,Columbia university </li>
                                        <li>BS in psychology, University of California, Los Angeles</li>
                                   </ul>
                              </section>
                              <section className='w-full section' >
                                   <h3 className='about-h2 py-2'>Linecensure</h3>
                                   <ul>
                                        <li>LCSW State of California </li>

                                   </ul>
                              </section>

                         </div>
                    </div>
               </motion.div>

               other info:)
               <br />
               <Footer />
          </div>
     )
}

export default About