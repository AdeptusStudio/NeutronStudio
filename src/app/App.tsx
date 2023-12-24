import { useState } from "react";
import { ipcRenderer } from "electron";
import Tab from "@/components/Tab";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import logo from "../../build/icon.png";
import "../assets/styles/App.css";
import "../assets/styles/satoshi.css";
import PentestingHome from "./screens/PentestingHome";
import WorkspaceHome from "./screens/WorkspaceHome";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/pentesting" Component={PentestingHome} />
          <Route path="/workspace" Component={WorkspaceHome} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
