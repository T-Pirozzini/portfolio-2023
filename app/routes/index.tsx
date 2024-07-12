import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import { GiNautilusShell, GiHockey } from "react-icons/gi";
import { FaHatWizard, FaGem, FaSeedling, FaGooglePlay, FaAppStore } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoNavigateOutline } from "react-icons/io5";
import { FcSportsMode } from "react-icons/fc";
import { BiGhost } from "react-icons/bi";

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
          <FcSportsMode color="#B74F6F" size={48}/>
          <h3 className="p-4 font-specialElite text-3xl">Ride.Tide.Stride</h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-md italic pb-4 lg:text-xl">Join your friends in some friendly competition with this exercise motivator!</p>
          <div className="text-sm pb-4"><span>TECH: </span>Flutter/Firebase/Strava API</div>
        </div>
        <Link to="/rts" className="flex group items-start cursor-pointer">                  
            <IoNavigateOutline size={32} className="group-hover:animate-ping" />
            <div className="p-2">Go to project page</div>
        </Link>
        <a href="https://github.com/T-Pirozzini/ride_tide_stride">
          <div className="flex items-start group cursor-pointer">
            <BiCodeAlt size={32} className="group-hover:animate-ping" />                
            <div className="pl-2">See the code</div>
          </div>
        </a>
        <div>
          <a href="https://play.google.com/store/apps/details?id=com.tpiro.ride_tide_stride">
            <div className="flex items-start group cursor-pointer mt-2">              
              <FaGooglePlay size={32} className="group-hover:animate-ping" />                
              <div className="pl-2">Download (Android)</div>
            </div>
          </a>
        </div>
        <div>
          <a href="https://apps.apple.com/us/app/ride-tide-stride/id6468181824">
            <div className="flex items-start group cursor-pointer mt-2">              
              <FaAppStore size={32} className="group-hover:animate-ping" />                
              <div className="pl-2">Download (iOS)</div>
            </div>
          </a>
        </div>
      </div>
    </div>

    {/* grid-col-2 */}
    <div className="flex justify-center">
      <div className="pt-4">
        <video  width="300" preload="auto" autoPlay loop muted>        
          <source src="../assets/rts_demo_july_2024.mp4" type="video/mp4"/>
        </video>
      </div> 
    </div>        

    {/* grid-col-3 */}
    <div className="self-center border-t-2 m-4 lg:border-t-0">
      <div className="font-bold text-center text-lg pt-4">Why Mobile Development?</div>
      <div className="text-center">Accessibility. Most people have a phone and web apps are becoming a thing of the past. This application is available on the Google Play Store and Apple Appstore. Check it out!</div>
    </div>

  </div>
</div> 

<div className="flex flex-col items-center justify-center text-white lg:pt-12">

<div className="grid grid-cols-1 m-2 lg:grid-cols-3 lg:pt-12">

  

  {/* gird-col-1 */}
  <div className="self-center pb-6">
    <div className="font-bold text-center text-lg">Cross-Platform Development</div>
    <div className="text-center">Building for all mobile platforms and sharing with the public has been my primary focus in 2023. I have received amazing feedback so far - it is satisfying updating applications that are live! Thank you to everyone who has helped me test my projects!</div> 
  </div>

  {/* grid-col-2 */}
  <div className="m-4 border-t-2 flex flex-col justify-center items-center lg:border-t-0 lg:flex-row">
    <div className="p-4">
      <video src="../assets/forager_demo.mp4" width="300" autoPlay muted loop></video>
    </div> 
  </div>

  {/* grid-col-3*/}
  <div className="flex flex-col justify-center items-center">
    <div className="flex mt-6">
      <h3 className="p-4 pl-0 text-4xl font-autour">Forager</h3>
      <FaSeedling color="#80F860" size={48}/>
    </div>        
    <p className="text-sm italic pb-4 lg:text-xl">An expanded version of Comb. Drop markers, save and share your favourite foraging locations with friends or the public community board.</p>
    <div className="text-md pb-4"><span>TECH: </span>Flutter/Firebase/Google Maps API</div>
    <div>
    <Link to="/forager">
      <div className="flex items-center group cursor-pointer">
        <IoNavigateOutline size={32} className="group-hover:animate-ping" />
        <div className="p-2">Go to project page</div>
      </div>
    </Link>
    <a href="https://github.com/T-Pirozzini/flutter_forage_app">
      <div className="flex items-center group cursor-pointer">
        <BiCodeAlt size={32} className="group-hover:animate-ping" />                
        <div className="pl-2">See the code</div>
      </div>
    </a>
    <div>
          <a href="https://play.google.com/store/apps/details?id=com.tpiro.flutter_forager_app">
            <div className="flex items-start group cursor-pointer mt-2">              
              <FaGooglePlay size={32} className="group-hover:animate-ping" />                
              <div className="pl-2">Download (Android)</div>
            </div>
          </a>
        </div>
        <div>
          <a href="https://apps.apple.com/us/app/forager/id6453358754">
            <div className="flex items-start group cursor-pointer mt-2">              
              <FaAppStore size={32} className="group-hover:animate-ping" />                
              <div className="pl-2">Download (iOS)</div>
            </div>
          </a>
        </div>
      </div>
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

<div className="flex flex-col items-center justify-center text-white lg:pt-12">

<div className="grid grid-cols-1 m-2 lg:grid-cols-3 lg:pt-12">

  

  {/* gird-col-1 */}
  <div className="self-center pb-6">
    <div className="font-bold text-center text-lg">The Thrill of Competition</div>
    <div className="text-center">This second GameJam was a grind just like the first one! There is something special about going hard for a weekend. One focus. I am really happy with the final product, although it is still extremely buggy! We challenged ourselves and learned so much. Looking forward to the next one - in Unity!</div> 
  </div>

  {/* grid-col-2 */}
  <div className="m-4 border-t-2 flex flex-col justify-center items-center lg:border-t-0 lg:flex-row">
    <div className="p-4">
      <video src="../assets/souloArcade-demo.mp4" width="500" height="600" autoPlay muted loop></video>
    </div> 
  </div>

  

  {/* grid-col-3*/}
  <div className="flex flex-col justify-center items-center">
    <div className="flex mt-6">
      <h3 className="p-4 pl-0 text-6xl font-vt323">Soulo</h3>
      <BiGhost color="#BE60F8" size={48}/>
    </div>        
    <p className="text-sm italic pb-4 lg:text-xl">My second GameJam! Theme: Delivery. Fight your way through the realm of limbo between life and death for a second chance at life! Deliver your soul back to your body.</p>
    <div className="text-md pb-4"><span>TECH: </span>GameMaker Studio 2 (pair programmed with Richard) - assets made by Haydn in Aseprite</div>
    <Link to="/soulo">
      <div className="flex items-center group cursor-pointer">
        <IoNavigateOutline size={32} className="group-hover:animate-ping" />
        <div className="p-2">Go to project page</div>
      </div>
    </Link>
    <a href="https://github.com/T-Pirozzini/CURRENT-GM48-Delivery">
      <div className="flex items-center group cursor-pointer">
        <BiCodeAlt size={32} className="group-hover:animate-ping" />                
        <div className="pl-2">See the code</div>
      </div>
    </a>
  </div>          

</div>        
</div>

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


      

    </div>
    
  );
}
