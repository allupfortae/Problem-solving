import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.tsx";
import AccountPage from "./Pages/AccountPage.tsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signedin" element={<AccountPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
