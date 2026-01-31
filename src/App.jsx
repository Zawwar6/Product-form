import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductForm from "./pages/ProductForm"
import ShowDetail from "./pages/ShowDetail";

function App() {
  const [speakers, setSpeakers] = useState([]); // central state for all speakers

  return (
    
      <Routes>
        <Route
          path="/"
          element={<ProductForm speakers={speakers} setSpeakers={setSpeakers} />}
        />
        <Route
          path="/show-detail"
          element={<ShowDetail speakers={speakers} setSpeakers={setSpeakers} />}
        />
      </Routes>
    
  );
}

export default App;
