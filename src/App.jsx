import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SummaryPage from "./Pages/SummaryPage";
import Haeder from "./Components/Haeder";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Router>
        <Haeder />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route  path="/show/:id" element={<SummaryPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
