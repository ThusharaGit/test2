import { useNavigate } from "react-router-dom"

function Home() {
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
    </div>
  )
}

export default Home
