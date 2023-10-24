import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Category, journalD } from '../Data'
import { useState } from 'react'
import { useEffect } from 'react'
import logo from "../../IMAGES/diannalogo.svg";
import Footer from '../Footer/Footer'
import { motion } from 'framer-motion'

const JournalCategories = () => {
     const params = useParams()
     const [Data, setData] = useState([])

     const fetchdata = () => {
          try {
               const fetcheddata = journalD.filter(item => item.filterId === parseInt(params.id))
               setData(fetcheddata)
          } catch (error) {
               console.log('error')
          }
     }
     useEffect(() => {
          fetchdata()
     }, [params.id])

     return (
          <div className='pt-[3.3rem]'>


               <section id='Mtbg' className='py-20 '>

                    <motion.article
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0 }}
                         transition={{ delay: 0.1, duration: 0.7 }}
                    >
                         <div className='flex justify-center'>  <img src={logo} alt="" /></div>
                         <br />
                         {Data.slice(0, 1).map((text) => {
                              return <div key={text.id} >
                                   <h1 className='box-h3 text-center'>{text.title}</h1>

                                   <p className='j-box-title px-6 sm:px-20 text-center block'>
                                        Explore our collecion of {text.title} Therapy Collection <br />
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque distinctio necessitatibus
                                        quasi error perferendis rem ut quaerat qui dignissimos dolore!
                                   </p>
                              </div>
                         })}
                    </motion.article>

               </section >


               {Data.length > 0 ?




                    <motion.div className='px-6 sm:px-12  py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 sm:gap-8 w-[100%] mt-[-5rem]'
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0 }}
                         transition={{ delay: 0.1, duration: 0.7 }}
                    >
                         {
                              Data.map((item) => {
                                   const { id, imgsrc, title, content, date } = item
                                   return <div key={id} className='journal-box  items-start'>
                                        <Link to={`/Journal/${id}`} >
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
                         <div >
                              <section className='w-full pt-20'>

                                   <h2 style={{ fontSize: "large" }} className='box-date'>Explore Other Categories</h2>

                                   <div className='py-4 grid grid-cols-1' >
                                        {
                                             Category.map((item) => {
                                                  const { id, name, filterId } = item
                                                  return <motion.div key={id} className='cate-box text-left py-2'
                                                       initial={{ x: 0 }}
                                                       whileHover={{ x: 25 }}
                                                       transition={{ stiffness: 300, }}
                                                  >
                                                       <Link to={`/Journal/category/${filterId}`}>  {name}</Link>
                                                  </motion.div>
                                             })
                                        }
                                   </div>

                                   <br />

                              </section>
                         </div>
                    </motion.div>


                    :
                    <p>category not found</p>
               }
               <Footer />
          </div >
     )
}

export default JournalCategories