import Nav from "../nav"

export default function Hockey() {
  return (
    <div className="bg-black font-quicksand text-white h-auto">
      <Nav />
      <div className="m-4">
        <video src="../assets/hockey-dashboard-demo.mp4" width="600" autoPlay muted loop></video>
      </div>
      <div className="m-4">
        <video src="../assets/nahl-original.mp4" width="600" autoPlay muted loop></video>
      </div>      
      
    </div>
  )
}

