import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./components/pages/home";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App>
      <Home />
    </App>
  </StrictMode>
);
