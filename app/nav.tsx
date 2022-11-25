import { Link } from "@remix-run/react";
import { Navbar, Nav } from 'rsuite';

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function nav() {
  return (
    <div className="h-28 bg-black-500 flex justify-between text-white mb-10 pb-6">
        <Link to="/" className="flex justify-between hover:animate-pulse cursor-pointer">
          <div className="flex">        
          <div className="flex">
            <img src="../assets/emo.png" alt="profile-logo" className="m-2 border-2 rounded-full" />
            <div className="text-6xl self-center font-normal font-quicksand">Travis Pirozzini</div>
          </div>
       
          <div className="pl-6 self-end">
            <div className="text-4xl font-thin font-quicksand ">Full Stack Developer</div>
            <div className="text-4xl font-thin">UI/UX Designer</div>
          </div>
        </div>
        </Link>
                
        <Navbar>
          <Nav className="flex flex-row text-2xl space-x-8 text-white m-8">
            <Nav.Menu  className="hover:text-blue-300"title="Projects">
              <Link to="/comb"><Nav.Item className="text-sm text-white hover:text-blue-300 cursor-pointer">Comb</Nav.Item></Link>
              <Link to="/wizard"><Nav.Item className="text-sm text-white hover:text-blue-300 cursor-pointer">Shift Wizard</Nav.Item></Link>
              <Link to="/hockey"><Nav.Item className="text-sm text-white hover:text-blue-300 cursor-pointer">Hockey App</Nav.Item></Link>
            </Nav.Menu>           
            <Nav.Item href="https://www.canva.com/design/DAFSipFYtMw/mjx-WAPqeDIpldOUOlGjnQ/view?utm_content=DAFSipFYtMw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className="hover:text-blue-300"><div>Resume</div></Nav.Item>
            <Nav.Item href="https://github.com/T-Pirozzini" className="hover:text-blue-300"><FaGithub size={32}/></Nav.Item>
            <Nav.Item href="https://www.linkedin.com/in/travis-pirozzini-2522b5115/" className="hover:text-blue-300"><FaLinkedin size={32} /></Nav.Item>          
          </Nav>
        </Navbar>        
      </div>      
  )
}
