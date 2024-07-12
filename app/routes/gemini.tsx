import React from 'react'
import Nav from "../nav"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Gemini() {
  return (
    <div className='bg-black font-quicksand text-white'>
      <Nav />
      <div className="font-exo text-6xl text-center border-t-2 m-6 p-4">Gemini Mobile</div>

      <div className="flex flex-col items-center m-4">
        <div className="text-xl font-semibold p-4 md:text-1xl">Client Custom Application</div>
        <div className="text-1xl p-4 md:text-2xl">I am currently taking on more clients! Reach out if you have an idea that you would like to bring to life.</div>
        <div className="text-2xl font-semibold p-4 md:text-3xl">Site Report/Profit & Loss Utility Tool</div>
        <div className="pb-4 w-3/4 text-sm md:text-lg">
Developed a real-time site reporting system, enabling clients to streamline daily workflows efficiently.</div>
        <div className="pb-4 w-3/4 text-sm md:text-lg">
Implemented an admin dashboard with visual charts to display monthly time totals per property, facilitating accurate scheduling and profit tracking.</div>
        <div className="pb-4 w-3/4 text-sm md:text-lg">Designed an intuitive storage filing system for managers to search, access, and edit report records, enhancing issue resolution and updates.</div>
      </div>      
      
      <div className="flex flex-col items-center border-t-2">
        <div className="p-4 text-center text-xl font-semibold">Check out some screenshots!</div>              
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 m-8">
          <img src="../assets/gemini1.png"></img>
          <img src="../assets/gemini2.png"></img>
          <img src="../assets/gemini3.png"></img>
          <img src="../assets/gemini4.png"></img>          
          <img src="../assets/gemini5.png"></img>          
                
        </div>
      </div>


      <div className="flex flex-col items-center m-4 border-t-2">         
        <div className="m-4 text-center">          
          <div>I build custom cross-platform apps! Reach out if you have an idea that you would like to bring to life. I am currently accepting more clients.</div>          
        </div>
      </div>
    </div>
  )
}