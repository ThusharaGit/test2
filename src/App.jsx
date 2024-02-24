// import { useState } from 'react'
import data from './assets/data.json'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import FAQs from './components/FAQs'
import Home from './components/Home'
import About from './components/About'
import Trips from './components/Trips'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
 
  return (
    <div className='app'>
     <Nav/>
     <Header headerComponents={data.headerComponents}/>
     <Routes>
     <Route path= '/' element= {<Home parentsComments={data.parentsComents}/>}/>
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
