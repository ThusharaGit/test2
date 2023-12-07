// import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import FAQs from './components/FAQs'
import Home from './components/Home'

function App() {
 
  return (
    <div className='app'>
     <Nav/>
     <Routes>
     <Route path= '/' element= {<Home/>}/>
      <Route path= 'FAQs' element= {<FAQs/>}/>
     </Routes>
    </div>
  )
}

export default App
