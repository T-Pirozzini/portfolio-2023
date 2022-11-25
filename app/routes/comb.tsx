import React from 'react'
import Nav from "../nav"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Comb() {
  return (
    <div className='bg-black font-quicksand text-white'>
      <Nav />
      <div className="font-alice text-6xl text-center border-t-2 m-6 p-4">Comb</div>

      <div className="flex flex-col items-center m-4">
        <div className="text-xl font-semibold p-4">UI/UX Design</div>
        <div className="pb-4 w-3/4">While completing the Google UI/UX Certification I was tasked with designing an application for social good. <br></br> I present to you, Comb, your shellfish harvesting companion!</div>
        <div className="pb-4 w-3/4"><span className="font-semibold">Project Goal:</span> Food prices have gone up across the nation and time spent in nature is at record lows. We are reliant upon large food providers who also have a consequential negative impact on the environment. Comb solves both of these concerns by providing accessibility to users to secure their own food source while spending quality time in nature.</div>
      </div>

      <div className="flex flex-col items-center m-4 border-t-2">
        <div className="p-4 text-center text-xl font-semibold">User Stories</div>
        <div className="pb-4 w-3/4 text-center">I created two users to help me visualize how my application could solve some of their barriers or pain points when it comes to shellfish harvesting.</div>
        <div className="grid grid-cols-1 gap-4 m-4 md:grid-cols-2">
          <img src="../assets/userstory1-comb.png"></img>
          <img src="../assets/userstory2-comb.png"></img>
        </div>
        <div className="pb-4 w-3/4 text-center">Users want all of their shellfish harvesting information in one location. Users are required to check weather, tide information and red tide warnings all from different websites to plan their activity.</div>
      </div>

      <div className="text-xl font-semibold pt-4 text-center border-t-2">Digital Wireframe</div>
      <div className="text-md italic pb-8 text-center">Created with Figma</div>
      <div className="flex flex-col items-center m-4">
        <img src="../assets/digital-wireframe-forager.png"></img>
        <div className="p-4 w-3/4 text-center">I did a quick ideation exercise to come up with ideas for how to address gaps identified in the competitive audit. My focus was specifically on the map feature and ensuring that additional features would not block its visibility or functionality.</div>
      </div>
      <div className="text-xl font-semibold pt-4 text-center border-t-2">Hi-fidelity Mockup</div>
      <div className="text-md italic pb-8 text-center">Created with Figma</div>
      <div className="flex flex-col items-center m-4 pb-4">
        <img src="../assets/mockup-comb.png"></img>
        <div className="p-4 w-3/4 text-center m-4">Based on insights from conducting usability studies, I applied a design colour scheme that is simplistic and modern. I ensured that the home screen has white space and does not become cluttered with elements.</div>
        <img src="../assets/prototype-comb.png"></img>
      </div>

      <div className="flex flex-col items-center m-4 border-t-2">
        <div className="p-4 text-center text-xl font-semibold">React-Native Mobile Application</div>      
        <div className="p-4 w-3/4 text-center">Now that the design was complete, it was time to pass it off to the web developers (also me hehe). I teamed up with Richard and we began converting my design to code! It was incredibly rewarding watching my design come to life! </div>
        <div className="grid grid-cols-1 gap-8 m-8 md:grid-cols-4">
          <img src="../assets/comb-header.png"></img>
          <img src="../assets/comb-tide.png"></img>
          <img src="../assets/search-comb.jpg"></img>
          <img src="../assets/weather-comb.png"></img>
        </div>
      </div>


      <div className="flex flex-col items-center m-4 border-t-2">
        <div className="text-xl font-semibold p-4 text-center">Final Product</div>
        <img src="../assets/banner-comb.png"></img>
        <div className="m-4 text-center">
          <div>The reason that I chose to earn a UI/UX Certificate after becoming a Full-Stack Developer was to experience the full process - from design - to implementation - and then deployment.</div>
          <br></br>
          <div>Comb is available on the Google Play Store. Check it out - we would love to get your feedback!</div>
          <br></br>
          <div>Richard is a fantastic developer and amazing to work with! We will definitely be teaming up again for future projects.</div>
          <div className="flex justify-center items-center p-4">
            <div className="pr-4">Check out his work: Richard Au</div>
            <a href="https://github.com/au-richard" ><FaGithub size={48} className="pr-4 hover:text-green-500" /></a>
            <a href="https://www.linkedin.com/in/aurichard4/" ><FaLinkedin size={48} className="pr-4 hover:text-green-500" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
