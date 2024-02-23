// import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import FAQs from './components/FAQs'
import Home from './components/Home'
import About from './components/About'
import Trips from './components/Trips'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
 
  return (
    <div className='app'>
     <Nav/>
     <Routes>
     <Route path= '/' element= {<Home/>}/>
      <Route path= 'FAQs' element= {<FAQs/>}/>
      <Route path= 'About' element= {<About/>}/>
      <Route path= 'Trips' element= {<Trips/>}/>
      <Route path= 'Contact' element= {<Contact/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
