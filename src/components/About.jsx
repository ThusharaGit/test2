import {useState} from 'react'
import Header from './Header'

function About({headerComponents}) {
  const [pageNo,setPageNo] = useState(1)
    return (
      <div className='app'>
      <Header headerComponents= {headerComponents} pageNo= {pageNo}/>
       About Component
      </div>
    )
  }
  
  export default About