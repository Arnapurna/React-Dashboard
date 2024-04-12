import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Voice from "./Components/Voice/Voice";
import Chat from "./Components/Chat/Chat";
import Email from "./Components/Email/Email";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="voice" element={<Voice />} />
          <Route path="chat" element={<Chat />} />
          <Route path="email" element={<Email />} />
        </Routes>
        {/* <SideBarMenu/> */}
      </Router>
    </>
  );
}

export default App;
