import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Container from "./components/Container.jsx";
import Extra from "./components/Extra.jsx";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/:userId/workout" element={<Extra page="Workout" />} />
        <Route path="/:userId/nutrition" element={<Extra page="Nutrition" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
};

export default App;
