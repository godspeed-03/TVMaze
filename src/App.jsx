import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SummaryPage from "./Pages/SummaryPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route  path="/show/:id" element={<SummaryPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
