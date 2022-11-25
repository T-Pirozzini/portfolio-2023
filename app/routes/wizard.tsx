import Nav from "../nav"
import { GiWizardStaff } from "react-icons/gi" 
import { FaHatWizard } from "react-icons/fa";

export default function Wizard() {
  return (
    <div className='bg-black font-quicksand text-white h-auto'>
      <Nav />
      <div className="font-vt323 text-6xl text-center border-t-2 m-10 p-4">Shift Wizard</div>
      <div className="flex justify-center m-4">
        <div className="w-3/4">An early goal of mine when I first started out on my programming journey was to participate in a GameJam. My goal came true on the weekend of October 14-16th, 2022 when I entered the GM48 competition. A GameJam is a game building competition where a theme is selected and then an individual or team has one weekend to complete and submit a game (somewhat) functional game that also includes original art and sound. <br></br><br></br> GameMaker Studio 2 uses a language similar to Javascript, so I was able to apply my past year of programming knowledge to the task. A friend of mine, Haydn, was a huge asset and produced all of the artwork that you see below using Aseprite. <br></br><br></br> This was such a challenging, but rewarding experience and I am so excited to show off my developing skills at the next competition!</div>
      </div>

      <div className="grid grid-cols-1 m-10 gap-12 md:grid-cols-2 lg:grid-cols-3 border-t-2 p-4">
        <div>
          <div>Progress Screenshot #1</div>
          <img src="./assets/shift1.png" alt="Shift Wizard 1"></img>
          <div>Setting up the gameboard and positioning the tiles with placeholder art assets.</div>
        </div>
        <div>
          <div>Progress Screenshot #2</div>
          <img src="./assets/shift2.png" alt="Shift Wizard 2"></img>
          <div>Implementing player movement and element collection.</div>
        </div>
        <div>
          <div>Progress Screenshot #3</div>
          <img src="./assets/shift3.png" alt="Shift Wizard 3"></img>
          <div>Incorporating spell casting functionality.</div>
        </div>
      </div>

      
      <div className="text-center text-xl font-semibold border-t-2 m-2 pt-4">Haydn's Art Assets created in Aseprite</div>
      <div className="text-center text-md italic">Created in Aseprite</div>
      <div className="grid grid-cols-1 m-10 gap-12 md:grid-cols-2 lg:grid-cols-3">
      <div>
          <div>Fire Element</div>
          <img src="./assets/fire.png" alt="Fire"></img>
        </div>
        <div>
          <div>Electric Element</div>
          <img src="./assets/lightning.png" alt="Electric"></img>
        </div>
        <div>
          <div>Earth Element</div>
          <img src="./assets/tree.png" alt="Earth"></img>
        </div>
        <div>
          <div>Power Crystal</div>
          <img src="./assets/crystal.png" alt="Crystal"></img>
        </div>
        <div className="">
          <div>Wizard</div>
          <img src="./assets/wizard.png" alt="Wizard"></img>
        </div>

      </div>

      <div className="flex flex-col border-t-2 p-4">
        <div className="w-3/4 self-center">
          <video src="../assets/shift-wizard-arcade-demo.mp4" width="" autoPlay muted loop></video>
        </div>
        <a href="https://gm48.net/"><div className="flex justify-center items-center text-lg hover:animate-pulse p-4">
          <FaHatWizard color="#3143F2" size={48}/>
          <div>My original game submission can be viewed here</div>
          <GiWizardStaff color="#9B6C19" size={48}/>
        </div></a>
        
      </div>







    </div>
  )
}

