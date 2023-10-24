import React from 'react'
import Intro from './Intro'
import { Button, Grid } from '@mantine/core'
import rightA from "../../IMAGES/right-arrow.png";
import { Link } from 'react-router-dom';
import { contents } from '../Data';
import { motion } from 'framer-motion';

const MiniTreatments = () => {



     return (
          <div className=' pt-12 pb-12'>
               <motion.section style={{ borderBottom: "1px solid#418a91" }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
               >
                    <Intro heading="Treatments" />
               </motion.section>

               <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
               >
                    <Grid justify='center' className='px-1 py-8'>

                         {
                              contents.slice(0, 6).map((item) => {
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
               </motion.section>
               <div className='flex justify-center'><Link to="/MTreatMent">  <Button variant="outline" id='SABTN' className='px-10'>See All Treatment</Button></Link></div>
          </div>
     )
}

export default MiniTreatments

// soft