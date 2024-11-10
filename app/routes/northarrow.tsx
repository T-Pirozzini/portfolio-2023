import React from 'react'
import Nav from "../nav"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function NorthArrow() {
  return (
    <div className='bg-black font-quicksand text-white'>
      <Nav />
      <div className="font-exo text-6xl text-center border-t-2 m-6 p-4">North Arrow Landscapes</div>

      <div className="flex flex-col items-center m-4">
        <div className="text-xl font-semibold p-4 md:text-1xl">Client Custom Application</div>
        <div className="text-1xl p-4 md:text-2xl">I am currently taking on more clients! Reach out if you have an idea that you would like to bring to life.</div>
        <div className="text-2xl font-semibold p-4 md:text-3xl">Landscape Design Plant After-care Utility Tool</div>
        <div className="pb-4 w-3/4 text-sm md:text-lg">
Add and edit plants to your Plants List. Select and add the plants to your Clients List. Export specific plant details into a pdf, generating an After-care Document.</div>
        <div className="pb-4 w-3/4 text-sm md:text-lg">
Plants added to a Clients List can be edited and updated without affecting the original plants in the Plants List. Allowing for customized After-care plans specifically tunes to each Client.</div>
        <div className="pb-4 w-3/4 text-sm md:text-lg">Create common Plant Combination Lists to aid in Landscape Design and Installation.</div>
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