import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import { GiNautilusShell, GiHockey, GiCrystalGrowth } from "react-icons/gi";
import { FaHatWizard, FaGem, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoNavigateOutline } from "react-icons/io5"

import { Navbar, Nav } from 'rsuite';

export default function Index() {
  const user = useOptionalUser();  

  return (
    <div className="bg-black font-quicksand">      
      <header className="h-28 bg-black-500 flex justify-between text-white mb-10 pb-6">
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
        {/* <div className="flex justify-center items-center text-xl space-x-8 mx-6 text-white"> */}
        <Navbar>
          <Nav className="flex flex-row text-2xl space-x-8 text-white m-8">
            <Nav.Menu  className="hover:text-blue-300"title="Projects">
              <Link to="/comb"><Nav.Item className="text-sm text-white hover:text-blue-300 cursor-pointer">Comb</Nav.Item></Link>
              <Link to="/wizard"><Nav.Item className="text-sm text-white hover:text-blue-300 cursor-pointer">Shift Wizard</Nav.Item></Link>
              <Link to="/hockey"><Nav.Item className="text-sm text-white hover:text-blue-300 cursor-pointer">Hockey App</Nav.Item></Link>
            </Nav.Menu>           
            <Nav.Item className="hover:text-blue-300"><a href="https://www.canva.com/design/DAFSipFYtMw/mjx-WAPqeDIpldOUOlGjnQ/view?utm_content=DAFSipFYtMw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"><div>Resume</div></a></Nav.Item>
            <Nav.Item className="hover:text-blue-300"><a href="https://github.com/T-Pirozzini"><FaGithub size={32}/></a></Nav.Item>
            <Nav.Item className="hover:text-blue-300"><a href="https://www.linkedin.com/in/travis-pirozzini-2522b5115/"><FaLinkedin size={32} /></a></Nav.Item>          
          </Nav>
        </Navbar>
        {/* </div> */}
      </header>      
    
      <div className="flex flex-col items-start text-white">

        <div className="self-start m-10">
          <div className="flex justify-between m-2">
            <div className="m-4">
              <div className="flex items-center p-2">
                <GiNautilusShell color="#B74F6F" size={48}/>
                <h3 className="p-4 font-alice text-4xl">Comb</h3>
              </div>
              <div className="max-w-xl">
                <p className="text-lg italic pb-4">Your Shellfish Harvesting Companion</p>
                <div className="text-md pb-4"><span>TECH: </span>Figma/JS/React-Native/Firebase/Google-maps</div>
                <Link to="/comb">
                  <div className="flex items-center group cursor-pointer">
                    <IoNavigateOutline size={32} className="group-hover:animate-ping" />
                    <div className="p-2">Go to project page</div>
                  </div>
                </Link>
                <a href="https://github.com/T-Pirozzini/comber-app">
                  <div className="flex items-center group cursor-pointer">
                    <BiCodeAlt size={32} className="group-hover:animate-ping" />                
                    <div className="pl-2">See the code</div>
                  </div>
                </a>
              </div>        
            </div>
            <div className="pt-4">
              <video  width="400" preload="auto" autoPlay loop muted>
                <source src="../assets/comb-demo.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="w-1/3 self-center pb-6">
              <div className="font-bold text-center text-lg">Why Programming?</div>
              <div className="p-2 text-center">You know that common movie scene where a programmer furiously types on a keyboard and then magic happens? I want to possess that magic.</div>
            </div>
          </div>
        </div>

        <div className="self-end m-10 mt-24 mb-24">
          <div className="flex justify-between m-2">
            <div className="w-1/3 self-center pb-6">
              <div className="font-bold text-center text-lg">Early Passion</div>
              <div className="p-2 text-center">While I was younger I would make websites with Netscape Navigator, animate in Macromedia Flash and build custom scenarios in Age of Empires 2, but after high school I pursued my other interest, athletics. This is a story of rekindling passion.</div> 
            </div>
            <div className="m-8">
              <video src="../assets/shift-wizard-arcade-demo.mp4" width="400" autoPlay muted loop></video>
            </div>        
            <div className="flex flex-col m-4">
              <div className="flex mt-6">
                <h3 className="p-4 pl-0 text-4xl font-vt323">Shift Wizard</h3>
                <FaHatWizard color="#3143F2" size={48}/>
              </div>        
              <p className="text-lg italic">Travel the board while absorbing elemental powers.</p>
              <div className="flex">
                <FaGem color="6CE5FB" size={24} />
                <p className="text-lg italic pb-4 pl-2">Cast spells to obtain the ultimate power crystal!</p>
              </div>
              <div className="text-md pb-4"><span>TECH: </span>GameMaker Studio 2</div>
              <Link to="/wizard">
                <div className="flex items-center group cursor-pointer">
                  <IoNavigateOutline size={32} className="group-hover:animate-ping" />
                  <div className="p-2">Go to project page</div>
                </div>
              </Link>
              <a href="https://github.com/T-Pirozzini/Shift-Wizard---GM48">
                <div className="flex items-center group cursor-pointer">
                  <BiCodeAlt size={32} className="group-hover:animate-ping" />                
                  <div className="pl-2">See the code</div>
                </div>
              </a>
            </div>         
          </div>        
        </div>

        <div className="self-start m-10">
          <div className="flex justify-between m-2">
            <div className="m-4">
              <div className="flex items-center p-2">
                <GiHockey color="9B6C19" size={48}/>
                <h3 className="p-4 text-4xl font-oswald">Hockey Dashboard</h3>
              </div>        
              <p className="text-lg italic pb-4">I updated my local hockey leagues website</p>
              <div className="text-md pb-4"><span>TECH: </span>HTML/CSS/JS/React/Firebase</div>
                <Link to="/hockey">
                  <div className="flex items-center group cursor-pointer">
                    <IoNavigateOutline size={32} className="group-hover:animate-ping" />
                    <div className="p-2">Go to project page</div>
                  </div>
                </Link>
                <a href="https://github.com/T-Pirozzini/Sports-Dashboard">
                  <div className="flex items-center group cursor-pointer">
                    <BiCodeAlt size={32} className="group-hover:animate-ping" />                
                    <div className="pl-2">See the code</div>
                  </div>
                </a>
                              
            </div>
            <div className="m-4">
              <video src="../assets/hockey-dashboard-demo.mp4" width="600" autoPlay muted loop></video>
            </div>
            <div className="w-1/3 self-center pb-6">
              <div className="font-bold text-center text-lg">My Journey...</div>
              <div className="p-2 text-center">I am a (mostly) self-taught Full-Stack Web Developer. In 2022, I completed a Diploma in Web Development at Lighthouse Labs in Vancouver, BC and a UI/UX Certificate from Google/Coursera.</div>
            </div>        
          </div>        
        </div>        
      </div>

    </div>
  );
}
