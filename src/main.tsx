import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 4000,
        style: {
          background: "#0b5d3b",
          color: "#fff",
          borderRadius: "12px",
          fontSize: "16px",
          fontWeight: "600",
          padding: "16px",
        },
      }}
    />
  </>
);