import { useState } from "react";
import UpdateElectron from "@/components/update";
import { ipcRenderer } from "electron";
import Home from "./screens/Home";
import "../assets/styles/App.css";
import "../assets/styles/satoshi.css"

console.log(
  "[App.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function App() {
  function closeButton() {
    ipcRenderer.send("close-window");
  }
  function minimizeButton() {
    ipcRenderer.send("minimize-window");
  }
  function maximizeButton() {
    ipcRenderer.send("maximize-window");
  }
  return (
    <div>
      <div className="bar">
        <div style={{marginLeft:"10px", display: "flex", gap:"5px"}}>
          <img src={`https://adeptus-team.web.app/assets/logo_small-90d5f2b2.png`}/>
        <span className="centered-text-main">Neutron Studio</span>
        </div>
        <div className="button-container">
          <UpdateElectron/>
          <button className="minimize" onClick={minimizeButton}>
            &#xE921;
          </button>
          <button className="minimize" onClick={maximizeButton}>
            
          </button>
          <button className="close" id="close" onClick={closeButton}>
            &#xE8BB;
          </button>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default App;
