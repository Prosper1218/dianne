import React from 'react'
import './Treatments.css'

const Intro = ({ heading }) => {
     return (
          <div className=' text-center px-4 sm:px-32'>
               <h2 id='mh2'>{heading}</h2>
               <p id='tp' className='pb-4' >As a licensed psychologist, I offer a range of therapy options tailored to your <br />
                    unique needs and goals. Together, we can work towards your well-being <br />
                    through online counseling services.</p>
          </div>
     )
}

export default Intro



//how to change text size in tailwind?