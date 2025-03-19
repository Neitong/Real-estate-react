import React, { useEffect } from 'react'
// import { DarkModeProvider } from '../components/DarkModeContext'
// import Heroimg from '../assets/images/hero1.webp'
import AOS from '../'


const Hero = () => {
  useEffect( () => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });

  }, [])

  return (
    <div>Hero</div>
  )
}

export default Hero