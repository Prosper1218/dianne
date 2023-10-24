import { useState } from 'react'
import './App.css'
import NavigationBar from './assets/NavigationBar/NavigationBar'
import Lbackground from './assets/LandingBg/Lbackground'
import Difference from './assets/Difference/Difference'
import MiniTreatments from './assets/Treatments/MiniTreatments'
import Carousel from './assets/Carousel/Carousel'
import Gitouch from './assets/Get-in-touch/Gitouch'
import MiniJournal from './assets/Journal/MiniJournal'
import Footer from './assets/Footer/Footer'
import { Route, Routes } from "react-router-dom";
import MainTreatment from './assets/Treatments/MainTreatment'
import MainJournal from './assets/Journal/MainJournal'
import GitMain from './assets/Get-in-touch/GitMain'
import TreatmentDetails from './assets/Treatments/TreatmentDetails'
import JournalDetails from './assets/Journal/JournalDetails'
import JournalCategories from './assets/Journal/JournalCategories'
import About from './assets/About/About'
import { AnimatePresence, motion } from 'framer-motion'



function App({ isVisible }) {

  return (
    <>

      <NavigationBar />
      <Routes>
        <Route path='/' element={<Lbackground />} >
          <Route path='' element={<All />} />

        </Route>
        <Route path="/MTreatMent" element={<MainTreatment />} />
        <Route path="/MJournal" element={<MainJournal />} />
        <Route path="/GetInTouch" element={<GitMain />} />
        <Route path="/MTreatment/:id" element={<TreatmentDetails />} />
        <Route path="/Journal/:id" element={<JournalDetails />} />
        <Route path="/Journal/category/:id" element={<JournalCategories />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </>
  )
}

const All = () => {
  return <div>
    {/* <Lbackground /> */}
    <Difference />
    <MiniTreatments />
    <Carousel />
    <Gitouch />
    <MiniJournal />
    <Footer />
  </div>
}

export default App




{/* <NavigationBar />
<Lbackground />

<Difference />
<MiniTreatments />
<Carousel />
<Gitouch />
<MiniJournal />
<Footer /> */}