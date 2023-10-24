import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import { Category, journalD } from '../Data'
import { Grid } from '@mantine/core'
import Browseby from '../../Components/Browseby'
import Footer from '../Footer/Footer'
import { isActive } from '@tiptap/react'
import { motion } from 'framer-motion'

const JournalDetails = () => {
     const [Journal, setJournal] = useState({})
     const params = useParams()

     const fetchdata = () => {
          try {
               const findJournal = journalD.find((item) => item.id === parseInt(params.id))
               setJournal(findJournal)
          } catch (error) {
               console.log('error')
          }
     }

     useEffect(() => {
          fetchdata()


     }, [params.id])

     return (
          <div className='pt-[3.7rem]'>
               <div id='Mtbg' className='pt-28 pb-40'>
                    <motion.section
                         initial={{ opacity: 0, y: 60 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0 }}
                         transition={{ delay: 0.1, duration: 0.7 }}
                    >
                         <section className=' flex justify-center gap-4 items-center'>
                              <div className='flex py-1 px-4 rounded-sm items-center' style={{ width: "fit-content", background: " #ffffff" }}>
                                   <p className='j-box-title items-center pt-1'>
                                        {Journal.title}
                                   </p>
                              </div>
                              <div>
                                   <p className='box-date'>{Journal.date}</p>
                              </div>
                         </section>

                         <article >
                              <h3 className='box-h3 pt-8 text-center px-4'> {Journal.content}</h3>
                         </article>
                    </motion.section>
               </div>

               <section className='flex justify-center mt-[-6rem]'>
                    <motion.div className=' mx-4  w-[100rem] md:w-[75rem] '
                         initial={{ opacity: 0, y: 80 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0 }}
                         transition={{ delay: 0.1, duration: 0.7 }}
                    >
                         <img src={Journal.imgsrc} alt={Journal.title} id='journalD-img' />
                    </motion.div>
               </section>
               <br />

               <div className='flex justify-center mt-16'>

                    <div className="flex w-[75rem] justify-center flex-col sm:flex-row gap-8 px-4" >

                         <motion.div className='w-full flex-1 sm:w-[55%] pr-0 sm:pr-2 mb-4 '
                              initial={{ opacity: 0, y: 70 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: 0.3, duration: 0.7 }}
                         >
                              <p className='journal-detail-text'>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi, hic animi modi dicta rem natus laborum. Explicabo dignissimos
                                   ipsam rerum, minima porro corporis, eaque consequatur suscipit facilis possimus hic ut, temporibus excepturi cum aperiam animi debitis molestiae?
                                   Quo vel nemo alias ipsum perspiciatis minus iusto impedit, delectus earum omnis. Optio laborum sequi facilis dolor laboriosam, blanditiis dignissimos
                                   qui suscipit numquam amet ducimus? Necessitatibus dolores delectus sint ullam quos id laudantium dolore. Repudiandae vitae iure exercitationem laborum

                              </p>

                              <h3 className='box-h3 py-4'>Understanding Depression:Unveiling the silent struggle</h3>
                              <p className='journal-detail-text py-4'>
                                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit maiores atque quis totam unde cum quas, explicabo aperiam illo nemo voluptatem omnis
                                   veritatis obcaecati vero nulla, saepe aut, iusto quo nam excepturi quam ullam aspernatur? Numquam placeat molestiae minus consequatur.
                              </p>

                         </motion.div>

                         <motion.div className='w-full flex-initial sm:w-[30%] flex flex-col items-start '
                              initial={{ opacity: 0, x: 100 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: 0.3, duration: 0.7 }}
                         >

                              <section className='w-full'>

                                   <h2 style={{ fontSize: "large" }} className='box-date'>Explore Categories</h2>

                                   <div className='py-4 grid grid-cols-1' >
                                        {
                                             Category.map((item) => {
                                                  const { id, name, filterId } = item
                                                  return <motion.div key={id} className='cate-box text-left py-2'
                                                       initial={{ x: 0 }}
                                                       whileHover={{ x: 25 }}
                                                       transition={{stiffness:300}}
                                                  >

                                                       <NavLink
                                                            to={`/Journal/category/${filterId}`}>
                                                            {name}
                                                       </NavLink>
                                                  </motion.div>
                                             })
                                        }
                                   </div>

                                   <br />

                              </section>
                         </motion.div>
                    </div>
               </div>


               other info :)
               <br />
               <br />
               <br />
               <Footer />
          </div>
     )
}

export default JournalDetails