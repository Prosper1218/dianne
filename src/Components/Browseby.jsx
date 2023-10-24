import React from 'react'
import { Category } from '../assets/Data'
// import browsebg from "../IMAGES/browsebg.webp"
import { Grid } from '@mantine/core'
import { Link } from 'react-router-dom'

const Browseby = ({ browsebg }) => {
     return (
          <div>
               <div className='flex justify-center relative'>
                    <img src={browsebg} alt="browse" className=' w-full sm:w-[90%] h-[20rem] sm:h-[18rem] mt-[6rem]' id='browsebg' />
               </div>
               <section className='flex justify-center'>
                    <div className='browse-category w-[90%] sm:w-[80%] lg:w-[55rem] h-auto absolute top-8 rounded-sm'>
                         <h2 id="cateh2">browse by category</h2>

                         <Grid justify='space-evenly' className='py-4' >
                              {
                                   Category.map((item) => {
                                        const { id, name, filterId } = item
                                        return <Grid.Col key={id} span={{ base: 12, sm: 5.7, md: 5, lg: 5 }} className='cate-box text-center'>
                                             <Link to={`/Journal/category/${filterId}`}>    {name}</Link>
                                        </Grid.Col>
                                   })
                              }
                         </Grid>

                         <br />
                    </div>

               </section>
               
          </div>
     )
}

export default Browseby