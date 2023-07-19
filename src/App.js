import React from "react";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import SecondNetwork from "./Pages/SecondNetwork/SecondNetwork";
import MainNetwork from "./Pages/MainNetwork/MainNetwork";
import Dozvon from "./Pages/Dozvon/Dozvon";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<SecondNetwork />} />
        <Route path="/mainNetwork" element={<MainNetwork />} />
        <Route path="/dozvon" element={<Dozvon />} />
      </Routes>
    </HashRouter>
  );
}
