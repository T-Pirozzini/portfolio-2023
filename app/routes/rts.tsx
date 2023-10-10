import React from 'react'
import Nav from "../nav"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function RTS() {
  return (
    <div className='bg-black font-quicksand text-white'>
      <Nav />
      <div className="font-specialElite text-6xl text-center border-t-2 m-6 p-4">Ride.Tide.Stride</div>

      <div className="flex flex-col items-center m-4">
        <div className="text-xl font-semibold p-4">Why did I build this?</div>
        <div className="pb-4 w-3/4 text-sm md:text-lg">Submit your activities to the leaderboard to complete across three categories: Moving Time, Distance and Elevation. The leaderboard resets at the end of each month. Get after it!</div>
      </div>

      <div className="flex flex-col items-center m-4 border-t-2">
        <div className="p-4 text-center text-xl font-semibold">Updates in the works:</div>
        <div className="pb-4 w-3/4 text-left text-sm md:text-lg">- Allow commenting on submitted activities</div>
        <div className="pb-4 w-3/4 text-left text-sm md:text-lg">- Likes feature</div>
        <div className="pb-4 w-3/4 text-left text-sm md:text-lg">- Notifications when a users post is commented on or liked</div>      
        <div className="pb-4 w-3/4 text-left text-sm md:text-lg">- Create feature to create a challenge with the ability to make it locked or require a password</div>    
      </div>
      <div className="flex flex-col items-center m-4 border-t-2">
        <div className="p-4 text-center text-xl font-semibold">Known Bugs:</div>
        <div className="pb-4 w-3/4 text-left text-sm md:text-lg">- </div>
        <div className="pb-4 w-3/4 text- text-sm md:text-lg">- </div>              
      </div>     
      
      <div className="flex flex-col items-center m-4 border-t-2">
        <div className="p-4 text-center text-xl font-semibold">Flutter Mobile Application</div>              
        <div className="grid grid-cols-1 gap-8 m-8 md:grid-cols-4">
          <img src="../assets/rts1.png"></img>
          <img src="../assets/rts2.png"></img>
          <img src="../assets/rts3.png"></img>
          <img src="../assets/rts4.png"></img>          
        </div>
      </div>


      <div className="flex flex-col items-center m-4 border-t-2">         
        <div className="m-4 text-center">          
          <div>Ride.Tide.Stride is available on the Google Play Store and the Appstore. Check it out - I would love to get your feedback!</div>          
        </div>
      </div>
    </div>
  )
}