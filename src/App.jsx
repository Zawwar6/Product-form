import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductForm from "./pages/ProductForm";
import ShowDetail from "./pages/ShowDetail";

function App() {
  const [speakers, setSpeakers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  return (
   
      <Routes>
        <Route
          path="/"
          element={
            <ProductForm
              speakers={speakers}
              setSpeakers={setSpeakers}
              editingIndex={editingIndex}
              setEditingIndex={setEditingIndex}
            />
          }
        />
        <Route
          path="/show-detail"
          element={
            <ShowDetail
              speakers={speakers}
              setSpeakers={setSpeakers}
              setEditingIndex={setEditingIndex}
            />
          }
        />
      </Routes>
   
  );
}

export default App;
