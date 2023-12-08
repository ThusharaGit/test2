import { useNavigate } from "react-router-dom"
function Nav() {
    const navigate = useNavigate()
 
    return (
        <div className='nav'>
            <div className="logoDiv" onClick={() => navigate('/')}>
             <div className="logo">PADDLE</div>
             <div className="logoImage"></div>
             <div className="logo">XPLORER</div>
             
            </div>
            <button className="navBtn" onClick={() => navigate('/')}>HOME</button>
            <button className="navBtn" onClick={() => navigate('About')}>ABOUT</button>
            <button className="navBtn" onClick={() => navigate('Trips')}>TOURS</button>
            <button className="navBtn" onClick={() => navigate('FAQs')}>FAQs</button>
            <button className="navBtn" onClick={() => navigate('Contact')}>CONTACT</button>

        </div>

    )
}

export default Nav
