import React from 'react'
import './Footer.css'
import logo from '../../IMAGES/whitelogo.svg'
import { findme, links, UltilityPages,CMS } from '../Data'
import { Link } from 'react-router-dom'

const Footer = () => {


     return (
          <div id='footer-background' className='pt-10'>

               <div className='flex justify-between  flex-columm sm:flex-row px-6 sm:px-12 pb-4'>
                    <div className='flex justify-center items-center gap-2' >
                         <img src={logo} alt="" className='w-[1.5rem] h-[1.5rem]' style={{ color: "white" }} /> <h2 id='FbrandName'>Dianne Russell</h2>
                    </div>

                    <div className='flex justify-center gap-2 sm:gap-4'>
                         {
                              findme.map((places) => {
                                   return <Link to={places.to} key={places.id}> <places.brandIcon size={25} color='white' /></Link>
                              })
                         }
                    </div>
               </div>
               <hr className=' mx-8 md:mx-12' />

               <div className='px-6 sm:px-12  py-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center gap-2 sm:gap-4 sm:gap-8 w-[100%]  items-start' >

                    <div className='journal-box  items-start'>
                         <div>
                              <h3 className='fbox-h3 pr-2'>Pages</h3>
                              <div className='flex flex-col items-start gap-3 text-white mt-5'>
                                   {
                                        links.map((link) => {
                                             const { id, name,to } = link
                                             return <Link to={to} key={id} className='fli'>{name}</Link>
                                        })
                                   }
                              </div>
                         </div>

                    </div>
                    <div className='journal-box  items-start' >
                         <div>
                              <h3 className='fbox-h3 pr-2'>Ultility pages</h3>
                              <div className='flex flex-col items-start gap-3 text-white mt-5'>
                                   {
                                        UltilityPages.map((link) => {
                                             const { id, name } = link
                                             return <Link to="#" key={id} className='fli'>{name}</Link>
                                        })
                                   }
                              </div>
                         </div>

                    </div>
                    <div className='journal-box  items-start' >
                         <div>
                              <h3 className='fbox-h3 pr-2'>cms</h3>
                              <div className='flex flex-col items-start gap-3 text-white mt-5'>
                                        {
                                             CMS.map((link) => {
                                                  const { id, name } = link
                                                  return <Link to="#" key={id} className='fli'>{name}</Link>
                                             })
                                        }
                                   </div>
                         </div>

                    </div>

               </div>
               <h3 className="fbox-h3 text-center">built by <Link className="fli pb-2" style={{textDecoration:"underline", textDecorationColor:"white"}}>Prosper Williams</Link> @2023</h3>
          </div>
     )
}

export default Footer