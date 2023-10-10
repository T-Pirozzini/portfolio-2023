import { Link } from "@remix-run/react";
import { Navbar, Nav } from 'rsuite';

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function nav() {
  return (
    <div className="grid grid-cols-2 bg-black-500 text-white p-4">
        <Link to="/" className="hover:animate-pulse cursor-pointer">
          <div className="">        
            <div className="flex lg:items-center">
              <img src="../assets/emo.png" alt="profile-logo" className="w-1/2 border-2 rounded-full md:w-1/3 lg:w-24" />
              <div className="text-3xl self-end md:text-6xl font-normal font-quicksand p-2 lg:text-7xl">Travis Pirozzini</div>
            </div>       
            <div className="lg:flex lg:flex-col lg:items-end lg:justify-start lg:col-span-1">
              <div className="md:text-2xl lg:text-4xl lg:text-end font-thin font-quicksand ">Full Stack Developer</div>
              <div className="md:text-2xl lg:text-4xl lg:text-end font-thin">UI/UX Designer</div>
            </div>
          </div>
        </Link>
                
        <Navbar>
          <Nav className="flex flex-col items-end lg:items-start space-y-2 lg:flex-row lg:space-x-4 lg:justify-end lg:space-y-0">
            <div className="flex space-x-4">
              <Nav.Item href="https://github.com/T-Pirozzini" className="hover:text-blue-300"><FaGithub size={32}/></Nav.Item>
              <Nav.Item href="https://www.linkedin.com/in/travis-pirozzini-2522b5115/" className="hover:text-blue-300"><FaLinkedin size={32} /></Nav.Item>          
            </div>
            <Nav.Item href="https://www.canva.com/design/DAFfFtRCaE4/VfaF_RbI8jRvQoqwJ5rNGQ/view?utm_content=DAFfFtRCaE4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className="text-lg hover:text-blue-300 lg:text-2xl"><div>Resume</div></Nav.Item>
            <div>
              <Nav.Menu  className="text-lg hover:text-blue-300 lg:text-2xl" title="Projects">
              <Link to="/rts"><Nav.Item className="text-sm text-white hover:text-blue-300 cursor-pointer">R.T.S.</Nav.Item></Link>
              <Link to="/forager"><Nav.Item className="text-sm text-white hover:text-blue-300 cursor-pointer">Forager</Nav.Item></Link>
              <Link to="/soulo"><Nav.Item className="text-sm text-white hover:text-blue-300 cursor-pointer">Soulo</Nav.Item></Link>
                <Link to="/comb"><Nav.Item className="text-sm text-white hover:text-blue-300 cursor-pointer">Comb</Nav.Item></Link>
                <Link to="/wizard"><Nav.Item className="text-sm text-white hover:text-blue-300 cursor-pointer">Shift Wizard</Nav.Item></Link>
                <Link to="/hockey"><Nav.Item className="text-sm text-white hover:text-blue-300 cursor-pointer">Hockey App</Nav.Item></Link>
              </Nav.Menu>         
            </div>
          </Nav>
        </Navbar>        
      </div>      
  )
}
