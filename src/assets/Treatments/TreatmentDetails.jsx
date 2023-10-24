import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Category, TreatmentsCategory, contents } from '../Data'
import { useState } from 'react'
import logo from "../../IMAGES/diannalogo.svg";
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';


const TreatmentDetails = () => {
     const [Data, setData] = useState({});
     const params = useParams();


     useEffect(() => {
          const fetchData = () => {
               const foundData = contents.find(item => item.id === parseInt(params.id));
               if (foundData) {
                    setData(foundData);
               } else {
                    console.log('Data not found');
               }
          };

          fetchData();
     }, [params.id]);



     return (
          <div className='pt-16'>
               <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.7 }}
               >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                         <div style={{ display: "flex", justifyContent: "right", }} id='picbg'>
                              <img src={Data.imgsrc} alt="" className='dianneh rounded-t-full lg:-[60cm]' />
                         </div>
                         <div className='pt-4 md:pt-[11rem] lg:pt-[13rem] px-4 items-center  pt-0 sm:pt-40 relative'  >
                              <div className='container xl:pt-[4rem] md:absolute bottom-0' >
                                   <img src={logo} alt="" />
                                   <p id='text'>Treatments</p>
                                   <h1 id='dh1' className=' pr-8 xl:pr-40'>
                                        {Data.title}
                                   </h1>
                                   <p id='desc' className='pr-20 xl:pr-40'>
                                        {Data.content}
                                   </p>
                              </div>
                         </div>
                    </div>
               </motion.div>


               <div className='flex justify-center mt-16'>

                    <div className="flex w-[75rem] justify-center flex-col sm:flex-row-reverse gap-8 px-4" >

                         <motion.div className='w-full flex-1 sm:w-[55%] pr-0 sm:pr-2 mb-4'
                              initial={{ opacity: 0, y: 60 }}
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

                              <h3 className='box-h3 '>Understanding Depression:Unveiling the silent struggle</h3>
                              <p className='journal-detail-text'>
                                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit maiores atque quis totam unde cum quas, explicabo aperiam illo nemo voluptatem omnis
                                   veritatis obcaecati vero nulla, saepe aut, iusto quo nam excepturi quam ullam aspernatur? Numquam placeat molestiae minus consequatur.
                              </p>

                         </motion.div>

                         <motion.div className='w-full flex-initial sm:w-[30%] flex flex-col items-start '
                              initial={{ opacity: 0, x: -60 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0 }}
                              transition={{ delay: 0.3, duration: 0.7 }}
                         >

                              <section className='w-full'>

                                   <h2 style={{ fontSize: "large" }} className='box-date'>Explore Categories</h2>

                                   <div className='py-4 grid grid-cols-1' >
                                        {
                                             TreatmentsCategory.map((item) => {
                                                  const { id, name, } = item
                                                  return <motion.div key={id} className='cate-box text-left py-2'
                                                       initial={{ x: 0 }}
                                                       whileHover={{ x: 25 }}
                                                       transition={{ stiffness: 300 }}
                                                  >
                                                       <Link>  {name}</Link>
                                                  </motion.div>
                                             })
                                        }
                                   </div>

                                   <br />

                              </section>
                         </motion.div>
                    </div>
               </div>

               other info:)

               <Footer />
          </div>
     )
}

export default TreatmentDetails