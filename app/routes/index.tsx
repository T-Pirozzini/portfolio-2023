import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import { GiNautilusShell, GiHockey, GiCrystalGrowth } from "react-icons/gi";
import { FaHatWizard, FaGem, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoNavigateOutline } from "react-icons/io5"


export default function Index() {
  const user = useOptionalUser();

  return (
    <div className="bg-black">      
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
        <div className="flex justify-center items-center text-xl space-x-8 mx-6 text-white">
          <div>Projects</div>
          <div>Resume</div>
          <FaGithub size={24}/>
          <FaLinkedin size={24} />          
        </div>
      </header>

      <div className="flex flex-col text-white font-quicksand">
        <div className="w-1/2 self-center pb-6">
          <div className="font-bold text-center text-lg">Why Programming?</div>
          <div className="p-2">You know that common movie scene where a programmer furiously types on a keyboard and then magic happens? I want to possess that magic.</div>
        </div>
        <div className="w-1/2 self-center pb-6">
          <div className="font-bold text-center text-lg">Early Passion</div>
          <div className="p-2">While I was younger I would make websites with Netscape Navigator, animate in Macromedia Flash and build custom scenarios in Age of Empires 2, but after high school I pursued my other interest, athletics. This is a story of rekindling passion.</div> 
        </div>
        <div className="w-1/2 self-center pb-6">
          <div className="font-bold text-center text-lg">My Journey...</div>
          <div className="p-2">I am a (mostly) self-taught Full-Stack Web Developer. In 2022, I completed a Diploma in Web Development at Lighthouse Labs in Vancouver, BC and a UI/UX Certificate from Google/Coursera.</div>
        </div>
      </div>   
    
      <div className="flex flex-col items-start text-white">

        <div className="self-start m-10">
          <div className="flex justify-between m-2">
            <div className="m-4">
              <div className="flex items-center p-2">
                <GiNautilusShell color="#B74F6F" size={48}/>
                <h3 className="p-4 font-alice text-4xl">Comb</h3>
              </div>
              <div className="max-w-xl">
                <p className="text-xl italic pb-4">Your Shellfish Harvesting Companion</p>
                <div className="text-md pb-4"><span>TECH: </span>Figma/JS/React-Native/Firebase/Google-maps</div>
                <div className="flex items-center">
                  <IoNavigateOutline size={24} />
                  <div className="p-2">Go to project page</div>
                </div>
                <div className="flex items-center">
                  <BiCodeAlt size={24} />                
                  <div className="pl-2">See the code</div>
                </div>
              </div>        
            </div>
            <div className="">
              <video src="../assets/comb-demo.mp4" width="400" preload="auto" autoPlay loop></video>
            </div>        
          </div>
        </div>

        <div className="self-end m-10">
          <div className="flex">
            <div className="m-8">
              <video src="../assets/shift-wizard-arcade-demo.mp4" width="400" preload="auto" autoPlay muted loop></video>
            </div>        
            <div>
              <div className="flex items-center mt-6">
                <FaHatWizard color="#3143F2" size={48}/>
                <h3 className="p-4 font-alice text-4xl">Shift Wizard</h3>
              </div>        
              <p className="text-xl italic">Travel the board while absorbing elemental powers.</p>
              <div className="flex">
                <p className="text-xl italic pb-4 pr-2">Cast spells to manipulate your path to the ultimate power crystal!</p>
                <FaGem color="6CE5FB" size={24} />
              </div>
              <div className="text-md pb-4"><span>TECH: </span>GameMaker Studio 2</div>
                <div className="flex items-center">
                  <IoNavigateOutline size={24} />
                  <div className="p-2">Go to project page</div>
                </div>
                <div className="flex items-center">
                  <BiCodeAlt size={24} />                
                  <div className="pl-2">See the code</div>
                </div>
            </div>
          </div>        
        </div>

        <div className="self-start m-10">
          <div className="flex justify-between m-2">
            <div>
              <div className="flex items-center p-2">
                <GiHockey color="9B6C19" size={48}/>
                <h3 className="p-4 font-alice text-4xl">Hockey Dashboard</h3>
              </div>        
              <p className="text-xl italic pb-4">I recreated my local hockey leagues website</p>
              <div className="text-md pb-4"><span>TECH: </span>HTML/CSS/JS/React/Firebase</div>
                <div className="flex items-center">
                  <IoNavigateOutline size={24} />
                  <div className="p-2">Go to project page</div>
                </div>
                <div className="flex items-center">
                  <BiCodeAlt size={24} />                
                  <div className="pl-2">See the code</div>
                </div>              
            </div>
            <div className="m-4">
              <video src="../assets/hockey-dashboard-demo.mp4" width="600" preload="auto" autoPlay muted loop></video>
            </div>        
          </div>        
        </div>
        
      </div>

    </div>
  );
}
