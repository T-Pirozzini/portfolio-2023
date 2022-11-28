import Nav from "../nav"

export default function Hockey() {
  return (
    <div className="bg-black font-quicksand text-white">
      <Nav />
      <div className="font-oswald text-6xl text-center border-t-2 m-6 p-4">Nanaimo Hockey League</div>

      <div className="flex flex-col items-center m-4">
        <div className="w-3/4 mb-4 text-sm md:text-lg">I redesigned my local communities hockey league website. I kept the original design so that it would feel familiar, but improved upon the functionality and increased its web responsivity for desktop, tablet and mobile devices.</div>
        <div className="text-center w-3/4 text-xl text-semibold m-4">The Division Feature</div>
        <div className="w-3/4 mb-4 text-sm md:text-lg">I noticed that the Division feature could use an upgrade. I integrated same page filtering and the ability to dynamically add and remove teams if signed in as an administrator. I used Firestore for the database and Firebase for authentication and deployment of the application.</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="justify-self-center">
          <div className="p-2">Original Website</div>
          <video src="../assets/nahl-original.mkv" width="600" autoPlay muted loop></video>
        </div>
        <div className="justify-self-center mb-6">
          <div className="p-2">My Website</div>
          <video src="../assets/hockey-dashboard-demo.mp4" width="600" autoPlay muted loop></video>
        </div>        
      </div>     
    </div>
  )
}

