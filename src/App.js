import "./App.css"
import SideNav from "./components/side_nav/SideNav"
import Navbar from "./components/navbar/Navbar"
// require("dotenv").config({ path: "/.env" });

function App() {
  return (
    <div className="App">
      <SideNav />
      <Navbar />
    </div>
  )
}

export default App
