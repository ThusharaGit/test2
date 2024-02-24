import './Header.css'

function Header({headerComponents}) {
 
    return (
      <div className='header_group'>
       <div className='header_all'style={{backgroundImage: `url(${headerComponents[0].Picture})`}}>
        <h1 className='header_text'>{headerComponents[0].Heading}</h1>
       </div>
      </div>
    )
  }
  
  export default Header
  