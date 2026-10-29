import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProjectCaseStudy from "./components/projects/ProjectCaseStudy.jsx";
import PlaceitCaseStudy from "./components/projects/PlaceitCaseStudy.jsx";
import WakaCaseStudy from "./components/projects/WakaCaseStudy.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="projects/glad-style-fashion" element={<ProjectCaseStudy />} />
      <Route path="projects/placeit" element={<PlaceitCaseStudy />} />
      <Route path="projects/waka" element={<WakaCaseStudy />} />
    </Routes>
  </BrowserRouter>,
);
