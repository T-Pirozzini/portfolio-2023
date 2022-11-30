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


      <div className="flex flex-col items-center justify-center text-white lg:m-4">

        <div className="grid grid-cols-1 items-center justify-center m-2 lg:grid-cols-3 lg:pt-12">

          {/* grid-col-1 */}
          <div className="m-4 border-t-2 flex flex-col justify-center items-center lg:border-t-0 lg:flex-row">        
            <div>
              <div className="flex items-center justify-center">
                <GiNautilusShell color="#B74F6F" size={48}/>
                <h3 className="p-4 font-alice text-5xl">Comb</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-md italic pb-4 lg:text-xl">Your Shellfish Harvesting Companion</p>
                <div className="text-sm pb-4"><span>TECH: </span>Figma/JS/React-Native/Firebase/Google-maps</div>
              </div>
              <Link to="/comb" className="flex group items-start cursor-pointer">                  
                  <IoNavigateOutline size={32} className="group-hover:animate-ping" />
                  <div className="p-2">Go to project page</div>
              </Link>
              <a href="https://github.com/T-Pirozzini/comber-app">
                <div className="flex items-start group cursor-pointer">
                  <BiCodeAlt size={32} className="group-hover:animate-ping" />                
                  <div className="pl-2">See the code</div>
                </div>
              </a>
            </div>
          </div>

            {/* grid-col-2 */}
            <div className="flex justify-center">
              <div className="pt-4">
                <video  width="400" preload="auto" autoPlay loop muted>
                  <source src="../assets/comb-demo.mp4" type="video/mp4" />
                </video>
              </div> 
            </div>        

            {/* grid-col-3 */}
            <div className="self-center border-t-2 m-4 lg:border-t-0">
              <div className="font-bold text-center text-lg pt-4">Why Programming?</div>
              <div className="text-center">You know that common movie scene where a programmer furiously types on a keyboard and then magic happens? I want to possess that magic.</div>
            </div>

        </div>
      </div> 


      <div className="flex flex-col items-center justify-center text-white lg:pt-12">

        <div className="grid grid-cols-1 m-2 lg:grid-cols-3 lg:pt-12">

          {/* gird-col-1 */}
          <div className="self-center pb-6">
            <div className="font-bold text-center text-lg">Early Passion</div>
            <div className="text-center">In my youth, I would create websites with Netscape Navigator, animate in Macromedia Flash and build custom scenarios in Age of Empires 2, but after high school I pursued my other interest, athletics. This is a story of rekindling passion.</div> 
          </div>

          {/* grid-col-2 */}
          <div className="m-4 border-t-2 flex flex-col justify-center items-center lg:border-t-0 lg:flex-row">
            <div className="p-4">
              <video src="../assets/shift-wizard-arcade-demo.mp4" width="400" autoPlay muted loop></video>
            </div> 
          </div>

          {/* grid-col-3*/}
          <div className="flex flex-col justify-center items-center">
            <div className="flex mt-6">
              <h3 className="p-4 pl-0 text-4xl font-vt323">Shift Wizard</h3>
              <FaHatWizard color="#3143F2" size={48}/>
            </div>        
            <p className="text-sm italic pb-4 lg:text-xl">Travel the board while absorbing elemental powers. Cast spells to obtain the ultimate power crystal!</p>
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


      <div className="flex flex-col items-center justify-center text-white lg:pt-24">

        <div className="grid grid-cols-1 items-center justify-center m-2 lg:grid-cols-3">

          {/* grid-col-1 */}
          <div className="m-4 border-t-2 flex flex-col justify-center items-center lg:border-t-0">
            <div className="flex items-center justify-center lg:flex-col p-2">
              <GiHockey color="9B6C19" size={48}/>
              <h3 className="p-2 text-2xl font-oswald">Hockey Dashboard</h3>
            </div>        
            <p className="text-md text-center italic pb-4 lg: text-xl">I updated my local hockey leagues website</p>
            <div className="text-md text-center pb-4"><span>TECH: </span>HTML/CSS/JS/React/Firebase</div>
              <Link to="/hockey">
                <div className="flex items-center justify-center group cursor-pointer">
                  <IoNavigateOutline size={32} className="group-hover:animate-ping" />
                  <div className="p-2">Go to project page</div>
                </div>
              </Link>
              <a href="https://github.com/T-Pirozzini/Sports-Dashboard">
                <div className="flex items-center justify-center group cursor-pointer">
                  <BiCodeAlt size={32} className="group-hover:animate-ping" />                
                  <div className="pl-2">See the code</div>
                </div>
              </a>                              
          </div>

          {/* grid-col-2 */}
          <div className="m-2 flex justify-center">
            <video src="../assets/hockey-dashboard-demo.mp4" width="600" autoPlay muted loop></video>
          </div>

          {/* grid-col-3 */}
          <div className="border-t-2 mt-4 lg:border-t-0">
            <div className="self-center m-6">
              <div className="font-bold text-center text-lg">My Journey...</div>
              <div className="text-center">I am a (mostly) self-taught Full-Stack Web Developer. In 2022, I completed a Diploma in Web Development at Lighthouse Labs in Vancouver, BC and a UI/UX Certificate from Google/Coursera.</div>
            </div>        
          </div>

        </div>        
      </div>

    </div>
    
  );
}
