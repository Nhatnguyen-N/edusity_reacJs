import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState,setPlayState]=useState(false)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' tittle='What We Offer'/>
      <Programs/>
      <About setPlayState ={setPlayState}/>
      <Title subTitle='Gallery' tittle='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' tittle='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' tittle='Get in Touch'/>
    <Contact/>
    <Footer/>
      </div>
      {playState?<VideoPlayer playState={playState} setPlayState={setPlayState}/>:''}
      {/* <VideoPlayer playState={playState} setPlayState={setPlayState}/> */}
    </div>
  )
}

export default App