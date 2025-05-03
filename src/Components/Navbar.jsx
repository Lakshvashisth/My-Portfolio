
import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import logo from "../assets/lakshayvashisthlogo.jpg"
// import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
   <nav className="flex items-center justify-between py-6">
    <div className="fkex flex-shrink-0 items-center ">
        <a href="/" aria-label="Home">
        <img src={logo} className="mx-2"  width={60} height={40} 
        alt="logo"
        />
        </a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl"> 
    <a href="https://www.linkedin.com/in/lakshay-vashisth-103b18290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
    arial-label="LinkedIn">
      <FaLinkedin/>
      </a>
      <a href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    arial-label="GitHub">
      <FaGithub/>
      </a>
      <a href="https://www.instagram.com/lakshay._.vashisth/"
    target="_blank"
    rel="noopener noreferrer"
    arial-label="Instagram">
      <FaInstagram/>
      </a>
      {/* <a href="https://www.linkedin.com/in/lakshay-vashisth-103b18290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
    arial-label="Twitter">
      <FaSquareXTwitter/>
      </a> */}
    
    </div>
   
   </nav>
  )
}

export default Navbar
