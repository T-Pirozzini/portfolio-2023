import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import { GiNautilusShell } from "react-icons/gi";
import CombDemo from "../assets/comb-demo.mp4"

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
    
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-start m-4 w-4/5">
        <div className="flex justify-between text-white m-2 p-2 border-2 border-slate-500 ring-red-400 ring-2 ring-offset-4 rounded-md">
          <div>
            <div className="flex items-center">
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

      <div className="flex m-4 w-4/5 justify-end">
        <div className="flex justify-between text-white m-2 p-2 border-2 border-slate-500 ring-red-400 ring-2 ring-offset-4 rounded-md">
          <div>
            <div className="flex items-center">
              <GiNautilusShell color="#B74F6F" size={48}/>
              <h3 className="p-2 font-alice text-4xl">Shift Wizard</h3>
            </div>        
            <p className="text-md italic w-fit">Travel the board while absorbing elemental powers.</p>
            <p className="text-md italic w-fit">Cast spells to manipulate your path to the ultimate power crystal!</p>
          </div>
          <div className="">
            <video src="../assets/comb-demo.mp4" width="400" preload="auto" autoPlay loop></video>
          </div>        
        </div>        
      </div> 
      </div>

    </div>
  );
}
