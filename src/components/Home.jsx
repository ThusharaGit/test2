function Home() {

    return (
        <div className='app'>
            <div className="mainDiv ">
                <div className="sloganDiv">
                    <h2 className="sloganText">EMPOWERING YOUTH</h2>
                    <p>... one paddle at a time!</p>
                    <button className="bookAtripBtn">BOOK A TRIP</button>
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
                        <button className="learnMoreBtn">go</button>
                    </div>
                </div>

            </div>

            <div className="specialDiv">
                <h2>WHAT MAKES TRIPS SPECIAL</h2>
                <div className="specialWrapper">
              <div className="special">
                <div className="specialImage"></div>
                <h3 className="specialHeading">FRIENDSHIP</h3>
                <p className="specialText">Lorem  hic sapiente sit harum asperiores l</p>
              </div>
              <div className="special">
                <div className="specialImage"></div>
                <h3 className="specialHeading">NATURE</h3>
                <p className="specialText"> accusamus, t nulla hic sapiente sit harum asperiores  </p>
              </div>
              <div className="special">
                <div className="specialImage"></div>
                <h3 className="specialHeading">LIFE SKILLS</h3>
                <p className="specialText">Lorem  n harum asperiores libero reiciendis </p>
              </div>
              <div className="special">
                <div className="specialImage"></div>
                <h3 className="specialHeading">CONFIDENCE</h3>
                <p className="specialText">Lor hic sapiente sit harum asperiores lib </p>
              </div>
              </div>
            </div>
        </div>
    )
}

export default Home
