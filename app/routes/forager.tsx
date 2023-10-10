import React from 'react'
import Nav from "../nav"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Forager() {
  return (
    <div className='bg-black font-quicksand text-white'>
      <Nav />
      <div className="font-autour text-6xl text-center border-t-2 m-6 p-4">Forager</div>

      <div className="flex flex-col items-center m-4">
        <div className="text-xl font-semibold p-4">Why did we build this?</div>
        <div className="pb-4 w-3/4 text-sm md:text-lg">We created this app to help foster a deeper connection with nature by encouraging users to explore the wilderness around them. Our app is designed to help people discover and exchange information about forageable items in the wild, inspiring a sense of adventure and appreciation for the natural world. By providing a platform for users to share their findings with friends and the wider community, we aim to build a vibrant network of nature enthusiasts who can collaboratively explore, learn, and celebrate the wonders of the great outdoors. Together, we aspire to nurture a community that values sustainability, conservation, and the joy of discovering hidden treasures amidst the beauty of our natural landscapes.</div>
      </div>

      <div className="flex flex-col items-center m-4 border-t-2">
        <div className="p-4 text-center text-xl font-semibold">Updates in the works:</div>
        <div className="pb-4 w-3/4 text-left text-sm md:text-lg">- Combine profile page with friends request/search/notification page</div>
        <div className="pb-4 w-3/4 text-left text-sm md:text-lg">- Allow comments on Locations</div>
        <div className="pb-4 w-3/4 text-left text-sm md:text-lg">- Notifications when a users post is commented on or liked</div>      
        <div className="pb-4 w-3/4 text-left text-sm md:text-lg">- Allow user to upload a location image later (if cell service is poor)</div>    
      </div>
      <div className="flex flex-col items-center m-4 border-t-2">
        <div className="p-4 text-center text-xl font-semibold">Known Bugs:</div>
        <div className="pb-4 w-3/4 text-left text-sm md:text-lg">- Marker icons are too large and have scaling issues on iOS devices</div>
        <div className="pb-4 w-3/4 text- text-sm md:text-lg">- Saving a picture in poor cell service areas is an issue</div>              
      </div>     
      
      <div className="flex flex-col items-center m-4 border-t-2">
        <div className="p-4 text-center text-xl font-semibold">Flutter Mobile Application</div>              
        <div className="grid grid-cols-1 gap-8 m-8 md:grid-cols-4">
          <img src="../assets/forager1.png"></img>
          <img src="../assets/forager2.png"></img>
          <img src="../assets/forager3.png"></img>
          <img src="../assets/forager4.png"></img>          
        </div>
      </div>


      <div className="flex flex-col items-center m-4 border-t-2">         
        <div className="m-4 text-center">          
          <div>Forager is available on the Google Play Store and the Appstore. Check it out - we would love to get your feedback!</div>
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
