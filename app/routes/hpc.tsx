import React from 'react'
import Nav from "../nav"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HPC() {
  return (
    <div className='bg-black font-quicksand text-white'>
      <Nav />
      <div className="font-exo text-6xl text-center border-t-2 m-6 p-4">HPC Ltd. Mobile</div>

      <div className="flex flex-col items-center m-4">
        <div className="text-xl font-semibold p-4 md:text-1xl">Client Custom Application</div>
        <div className="text-1xl p-4 md:text-2xl">I am currently taking on more clients! Reach out if you have an idea that you would like to bring to life.</div>
        <div className="text-2xl font-semibold p-4 md:text-3xl">Time-Tracking/Payroll Utility</div>
        <div className="pb-4 w-3/4 text-sm md:text-lg">
        Developed an operational tool for an excavation company that provides real-time monitoring of employee activities.</div>
        <div className="pb-4 w-3/4 text-sm md:text-lg">
        Created a managerial interface displaying payroll records, facilitating seamless payroll processing.</div>        
      </div>      
      
      <div className="flex flex-col items-center border-t-2">
        <div className="p-4 text-center text-xl font-semibold">Check out some screenshots!</div>              
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 m-8">
          <img src="../assets/hpc1.jpg"></img>
          <img src="../assets/hpc2.jpg"></img>
          <img src="../assets/hpc3.png"></img>
          <img src="../assets/hpc4.jpg"></img>                
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