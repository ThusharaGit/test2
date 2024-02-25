import {useState} from 'react'
import Header from './Header'
function Trips({headerComponents}) {
  const [pageNo,setPageNo] = useState(2) 
    return (
      <div className='app'>
        <Header headerComponents= {headerComponents} pageNo= {pageNo}/>
       Trips Component
      </div>
    )
  }
  
  export default Trips