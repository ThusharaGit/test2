import './Home.css'
import { useNavigate } from "react-router-dom"
import Carausel from "./Carousel"

function Home({parentsComments}) {
  const navigate = useNavigate()

  return (
    <div className='app'>
      <div className="mainDiv ">
        <div className="sloganDiv">
          <h2 className="sloganText">EMPOWERING YOUTH</h2>
          <p>... one paddle at a time!</p>
          <button className="bookAtripBtn" onClick={() => navigate('Contact')}>BOOK A TRIP</button>
        </div>
        <div className="sloganimageDiv"></div>
      </div>

      <div className="mainDiv ">
        <div className="missionimageDiv"></div>
        <div className="missionDiv">
          <h2 className="missionText">OUR MISSION</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laboriosam commodi nemo harum totam consequuntur odit odio illum soluta quisquam similique voluptate ratione cumque dolor aperiam dolorum necessitatibus distinctio! Harum!</p>
          <div className="learnMoreDiv">
            <h2 className="learnMoreText">LEARN MORE</h2>
            <button className="learnMoreBtn" onClick={() => navigate('About')}>go</button>
          </div>
        </div>

      </div>

      <div className="specialDiv">
        <h2>WHAT MAKES TRIPS SPECIAL</h2>
        <div className="specialWrapper">
          <div className="special">
            <div id="specialImage1" className="specialImage"></div>
            <h3 className="specialHeading">FRIENDSHIP</h3>
            <p className="specialText">Shared adventures form lasting bonds and create unforgettable memories</p>
          </div>
          <div className="special">
            <div id="specialImage2" className="specialImage"></div>
            <h3 className="specialHeading">NATURE</h3>
            <p className="specialText">An outdoor experience that fosters a deep appreciation for the environment  </p>
          </div>
          <div className="special">
            <div id="specialImage3" className="specialImage"></div>
            <h3 className="specialHeading">LIFE SKILLS</h3>
            <p className="specialText">Learn teamwork, communication, and resilience through kayaking challenges </p>
          </div>
          <div className="special">
            <div id="specialImage4" className="specialImage"></div>
            <h3 className="specialHeading">CONFIDENCE</h3>
            <p className="specialText">Master kayaking to boost self-trust and readiness to tackle new adventures </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <Carausel>
          <img src="https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg?cs=srgb&dl=pexels-inge-wallumr%C3%B8d-126407.jpg&fm=jpg" alt="" />
          <img src="https://tractive.com/blog/wp-content/uploads/2021/11/section_image_cat_hunting_02.jpg" alt="" />
          <img src="https://www.dailypaws.com/thmb/EI9JG7yhsQRB_Vy98q639tIzuzY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-green-eyes-1163267941-2000-7a2e68c4b2e34bd2b31573ce017f0583.jpg" alt="" />
        </Carausel>

      </div>
      <div className='comments'>
        <div className='heading_and_comments'>
        <h2 className='comments_heading'>WHAT PARENTS SAY ABOUT OUR PROJECT:</h2>
        <div className='comments_div'>
          <h4>{parentsComments[0].desc}</h4>
          <h4>{parentsComments[0].name}</h4>
          <div className='all_circles'>
            <button className='circle'></button>
            <button className='circle'></button>
            <button className='circle'></button>
            <button className='circle'></button>
          </div>
        </div>
        </div>
        <h2 className='trips_coming_heading'><span className='new'>NEW</span> TRIPS ARE COMING!</h2>
        <div className='trips_coming_text'>
          <h4>Ready to embark on an unforgettable adventure? </h4>
          <h4>Contact us today to book your child's spot on our next kayaking journey.</h4>
        </div>
      </div>
      
    </div>
  )
}

export default Home
