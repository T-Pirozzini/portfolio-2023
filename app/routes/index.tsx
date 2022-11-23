import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import { GiNautilusShell } from "react-icons/gi";
import { GiHockey } from "react-icons/gi";
import { FaHatWizard } from "react-icons/fa";

export default function Index() {
  const user = useOptionalUser();

  return (
    <div className="bg-black">      
      <header className="h-28 bg-black-500 flex justify-between">
        <img src="../assets/emo.png" alt="profile-logo" className="logo flex justify-center min-h-24 m-4 rounded-full" />
        <div className="flex justify-center items-center space-x-4 mx-4 text-white">
          <h1>Projects</h1>
          <h1>Resume</h1>
          <h1>Github</h1>
          <h1>LinkedIn</h1>
        </div>
      </header>    
    
      <div className="flex flex-col justify-center items-center w-full text-white">

        <div className="flex justify-start items-start m-4">
          <div className="flex justify-between m-2 ">
            <div className="">
              <div className="flex items-center p-2">
                <GiNautilusShell color="#B74F6F" size={48}/>
                <h3 className="p-2 font-alice text-4xl">Comb</h3>
              </div>        
              <p className="text-md italic">Your Shellfish Harvesting Companion</p>
            </div>
            <div className="">
              <video src="../assets/comb-demo.mp4" width="400" preload="auto" autoPlay loop></video>
            </div>        
          </div>
        </div>

        <div className="flex m-4 max-w-2xl items-end justify-end h-2/5">
          <div className="flex itmes-center justify-between">
            <div className="">
              <video src="../assets/shift-wizard-demo.mp4" width="600" preload="auto" autoPlay muted loop></video>
            </div>        
            <div>
              <div className="flex items-center">
                <FaHatWizard color="#3143F2" size={48}/>
                <h3 className="p-2 font-alice text-4xl">Shift Wizard</h3>
              </div>        
              <p className="text-md italic pb-2">Travel the board while absorbing elemental powers.</p>
              <p className="text-md italic">Cast spells to manipulate your path to the ultimate power crystal!</p>
            </div>
          </div>        
        </div>

        <div className="flex m-4 max-w-2xl items-end justify-end h-2/5">
          <div className="flex itmes-center justify-between">
            <div className="">
              <video src="../assets/hockey-dashboard-demo.mp4" width="600" preload="auto" autoPlay muted loop></video>
            </div>        
            <div>
              <div className="flex items-center">
                <GiHockey color="#1C9F54" size={48}/>
                <h3 className="p-2 font-alice text-4xl">Shift Wizard</h3>
              </div>        
              <p className="text-md italic pb-2">Travel the board while absorbing elemental powers.</p>
              <p className="text-md italic">Cast spells to manipulate your path to the ultimate power crystal!</p>
            </div>
          </div>        
        </div>
        
      </div>

    </div>
  );
}
