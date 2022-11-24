import React from 'react'
import Nav from "../nav"

export default function Comb() {
  return (
    <div className='bg-black font-quicksand text-white h-auto'>
      <Nav />
      <div className="font-vt323 text-6xl text-center">Shift Wizard</div>

      <div className="grid grid-cols-1 m-10 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div>Progress 1</div>
          <img src="./assets/shift1.png" alt="Shift Wizard 1"></img>
        </div>
        <div>
          <div>Progress 2</div>
          <img src="./assets/shift2.png" alt="Shift Wizard 2"></img>
        </div>
        <div>
          <div>Progress 3</div>
          <img src="./assets/shift3.png" alt="Shift Wizard 3"></img>
        </div>
      </div>

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


    </div>
  )
}
