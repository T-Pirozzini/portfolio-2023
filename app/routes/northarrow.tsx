import React from 'react';
import Nav from "../nav";
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
          Add and edit plants to your Plants List. Select and add the plants to your Clients List. Export specific plant details into a pdf, generating an After-care Document.
        </div>
        <div className="pb-4 w-3/4 text-sm md:text-lg">
          Plants added to a Clients List can be edited and updated without affecting the original plants in the Plants List, allowing for customized After-care plans specifically tuned to each Client.
        </div>
        <div className="pb-4 w-3/4 text-sm md:text-lg">Create common Plant Combination Lists to aid in Landscape Design and Installation.</div>
      </div>      
      
      <div className="flex flex-col items-center border-t-2">
        <div className="p-4 text-center text-xl font-semibold">Check out some screenshots!</div>              
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 m-8">
          <img src="../assets/na1.png" alt="Screenshot 1" />
          <img src="../assets/na2.png" alt="Screenshot 2" />
          <img src="../assets/na3.png" alt="Screenshot 3" />
          <img src="../assets/na4.png" alt="Screenshot 4" />
          <img src="../assets/na5.png" alt="Screenshot 5" />
        </div>
      </div>

      <div className="flex flex-col items-center m-4 border-t-2">
        <div className="m-4 text-center">          
          <div>I build custom cross-platform apps! Reach out if you have an idea that you would like to bring to life. I am currently accepting more clients.</div>    
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/T-Pirozzini" className="hover:text-blue-300" aria-label="GitHub"><FaGithub size={32}/></a>
            <a href="https://www.linkedin.com/in/travis-pirozzini-2522b5115/" className="hover:text-blue-300" aria-label="LinkedIn"><FaLinkedin size={32} /></a>
          </div>
        </div>

        {/* Contact Email Section */}
        <div className="text-center mt-6">
          <p className="text-lg font-semibold">Contact Me</p>
          <a href="mailto:your-email@example.com" className="text-blue-300 hover:underline">your-email@example.com</a>
        </div>
      </div>
    </div>
  )
}
