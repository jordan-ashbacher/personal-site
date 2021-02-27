import "./Home.css"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="titleContainer">
                <h1 className="appTitle">Jordan Ashbacher</h1>
            </div>
            <div className="linkContainer">
                <Link to="/work" className="linkItem">
                    <h1>work</h1>
                </Link>
                <Link to="/about" className="linkItem">
                    <h1>about</h1>
                </Link>
                <Link to="/contact" className="linkItem">
                    <h1>contact</h1>
                </Link>
            </div>
        </div>
    )
}

export default Home
