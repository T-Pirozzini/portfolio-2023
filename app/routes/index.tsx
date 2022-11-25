import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import { GiNautilusShell, GiHockey } from "react-icons/gi";
import { FaHatWizard, FaGem } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoNavigateOutline } from "react-icons/io5"

import Nav from "../nav"

export default function Index() {
  const user = useOptionalUser(); 

  return (
    <div className="bg-black font-quicksand">    
    <Nav />
      <div className="flex flex-col items-start text-white">        
        <div className="self-start m-10">
          <div className="flex justify-between m-2">
            <div className="m-4">
              <div className="flex items-center p-2">
                <GiNautilusShell color="#B74F6F" size={48}/>
                <h3 className="p-4 font-alice text-5xl">Comb</h3>
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
                <h3 className="p-4 pl-0 text-5xl font-vt323">Shift Wizard</h3>
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
