import { Link } from "@remix-run/react";
import { Navbar, Nav } from 'rsuite';

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function nav() {
  return (
    <div className="grid grid-cols-2 bg-black-500 text-white p-4">
        <Link to="/" className="hover:animate-pulse cursor-pointer">
          <div className="">        
            <div className="flex">
              <img src="../assets/emo.png" alt="profile-logo" className="w-1/2 border-2 rounded-full" />
              <div className="text-3xl self-end md:text-6xl lg:text-6xl font-normal font-quicksand p-2">Travis Pirozzini</div>
            </div>       
            <div className="self-end">
              <div className="md:text-2xl lg:text-4xl font-thin font-quicksand ">Full Stack Developer</div>
              <div className="md:text-2xl lg:text-4xl font-thin">UI/UX Designer</div>
            </div>
          </div>
        </Link>
                
        <Navbar>
          <Nav className="flex flex-col items-end space-y-2 relative">
            <div className="flex space-x-4">
              <Nav.Item href="https://github.com/T-Pirozzini" className="hover:text-blue-300"><FaGithub size={32}/></Nav.Item>
              <Nav.Item href="https://www.linkedin.com/in/travis-pirozzini-2522b5115/" className="hover:text-blue-300"><FaLinkedin size={32} /></Nav.Item>          
            </div>
            <Nav.Item href="https://www.canva.com/design/DAFSipFYtMw/mjx-WAPqeDIpldOUOlGjnQ/view?utm_content=DAFSipFYtMw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className="text-lg hover:text-blue-300"><div>Resume</div></Nav.Item>
            <Nav.Menu  className="text-lg hover:text-blue-300 relative" title="Projects">
              <Link to="/comb"><Nav.Item className="text-sm pt-0 text-white hover:text-blue-300 cursor-pointer absolute">Comb</Nav.Item></Link>
              <Link to="/wizard"><Nav.Item className="text-sm pt-4 text-white hover:text-blue-300 cursor-pointer absolute">Shift Wizard</Nav.Item></Link>
              <Link to="/hockey"><Nav.Item className="text-sm pt-8 text-white hover:text-blue-300 cursor-pointer absolute">Hockey</Nav.Item></Link>
            </Nav.Menu>           
          </Nav>
        </Navbar>        
      </div>      
  )
}
