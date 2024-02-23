import './Footer.css'

function Footer() {
 
    return (
      <div className='app'>
       <div className='footer_container'>
        <div className='left'>
            <div className='left_texts'>
            <h1>SITE MAP</h1>
            <a href=''>Home</a>
            <a href=''>About</a>
            <a href=''>Tours</a>
            <a href=''>FAQs</a>
            </div>

        </div>
        <div className='middle'>
            <div></div>
            <div className='middle_box'>
              <h4>Designed and developed for PaddleXplorer</h4>  
              <h4>by <span className='school_name'>ReDI School</span></h4>
              <h4>in Munich, Germany</h4>  
            </div>
            <h5>copywright 2023. All rights reserved.</h5>
        </div>
        <div className='right'>
            <div className='right_box'>
                <h1>CONTACT US</h1>
                <h4>Clubul Copiilor Năsăud</h4>
                <h4>DN17C 9, Nasaud 425200, </h4>
                <h4>Romania</h4>
                <h5>club_nasaud@yahoo.com</h5>
                <h5>+040263361447</h5>
            </div>
        </div>
       </div>
      </div>
    )
  }
  
  export default Footer