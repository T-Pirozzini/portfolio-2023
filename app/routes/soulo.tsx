import Nav from "../nav"
import { GiWizardStaff } from "react-icons/gi" 
import { FaHatWizard } from "react-icons/fa";
import { BiGhost } from "react-icons/bi";
import {FiDownload} from "react-icons/fi";

export default function Soulo() {
  return (
    <div className='bg-black font-quicksand text-white'>
      <Nav />
      <div className="font-vt323 text-6xl text-center border-t-2 m-10 p-4">Soulo</div>
      <div className="flex justify-center m-4">
        <div className="w-3/4 text-sm md:text-lg">This game was created during GM48's 44th GameJam as a team project.</div>         
      </div>
      <div className="flex justify-center m-4">
        <div className="text-xl pr-2">Objective:</div>
        <div className="w-3/4 text-sm md:text-lg font-style: italic">Fight your way through the realm of limbo between life and death for a second chance at life! Deliver your soul back to your body. </div>         
      </div>
      <div className="flex justify-center m-4">
        <div className="text-xl pr-2">Challenges:</div>
        <div className="w-3/4 text-sm md:text-lg">This was our first time doing a group project on GameMaker, so we encountered many issues with version control while working together. </div>         
      </div>
      <div className="flex justify-center m-4">
        <div className="text-xl pr-2">Gameplay:</div>
        <div>
            <div>- While on the ground you can move Left, Right and Jump</div>
            <div>- While floating you MUST use your bullets for propulsion to move around</div>
            <div>- Switch between 3 weapon types (Pistol, Machine Gun and Shotgun)</div>
            <div>- Collect shields so you can take some extra hits from enemies</div>
        </div>
        <div className="text-xl pr-2 pl-4">Controls:</div>
        <div>
            <div>W: Jump</div>
            <div>A: Left</div>
            <div>D: Right</div>
            <div>Left-Shift: Switch Weapon (Pistol, Machine Gun, Shotgun)</div>
            <div>Mouse Left-Click: Shoot</div>
        </div>                 
      </div>    
      
      <div className="flex justify-center">
            <a href="https://gm48.net/game-jams/delivery/games/soulo"><div className="flex justify-center items-center text-md text-center hover:animate-pulse p-4"><BiGhost size={32} className="group-hover:animate-ping pr-2" />Check out the submission</div> </a>
            <a href="https://drive.google.com/drive/folders/1NzrmawuwvrYOIOw-_bXu4MfO6NtIOBZ4"><div className="flex justify-center items-center text-md text-center hover:animate-pulse p-4"><FiDownload size={32} className="group-hover:animate-ping pr-2" />Download the game here</div></a>
        </div>

      <div className="grid grid-cols-1 m-10 gap-12 md:grid-cols-2 lg:grid-cols-2 border-t-2 p-4">
        <div>
          <div>Start Screen:</div>
          <img src="./assets/soulo1.png" alt="Soulo start"></img>          
        </div>
        <div>
          <div>Level 1:</div>
          <img src="./assets/soulo2.png" alt="Soulo level 2"></img>          
        </div>
        <div>
          <div>Level 2:</div>
          <img src="./assets/soulo3.png" alt="Shift level 2"></img>          
        </div>
        <div>
          <div>End Screen:</div>
          <img src="./assets/soulo4.png" alt="Soulo end"></img>          
        </div>
      </div>

      
      <div className="text-center text-xl font-semibold border-t-2 m-2 pt-4">Haydn's Art Assets created in Aseprite</div>
      <div className="text-center text-md italic">Created in Aseprite</div>
      <div className="grid grid-cols-1 m-10 gap-12 md:grid-cols-2 lg:grid-cols-3">
      <div>
          <div>Main Character</div>
          <img src="./assets/DennyJumpRight.png" alt="Denny"></img>
        </div>
        <div>
          <div>Devil Enemy</div>
          <img src="./assets/DennyEnemyDevilHit.png" alt="Devil"></img>
        </div>
        <div>
          <div>Bird Enemy</div>
          <img src="./assets/DennyEnemyBirdFlying.png" alt="Bird"></img>
        </div>
        <div>
          <div>Bat Enemy</div>
          <img src="./assets/DennyEnemyBatFlying.png" alt="Bat"></img>
        </div>        

      </div>

      <div className="flex flex-col border-t-2 p-4">
        <div className="w-3/4 self-center">
          <video src="../assets/souloArcade-demo.mp4" width="" autoPlay muted loop></video>
        </div>
        <a href="https://gm48.net/game-jams/delivery/games/soulo"><div className="flex justify-center items-center text-md text-center hover:animate-pulse p-4">
          <BiGhost color="#BE60F8" size={48}/>
          <div>My original game submission can be viewed here</div>          
        </div></a>        
      </div>
    </div>
  )
}

