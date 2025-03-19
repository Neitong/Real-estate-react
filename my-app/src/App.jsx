import React from 'react'
import {DarkModeProvider} from './components/DarkModeContext.jsx'
import Header from './components/Header'
import './App.css'
import Hero from './section/Hero'
import About from './section/About'
import PopularArieas from './section/PopularAreas'
import Footer from './components/Footer'
import Services from './section/Services.jsx'
import Client from "./section/Client.jsx"
import Contact from "./section/Contact.jsx"




const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header/>
        <Hero/>
        <About></About>
        <PopularArieas></PopularArieas>
        <Footer></Footer>
        <Services></Services>
        <Client></Client>
        <Contact></Contact>
      </DarkModeProvider>
    </>
  )
}

export default App